import json
import requests
import time

def espn_api_player_id_reverse_lookup(player_name):
    TEAM_API = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams"
    response = requests.get(TEAM_API)

    if response.status_code == 200:
        teams_data = response.json()
        teams = teams_data["sports"][0]["leagues"][0]["teams"]

        roster = []

        # Iterate over each team
        for team in teams:
            team_id = team["team"]["id"]
            team_name = team["team"]["abbreviation"]

            # Fetch roster data for the team
            roster_url = f"{TEAM_API}/{team_id}?enable=roster"
            roster_response = requests.get(roster_url)

            if roster_response.status_code == 200:
                roster_data = roster_response.json()

                # Extract athlete information
                athletes = [
                    {
                        "id": athlete["id"],
                        "team": team_name,
                        "fullName": athlete["fullName"],
                    }
                    for athlete in roster_data["team"]["athletes"]
                ]

                # Add athlete information to the roster list
                roster.extend(athletes)

        # Search for player in the roster
        found_players = [
            {"id": player["id"], "team": player["team"]}
            for player in roster
            if player["fullName"].lower() == player_name.lower()
        ]

        if found_players:
            # Return the player ID instead of printing it
            return str(found_players[0]['id'])  # Assuming only one player is found
        else:
            return None
    else:
        print("Failed to fetch NFL teams data.")
        return None


if __name__ == "__main__":
    # Load player names from all_nfl_players.json
    try:
        with open('all_nfl_players.json', 'r') as f:
            player_names = json.load(f)
    except FileNotFoundError:
        print("Error: all_nfl_players.json not found")
        exit(1)
    
    # Load existing IDs to avoid re-fetching
    existing_ids = {}
    try:
        with open('espn_player_ids.json', 'r') as f:
            data = json.load(f)
            if 'players' in data:
                existing_ids = {name: data['players'][name]['id'] for name in data['players'] if 'id' in data['players'][name]}
    except FileNotFoundError:
        pass
    
    print(f"Loaded {len(existing_ids)} existing player IDs")
    print(f"Processing {len(player_names)} players...\n")
    
    results = {}
    not_found = []
    
    # Team names to skip
    team_names = ['Bills', 'Panthers', 'Bears', 'Broncos', 'Packers', 'Texans', 
                  'Jaguars', 'Chargers', 'Rams', 'Patriots', 'Eagles', 'Steelers', 
                  '49ers', 'Seahawks']
    
    for i, name in enumerate(player_names, 1):
        # Skip team names
        if any(team in name for team in team_names):
            print(f"[{i}/{len(player_names)}] Skipping team: {name}")
            continue
        
        # Check if we already have this player
        if name in existing_ids:
            results[name] = existing_ids[name]
            print(f"[{i}/{len(player_names)}] ✓ {name} (cached: {existing_ids[name]})")
            continue
        
        print(f"[{i}/{len(player_names)}] Searching for {name}...", end=' ')
        player_id = espn_api_player_id_reverse_lookup(name)
        
        if player_id:
            results[name] = player_id
            print(f"✓ Found ID: {player_id}")
        else:
            not_found.append(name)
            print("✗ Not found")
        
        # Be nice to ESPN's servers - add a small delay
        time.sleep(0.2)
    
    # Save results in the format expected by other scripts
    output = {
        'players': {},
        'not_found': not_found
    }
    
    # Convert to the format expected by the other script
    for name, player_id in results.items():
        output['players'][name] = {
            'id': str(player_id),
            'photo': f"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/{player_id}.png"
        }
    
    with open('espn_player_ids.json', 'w') as f:
        json.dump(output, f, indent=4)
    
    print(f"\n✓ Saved {len(results)} player IDs to espn_player_ids.json")
    print(f"✗ Players not found: {len(not_found)}")
    
    if not_found:
        print("\nPlayers without IDs:")
        for name in not_found:
            print(f"  - {name}")









