// Cache DOM elements
const playerGrid = document.getElementById('playerGrid');
const playerSearch = document.getElementById('playerSearch');
const positionFilter = document.getElementById('positionFilter');
const sortBy = document.getElementById('sortBy');
const template = document.getElementById('playerCardTemplate');

// Store player data globally
const players = {
    "qb": [
        { "name": "Aaron Rodgers", "team": "PIT" },
        { "name": "Bo Nix", "team": "DEN" },
        { "name": "Brock Purdy", "team": "SF" },
        { "name": "Bryce Young", "team": "CAR" },
        { "name": "C.J. Stroud", "team": "HOU" },
        { "name": "Caleb Williams", "team": "CHI" },
        { "name": "Drake Maye", "team": "NE" },
        { "name": "Jalen Hurts", "team": "PHI" },
        { "name": "Jordan Love", "team": "GB" },
        { "name": "Josh Allen", "team": "BUF" },
        { "name": "Justin Herbert", "team": "LAC" },
        { "name": "Malik Willis", "team": "GB" },
        { "name": "Matthew Stafford", "team": "LAR" },
        { "name": "Sam Darnold", "team": "SEA" },
        { "name": "Trevor Lawrence", "team": "JAC" },
    ],
    "rb": [
        { "name": "Bhayshul Tuten", "team": "JAC" },
        { "name": "Blake Corum", "team": "LAR" },
        { "name": "Brian Robinson Jr.", "team": "SF" },
        { "name": "Christian McCaffrey", "team": "SF" },
        { "name": "Chuba Hubbard", "team": "CAR" },
        { "name": "D'Andre Swift", "team": "CHI" },
        { "name": "Emanuel Wilson", "team": "GB" },
        { "name": "J.K. Dobbins", "team": "DEN" },
        { "name": "James Cook III", "team": "BUF" },
        { "name": "Jawhar Jordan", "team": "HOU" },
        { "name": "Jaylen Warren", "team": "PIT" },
        { "name": "Joe Mixon", "team": "HOU" },
        { "name": "Josh Jacobs", "team": "GB" },
        { "name": "Kenneth Gainwell", "team": "PIT" },
        { "name": "Kenneth Walker III", "team": "SEA" },
        { "name": "Kimani Vidal", "team": "LAC" },
        { "name": "Kyle Juszczyk", "team": "SF" },
        { "name": "Kyle Monangai", "team": "CHI" },
        { "name": "Kyren Williams", "team": "LAR" },
        { "name": "Nick Chubb", "team": "HOU" },
        { "name": "Omarion Hampton", "team": "LAC" },
        { "name": "RJ Harvey", "team": "DEN" },
        { "name": "Rhamondre Stevenson", "team": "NE" },
        { "name": "Rico Dowdle", "team": "CAR" },
        { "name": "Saquon Barkley", "team": "PHI" },
        { "name": "Tank Bigsby", "team": "PHI" },
        { "name": "Travis Etienne Jr.", "team": "JAC" },
        { "name": "TreVeyon Henderson", "team": "NE" },
        { "name": "Ty Johnson", "team": "BUF" },
        { "name": "Woody Marks", "team": "HOU" },
        { "name": "Zach Charbonnet", "team": "SEA" },
    ],
    "wr": [
        { "name": "A.J. Brown", "team": "PHI" },
        { "name": "Brandin Cooks", "team": "BUF" },
        { "name": "Brandon Aiyuk", "team": "SF" },
        { "name": "Brian Thomas Jr.", "team": "JAC" },
        { "name": "Christian Watson", "team": "GB" },
        { "name": "Cooper Kupp", "team": "SEA" },
        { "name": "Courtland Sutton", "team": "DEN" },
        { "name": "DJ Moore", "team": "CHI" },
        { "name": "DK Metcalf", "team": "PIT" },
        { "name": "Davante Adams", "team": "LAR" },
        { "name": "DeVonta Smith", "team": "PHI" },
        { "name": "Demarcus Robinson", "team": "SF" },
        { "name": "Efton Chism III", "team": "NE" },
        { "name": "Jahdae Walker", "team": "CHI" },
        { "name": "Jakobi Meyers", "team": "JAC" },
        { "name": "Jalen Coker", "team": "CAR" },
        { "name": "Jauan Jennings", "team": "SF" },
        { "name": "Jaxon Smith-Njigba", "team": "SEA" },
        { "name": "Jayden Higgins", "team": "HOU" },
        { "name": "Jayden Reed", "team": "GB" },
        { "name": "Jaylin Noel", "team": "HOU" },
        { "name": "KeAndre Lambert-Smith", "team": "LAC" },
        { "name": "Keenan Allen", "team": "LAC" },
        { "name": "Keon Coleman", "team": "BUF" },
        { "name": "Khalil Shakir", "team": "BUF" },
        { "name": "Kyle Williams", "team": "NE" },
        { "name": "Ladd McConkey", "team": "LAC" },
        { "name": "Lil'Jordan Humphrey", "team": "DEN" },
        { "name": "Luther Burden III", "team": "CHI" },
        { "name": "Mack Hollins", "team": "NE" },
        { "name": "Marquez Valdes-Scantling", "team": "PIT" },
        { "name": "Marvin Mims Jr.", "team": "DEN" },
        { "name": "Matthew Golden", "team": "GB" },
        { "name": "Michael Bandy", "team": "DEN" },
        { "name": "Nico Collins", "team": "HOU" },
        { "name": "Parker Washington", "team": "JAC" },
        { "name": "Puka Nacua", "team": "LAR" },
        { "name": "Quentin Johnston", "team": "LAC" },
        { "name": "Rashid Shaheed", "team": "SEA" },
        { "name": "Ricky Pearsall", "team": "SF" },
        { "name": "Rome Odunze", "team": "CHI" },
        { "name": "Romeo Doubs", "team": "GB" },
        { "name": "Stefon Diggs", "team": "NE" },
        { "name": "Tetairoa McMillan", "team": "CAR" },
        { "name": "Travis Hunter", "team": "JAC" },
        { "name": "Tre Harris", "team": "LAC" },
        { "name": "Troy Franklin", "team": "DEN" },
        { "name": "Xavier Smith", "team": "LAR" },
    ],
    "k": [
        { "name": "Andy Borregales", "team": "NE" },
        { "name": "Brandon McManus", "team": "GB" },
        { "name": "Cairo Santos", "team": "CHI" },
        { "name": "Cam Little", "team": "JAC" },
        { "name": "Cameron Dicker", "team": "LAC" },
        { "name": "Chris Boswell", "team": "PIT" },
        { "name": "Eddy Pineiro", "team": "SF" },
        { "name": "Harrison Mevis", "team": "LAR" },
        { "name": "Jake Elliott", "team": "PHI" },
        { "name": "Jason Myers", "team": "SEA" },
        { "name": "Ka'imi Fairbairn", "team": "HOU" },
        { "name": "Matt Prater", "team": "BUF" },
        { "name": "Ryan Fitzgerald", "team": "CAR" },
        { "name": "Wil Lutz", "team": "DEN" },
    ],
    "dst": [
        { "name": "Buffalo Bills", "team": "BUF" },
        { "name": "Carolina Panthers", "team": "CAR" },
        { "name": "Chicago Bears", "team": "CHI" },
        { "name": "Denver Broncos", "team": "DEN" },
        { "name": "Green Bay Packers", "team": "GB" },
        { "name": "Houston Texans", "team": "HOU" },
        { "name": "Jacksonville Jaguars", "team": "JAC" },
        { "name": "Los Angeles Chargers", "team": "LAC" },
        { "name": "Los Angeles Rams", "team": "LAR" },
        { "name": "New England Patriots", "team": "NE" },
        { "name": "Philadelphia Eagles", "team": "PHI" },
        { "name": "Pittsburgh Steelers", "team": "PIT" },
        { "name": "San Francisco 49ers", "team": "SF" },
        { "name": "Seattle Seahawks", "team": "SEA" },
    ],
};

