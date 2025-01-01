import json
import re

def load_nfl_players():
    """Load the NFL players database."""
    try:
        with open('all_nfl_players.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("Error: all_nfl_players.json not found. Run fetch_all_players.py first.")
        return {}

def find_player_id(name, all_players):
    """Find player ID using various name matching strategies."""
    # Special case for Lamar Jackson (QB)
    if name.lower() == "lamar jackson":
        return "3916387"
        
    name_lower = name.lower()
    
    # Try exact match first
    for player_name, data in all_players.items():
        if player_name.lower() == name_lower:
            return data['id']
    
    # Try without suffixes (II, III, Jr., etc.)
    name_parts = name_lower.split()
    if len(name_parts) > 2:
        # Try first two words for names with suffixes
        base_name = ' '.join(name_parts[:2])
        for player_name, data in all_players.items():
            player_lower = player_name.lower()
            if base_name in player_lower:
                print(f"Found {name} as {player_name} (matched without suffix)")
                return data['id']
                
        # Try without team name if it exists
        if name_parts[-1].upper() in ["II", "III", "JR", "JR.", "SR", "SR."]:
            base_name = ' '.join(name_parts[:-1])
            for player_name, data in all_players.items():
                player_lower = player_name.lower()
                if base_name in player_lower:
                    print(f"Found {name} as {player_name} (matched without suffix)")
                    return data['id']
    
    # Try partial matches as last resort
    for player_name, data in all_players.items():
        # Check if all parts of search name (except team/suffix) are in player name
        search_parts = [part for part in name_parts if part.upper() not in ["II", "III", "JR", "JR.", "SR", "SR."]]
        if all(part in player_name.lower() for part in search_parts):
            print(f"Found {name} as {player_name}")
            return data['id']
    
    return None

# Calculate total fantasy points for a player
def calculate_total_points(weeks):
    total = 0
    for week_num in range(1, 7):
        week = weeks.get(f'week {week_num}', {})
        if week and 'FPTS' in week:
            total += float(week['FPTS'])
    return total

def get_all_players():
    """Get all players from player_stats and submitTeam.html."""
    try:
        # First load the positions from submitTeam.html
        position_map = {}
        submit_team_players = set()
        with open('submitTeam.html', 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract the players object
            players_match = re.search(r'const players = \{(.*?)\};', content, re.DOTALL)
            if players_match:
                # Process each position section manually
                players_str = players_match.group(1)
                # Extract each position section
                for pos_match in re.finditer(r'"(\w+)": \[(.*?)\]', players_str, re.DOTALL):
                    pos, players_list = pos_match.groups()
                    # Extract each player from the list
                    for player_match in re.finditer(r'\{\s*"name":\s*"([^"]+)",\s*"team":\s*"[^"]+"\s*\}', players_list):
                        player_name = player_match.group(1)
                        position_map[player_name] = pos.upper()
                        submit_team_players.add(player_name)

        # Now load player stats
        with open('playerData.js', 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'const player_stats =({.*?});', content, re.DOTALL)
            if not match:
                print("Could not find player_stats in playerData.js")
                return []
                
            stats = eval(match.group(1))
            print(f"\nFound {len(stats)} total players in player_stats")
            
            all_players = []
            for name, weeks in stats.items():
                # Calculate total fantasy points
                total_points = calculate_total_points(weeks)
                
                # Skip players with less than 20 total fantasy points,
                # unless they're in submitTeam.html
                if total_points < 20 and name not in submit_team_players:
                    continue
                
                week1 = weeks.get('week 1', {})
                if not week1 or not week1.get('Player'):
                    continue
                
                # Get team from Player field
                player_info = week1['Player']
                team_match = re.search(r'\((\w+)\)', player_info)
                if not team_match:
                    continue
                    
                team = team_match.group(1)
                # Get position from our position map, default to the one from player_info if not found
                position = position_map.get(name)
                if not position:
                    # Extract position from player_info, ignoring suffixes
                    info_parts = player_info.split('(')[0].strip().split()
                    # Skip suffixes like "II", "III", "Jr.", "Sr."
                    while info_parts and info_parts[-1].upper() in ["II", "III", "JR", "JR.", "SR", "SR."]:
                        info_parts.pop()
                    position = info_parts[-1] if info_parts else None
                    # Validate position is a real position
                    if not position or position not in ["QB", "RB", "WR", "TE", "K", "DST"]:
                        continue
                
                # Skip defenses
                if position == 'DST':
                    continue
                
                # Convert roster percentage
                roster_str = week1.get('ROST', '0%').strip('%')
                try:
                    roster_pct = float(roster_str)
                except ValueError:
                    roster_pct = 0.0
                
                all_players.append({
                    'name': name,
                    'position': position,
                    'team': team,
                    'roster_pct': roster_pct,
                    'total_points': total_points
                })
                print(f"Found player: {name} ({position} - {team})")
            
            print(f"\nFound {len(all_players)} total players")
            return all_players
            
    except Exception as e:
        print(f"Error processing files: {e}")
        print(f"Error details: {str(e)}")
        return []

def main():
    # Load our NFL players database
    all_players = load_nfl_players()
    if not all_players:
        return

    # Get all players from stats
    fantasy_players = get_all_players()
    
    results = {}
    not_found = []
    
    # Process each player
    print("\nMatching ESPN IDs...")
    for player in fantasy_players:
        name = player['name']
        player_id = find_player_id(name, all_players)
        if player_id:
            results[name] = {
                'id': player_id,
                'photo': f"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/{player_id}.png",
                'position': player['position'],  # Use the position from player_stats
                'team': player['team'],
                'roster_pct': player['roster_pct']
            }
            print(f"✓ Found {name} ({player['position']} - {player['team']})")
        else:
            not_found.append(name)
            print(f"✗ Could not find {name}")
    
    # Save results
    with open('espn_player_ids.json', 'w') as f:
        json.dump({
            'players': results,
            'not_found': not_found
        }, f, indent=4)
    
    print(f"\nSaved {len(results)} player IDs to espn_player_ids.json")
    print(f"Players not found: {len(not_found)}")
    
    if not_found:
        print("\nPlayers without IDs:")
        for name in not_found:
            print(f"- {name}")

if __name__ == "__main__":
    main()