const position_map = {
    "qb": "QB",
    "rb": "RB",
    "wr": "WR",
    "te": "TE",
    "k": "K",
    "dst": "DEF"
}

// Convert to flat array format (JS version)
let all_players = [];
for (const pos_key in position_map) {
    const pos_code = position_map[pos_key];
    if (players[pos_key]) {
        // Optionally, add comment line for clarity (JS can't append comments inside array)
        // all_players.push(`// ${pos_code}`); 
        for (const player of players[pos_key]) {
            all_players.push({ 
                "name": player.name, 
                "team": player.team, 
                "position": pos_code 
            });
        }
    }
}

// Add the team logos data
const teamLogos = {
    "Denver Broncos": "https://content.sportslogos.net/logos/7/161/full/denver_broncos_logo_primary_19973076.png",
    "New England Patriots": "https://content.sportslogos.net/logos/7/151/full/new_england_patriots_logo_primary_20005480.png",
    "Jacksonville Jaguars": "https://content.sportslogos.net/logos/7/159/full/jacksonville_jaguars_logo_primary_20132171.png",
    "Pittsburgh Steelers": "https://nfldesigns.com/wp-content/uploads/2023/09/pittsburgh-steelers-logo-emblem-png.png",
    "Houston Texans": "https://content.sportslogos.net/logos/7/157/full/houston_texans_logo_primary_2024_sportslogosnet-5890.png",
    "Buffalo Bills": "https://content.sportslogos.net/logos/7/149/full/buffalo_bills_logo_primary_19747050.png",
    "Los Angeles Chargers": "https://content.sportslogos.net/logos/7/6446/full/los_angeles_chargers_logo_primary_20203514.png",
    "Seattle Seahawks": "https://content.sportslogos.net/logos/7/180/full/seattle_seahawks_logo_primary_20121228.png",
    "Chicago Bears": "https://content.sportslogos.net/logos/7/169/full/chicago_bears_logo_primary_2023_sportslogosnet-7594.png",
    "Philadelphia Eagles": "https://content.sportslogos.net/logos/7/167/full/philadelphia_eagles_logo_primary_19964867.png",
    "Carolina Panthers": "https://content.sportslogos.net/logos/7/174/full/carolina_panthers_logo_primary_20125906.png",
    "Los Angeles Rams": "https://nfldesigns.com/wp-content/uploads/2023/09/los-angeles-rams-football-logo-png.png",
    "San Francisco 49ers": "https://content.sportslogos.net/logos/7/179/full/9455_san_francisco_49ers-primary-2009.png",
    "Green Bay Packers": "https://nfldesigns.com/wp-content/uploads/2023/09/green-bay-packers-symbol-logo-png.png"
};

// Load ESPN IDs from espn_player_ids.json
fetch('espn_player_ids.json')
    .then(response => response.json())
    .then(data => {
        espnPlayerIds = data;
        // Initialize after loading IDs
        initialize();
    })
    .catch(error => {
        console.error('Error loading player IDs:', error);
        initialize(); // Still initialize even if ID loading fails
    });

// Calculate fantasy points for a player based on our scoring system
function calculateFantasyPoints(stats, week) {
    if (!stats || !stats[`week ${week}`]) return 0;
    return stats[`week ${week}`].FPTS || 0;
}

// Calculate average of last 4 weeks
function calculateLast4WeeksAvg(stats) {
    let total = 0;
    let weeks = 0;
    // Start from most recent week (17) and go back 4 weeks
    for (let i = 4; i > 0; i--) {
        const points = calculateFantasyPoints(stats, i);
        if (points > 0) {
            total += points;
            weeks++;
        }
    }
    return weeks > 0 ? (total / weeks).toFixed(1) : "0.0";
}

// Calculate season average
function calculateSeasonAvg(stats) {
    let total = 0;
    let weeks = 0;
    for (let i = 1; i <= 4; i++) {
        const points = calculateFantasyPoints(stats, i);
        if (points > 0) {
            total += points;
            weeks++;
        }
    }
    return weeks > 0 ? (total / weeks).toFixed(1) : "0.0";
}

// Calculate total season points
function calculateTotalPoints(stats) {
    let total = 0;
    for (let i = 1; i <= 4; i++) {
        total += calculateFantasyPoints(stats, i);
    }
    return total.toFixed(1);
}

// Get key stats for a player
// Get key stats for a player
// Get key stats for a player
function getPlayerStats(stats) {
    if (!stats) return null;
    
    // Initialize cumulative stats
    let cumulativeStats = {
        // QB Stats
        completions: 0,
        attempts: 0,
        passYards: 0,
        passTD: 0,
        interceptions: 0,
        
        // RB/WR Stats
        rushYards: 0,
        rushTD: 0,
        receptions: 0,
        recYards: 0,
        recTD: 0,
        
        // Defense Stats
        sacks: 0,
        defInt: 0,
        fumbles: 0,
        safeties: 0,
        touchdowns: 0,
        pointsAllowed: 0,
        
        // Fantasy Points
        fantasyPoints: 0,
        
        // Position from week 1
        position: stats["week 1"]?.POS || 'unknown'
    };
    
    // Sum up stats from all available weeks
    Object.keys(stats).forEach(week => {
        if (week.startsWith('week')) {
            const weekStats = stats[week];
            
            // Check if it's a defense
            if (weekStats.hasOwnProperty('SACKS')) {
                cumulativeStats.sacks += weekStats.SACKS || 0;
                cumulativeStats.defInt += weekStats["INT.1"] || 0;
                cumulativeStats.fumbles += weekStats.FR || 0;
                cumulativeStats.safeties += weekStats.SAFE || 0;
                cumulativeStats.touchdowns += weekStats["TD.3"] || 0;
                cumulativeStats.pointsAllowed += weekStats.PA || 0;
                cumulativeStats.fantasyPoints += weekStats.FPTS || 0;
                cumulativeStats.position = 'def';
            } else {
                // Regular player stats
                cumulativeStats.completions += weekStats.CMP || 0;
                cumulativeStats.attempts += weekStats.ATT || 0;
                cumulativeStats.passYards += weekStats.YDS || 0;
                cumulativeStats.passTD += weekStats.TD || 0;
                cumulativeStats.interceptions += weekStats.INT || 0;
                
                cumulativeStats.rushYards += weekStats["YDS.1"] || 0;
                cumulativeStats.rushTD += weekStats["TD.1"] || 0;
                cumulativeStats.receptions += weekStats.REC || 0;
                cumulativeStats.recYards += weekStats["YDS.2"] || 0;
                cumulativeStats.recTD += weekStats["TD.2"] || 0;
                
                cumulativeStats.fantasyPoints += weekStats.FPTS || 0;
            }
        }
    });
    
    return cumulativeStats;
}

// Get player image URL using ESPN data
function getPlayerImageUrl(playerName, position) {
    // If it's a defense, return the team logo
    if (position?.toLowerCase() === 'def') {
        // Remove 'Defense' or 'DST' from the name to match our teamLogos object
        const teamName = playerName
            .replace(' Defense', '')
            .replace(' DST', '');
            
        console.log('Looking for team logo:', teamName); // Debug log
        const logoUrl = teamLogos[teamName];
        console.log('Found logo URL:', logoUrl); // Debug log
        
        return logoUrl || 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/q7dpdlxyu5rs05rgh1le';
    }
    
    // For other players, use ESPN data
    const playerData = espnPlayerIds.players[playerName];
    if (playerData?.photo) {
        return playerData.photo;
    }
    console.log(`No photo URL found for ${playerName}`);
    return 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/q7dpdlxyu5rs05rgh1le';
}

// Create a player card
async function createPlayerCard(player) {
    const clone = template.content.cloneNode(true);
    const stats = getPlayerStats(player.stats);
    
    // Set player info
    clone.querySelector('.player-name').textContent = player.name;
    clone.querySelector('.player-position').textContent = player.position;
    
    // Set player image using ESPN data
    const playerImage = clone.querySelector('.player-image');
    playerImage.src = getPlayerImageUrl(player.name, player.position);
    if (player.position?.toLowerCase() === 'def') {
        playerImage.classList.add('defense-logo');
    }
    playerImage.alt = player.name;
    
    // Update stats display based on position
    const statsContainer = clone.querySelector('.position-stats');
    statsContainer.innerHTML = ''; // Clear existing stats

    if (stats) {
        switch (player.position.toLowerCase()) {
            case 'qb':
                statsContainer.innerHTML = `
                    <div class="stat-item">
                        <span class="stat-label">Pass: ${stats.completions}/${stats.attempts}</span>
                        <span class="stat-value">${stats.passYards} YDS</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">TD/INT</span>
                        <span class="stat-value">${stats.passTD}/${stats.interceptions}</span>
                    </div>`;
                break;
            
            case 'rb':
                statsContainer.innerHTML = `
                    <div class="stat-item">
                        <span class="stat-label">Rush</span>
                        <span class="stat-value">${stats.rushYards} YDS, ${stats.rushTD} TD</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Rec</span>
                        <span class="stat-value">${stats.receptions} REC, ${stats.recYards} YDS, ${stats.recTD} TD</span>
                    </div>`;
                break;
            
            case 'wr':
            case 'te':
                statsContainer.innerHTML = `
                    <div class="stat-item">
                        <span class="stat-label">Receiving</span>
                        <span class="stat-value">${stats.receptions} REC, ${stats.recYards} YDS</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">TD</span>
                        <span class="stat-value">${stats.recTD}</span>
                    </div>`;
                break;
            
            case 'def':
                statsContainer.innerHTML = `
                    <div class="stat-item">
                        <span class="stat-label">Points Allowed</span>
                        <span class="stat-value">${stats.pointsAllowed}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Defense</span>
                        <span class="stat-value">${stats.sacks} SACKS, ${stats.defInt} INT</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Misc</span>
                        <span class="stat-value">FR: ${stats.fumbles}, TD: ${stats.touchdowns}</span>
                    </div>`;
                break;
        }
    }

    // Add fantasy points
    clone.querySelector('.fantasy-points').textContent = 
        stats ? stats.fantasyPoints.toFixed(1) : "0.0";
    
    return clone;
}

// Filter and sort players
function filterAndSortPlayers() {
    const searchTerm = playerSearch.value.toLowerCase();
    const position = positionFilter.value.toLowerCase();
    const sortingMethod = sortBy.value;
    
    let filtered = allPlayers.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm);
        const matchesPosition = position === 'all' || player.position.toLowerCase() === position;
        return matchesSearch && matchesPosition;
    });
    
    filtered.sort((a, b) => {
        switch(sortingMethod) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'avgPoints':
            case 'totalPoints':
                const aStats = getPlayerStats(a.stats);
                const bStats = getPlayerStats(b.stats);
                return (bStats?.fantasyPoints || 0) - (aStats?.fantasyPoints || 0);
            default:
                return 0;
        }
    });
    
    renderPlayers(filtered);
}

// Render players to grid
async function renderPlayers(players) {
    playerGrid.innerHTML = '';
    for (const player of players) {
        const card = await createPlayerCard(player);
        playerGrid.appendChild(card);
    }
}

// Add this helper function to check recent activity
function hasRecentActivity(stats) {
    if (!stats) return false;
    
    // Check if player has any stats in week 1
    return stats["week 1"] && stats["week 1"].FPTS > 0;
}

// Initialize the page
function initialize() {
    // Merge stats with player data
    allPlayers = allPlayers.map(player => ({
        ...player,
        stats: player_stats[player.name] || null
    }));

    console.log('Initialized players with stats:', allPlayers.length);
    
    // Debug log to check stats matching
    allPlayers.forEach(player => {
        if (!player.stats) {
            console.log(`No stats found for: ${player.name}`);
        }
    });

    // Set up event listeners
    playerSearch.addEventListener('input', filterAndSortPlayers);
    positionFilter.addEventListener('change', filterAndSortPlayers);
    sortBy.addEventListener('change', filterAndSortPlayers);
    
    // Initial render
    filterAndSortPlayers();
}

// Add helper function to determine player position
function getPlayerPosition(playerName) {
    const player = espnPlayerIds.players[playerName];
    if (!player) {
        // Fallback logic for defense
        if (playerName.includes('Defense') || playerName.endsWith('DST')) {
            return 'DST';
        }
        console.warn(`No position data found for ${playerName}`);
        return '';
    }
    return player.position;
}

// Add console logging to help debug
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    console.log('allPlayers from scoring.js:', window.allPlayers?.length || 'Not loaded');
    console.log('espnPlayerIds:', espnPlayerIds);
    console.log('player_stats:', player_stats);
    initialize();
});

// Start the app
document.addEventListener('DOMContentLoaded', initialize);