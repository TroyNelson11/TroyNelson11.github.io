// Cache DOM elements
const playerGrid = document.getElementById('playerGrid');
const playerSearch = document.getElementById('playerSearch');
const positionFilter = document.getElementById('positionFilter');
const sortBy = document.getElementById('sortBy');
const template = document.getElementById('playerCardTemplate');

// Store player data globally
let allPlayers = [
    // QBs
    { "name": "Baker Mayfield", "team": "TB", "position": "QB" }, 
    { "name": "Bo Nix", "team": "DEN", "position": "QB" },        
    { "name": "C.J. Stroud", "team": "HOU", "position": "QB" },   
    { "name": "Jalen Hurts", "team": "PHI", "position": "QB" },   
    { "name": "Jared Goff", "team": "DET", "position": "QB" },    
    { "name": "Jayden Daniels", "team": "WAS", "position": "QB" },
    { "name": "Jordan Love", "team": "GB", "position": "QB" },    
    { "name": "Josh Allen", "team": "BUF", "position": "QB" },    
    { "name": "Justin Fields", "team": "PIT", "position": "QB" }, 
    { "name": "Justin Herbert", "team": "LAC", "position": "QB" },
    { "name": "Lamar Jackson", "team": "BAL", "position": "QB" }, 
    { "name": "Matthew Stafford", "team": "LAR", "position": "QB" },
    { "name": "Patrick Mahomes II", "team": "KC", "position": "QB" },
    { "name": "Russell Wilson", "team": "PIT", "position": "QB" },
    { "name": "Sam Darnold", "team": "MIN", "position": "QB" },
    // RBs
    { "name": "Aaron Jones Sr.", "team": "MIN", "position": "RB" },
    { "name": "Austin Ekeler", "team": "WAS", "position": "RB" },
    { "name": "Brian Robinson Jr.", "team": "WAS", "position": "RB" },
    { "name": "Bucky Irving", "team": "TB", "position": "RB" },
    { "name": "David Montgomery", "team": "DET", "position": "RB" },
    { "name": "Derrick Henry", "team": "BAL", "position": "RB" },
    { "name": "Gus Edwards", "team": "LAC", "position": "RB" },
    { "name": "Isiah Pacheco", "team": "KC", "position": "RB" },
    { "name": "J.K. Dobbins", "team": "LAC", "position": "RB" },
    { "name": "Jahmyr Gibbs", "team": "DET", "position": "RB" },
    { "name": "James Cook", "team": "BUF", "position": "RB" },
    { "name": "Javonte Williams", "team": "DEN", "position": "RB" },
    { "name": "Jaylen Warren", "team": "PIT", "position": "RB" },
    { "name": "Joe Mixon", "team": "HOU", "position": "RB" },
    { "name": "Josh Jacobs", "team": "GB", "position": "RB" },
    { "name": "Kareem Hunt", "team": "KC", "position": "RB" },
    { "name": "Kyren Williams", "team": "LAR", "position": "RB" },
    { "name": "Najee Harris", "team": "PIT", "position": "RB" },
    { "name": "Rachaad White", "team": "TB", "position": "RB" },
    { "name": "Saquon Barkley", "team": "PHI", "position": "RB" },
    { "name": "Ty Chandler", "team": "MIN", "position": "RB" },
    // WRs and TEs
    { "name": "A.J. Brown", "team": "PHI", "position": "WR" },
    { "name": "Amari Cooper", "team": "BUF", "position": "WR" },
    { "name": "Amon-Ra St. Brown", "team": "DET", "position": "WR" },
    { "name": "Cooper Kupp", "team": "LAR", "position": "WR" },
    { "name": "Courtland Sutton", "team": "DEN", "position": "WR" },
    { "name": "DeAndre Hopkins", "team": "KC", "position": "WR" },
    { "name": "DeVonta Smith", "team": "PHI", "position": "WR" },
    { "name": "George Pickens", "team": "PIT", "position": "WR" },
    { "name": "Jalen McMillan", "team": "TB", "position": "WR" },
    { "name": "Jameson Williams", "team": "DET", "position": "WR" },
    { "name": "Jayden Reed", "team": "GB", "position": "WR" },
    { "name": "Jordan Addison", "team": "MIN", "position": "WR" },
    { "name": "JuJu Smith-Schuster", "team": "KC", "position": "WR" },
    { "name": "Justin Jefferson", "team": "MIN", "position": "WR" },
    { "name": "Keon Coleman", "team": "BUF", "position": "WR" },
    { "name": "Khalil Shakir", "team": "BUF", "position": "WR" },
    { "name": "Ladd McConkey", "team": "LAC", "position": "WR" },
    { "name": "Marquise Brown", "team": "KC", "position": "WR" },
    { "name": "Mike Evans", "team": "TB", "position": "WR" },
    { "name": "Nico Collins", "team": "HOU", "position": "WR" },
    { "name": "Puka Nacua", "team": "LAR", "position": "WR" },
    { "name": "Quentin Johnston", "team": "LAC", "position": "WR" },
    { "name": "Rashee Rice", "team": "KC", "position": "WR" },
    { "name": "Rashod Bateman", "team": "BAL", "position": "WR" },
    { "name": "Romeo Doubs", "team": "GB", "position": "WR" },
    { "name": "Stefon Diggs", "team": "HOU", "position": "WR" },
    { "name": "Tank Dell", "team": "HOU", "position": "WR" },
    { "name": "Terry McLaurin", "team": "WAS", "position": "WR" },
    { "name": "Xavier Worthy", "team": "KC", "position": "WR" },
    { "name": "Zay Flowers", "team": "BAL", "position": "WR" },
    { "name": "Dallas Goedert", "team": "PHI", "position": "TE" },
    { "name": "Dalton Kincaid", "team": "BUF", "position": "TE" },
    { "name": "Cade Otton", "team": "TB", "position": "TE" },
    { "name": "Isaiah Likely", "team": "BAL", "position": "TE" },
    { "name": "TJ Hockenson", "team": "MIN", "position": "TE" },
    { "name": "Mark Andrews", "team": "BAL", "position": "TE" },
    { "name": "Pat Freiermuth", "team": "PIT", "position": "TE" },
    { "name": "Sam LaPorta", "team": "DET", "position": "TE" },
    { "name": "Travis Kelce", "team": "KC", "position": "TE" },
    { "name": "Tucker Kraft", "team": "GB", "position": "TE" },
    // Kickers
    { "name": "Zane Gonzalez", "team": "WAS", "position": "K" },
    { "name": "Cameron Dicker", "team": "LAC", "position": "K" },
    { "name": "Chase McLaughlin", "team": "TB", "position": "K" },
    { "name": "Chris Boswell", "team": "PIT", "position": "K" },
    { "name": "Harrison Butker", "team": "KC", "position": "K" },
    { "name": "Jake Bates", "team": "DET", "position": "K" },
    { "name": "Jake Elliott", "team": "PHI", "position": "K" },
    { "name": "Justin Tucker", "team": "BAL", "position": "K" },
    { "name": "Ka'imi Fairbairn", "team": "HOU", "position": "K" },
    { "name": "Tyler Bass", "team": "BUF", "position": "K" },
    { "name": "Joshua Karty", "team": "LAR", "position": "K" },
    { "name": "Wil Lutz", "team": "DEN", "position": "K" },
    { "name": "Brandon McManus", "team": "GB", "position": "K" },
    { "name": "Wil Reichard", "team": "MIN", "position": "K" },
    // Defense
    { "name": "Baltimore Ravens", "team": "BAL", "position": "DEF" },
    { "name": "Buffalo Bills", "team": "BUF", "position": "DEF" },
    { "name": "Denver Broncos", "team": "DEN", "position": "DEF" },
    { "name": "Detroit Lions", "team": "DET", "position": "DEF" },
    { "name": "Green Bay Packers", "team": "GB", "position": "DEF" },
    { "name": "Houston Texans", "team": "HOU", "position": "DEF" },
    { "name": "Kansas City Chiefs", "team": "KC", "position": "DEF" },
    { "name": "Los Angeles Chargers", "team": "LAC", "position": "DEF" },
    { "name": "Minnesota Vikings", "team": "MIN", "position": "DEF" },
    { "name": "Philadelphia Eagles", "team": "PHI", "position": "DEF" },
    { "name": "Pittsburgh Steelers", "team": "PIT", "position": "DEF" },
    { "name": "Tampa Bay Buccaneers", "team": "TB", "position": "DEF" },
    { "name": "Washington Commanders", "team": "WAS", "position": "DEF" },
    { "name": "Los Angeles Rams", "team": "LAR", "position": "DEF" }
];

// Add the team logos data
const teamLogos = {
    "Kansas City Chiefs": "https://nfldesigns.com/wp-content/uploads/2023/09/kansas-city-chiefs-logo-emblem-png.png",
    "Buffalo Bills": "https://content.sportslogos.net/logos/7/149/full/buffalo_bills_logo_primary_19747050.png",
    "Baltimore Ravens": "https://content.sportslogos.net/logos/7/153/full/baltimore_ravens_logo_primary_19996038.png",
    "Houston Texans": "https://content.sportslogos.net/logos/7/157/full/houston_texans_logo_primary_2024_sportslogosnet-5890.png",
    "Pittsburgh Steelers": "https://nfldesigns.com/wp-content/uploads/2023/09/pittsburgh-steelers-logo-emblem-png.png",
    "Denver Broncos": "https://content.sportslogos.net/logos/7/161/full/denver_broncos_logo_primary_19973076.png",
    "Los Angeles Chargers": "https://content.sportslogos.net/logos/7/6446/full/los_angeles_chargers_logo_primary_20203514.png",
    "Philadelphia Eagles": "https://content.sportslogos.net/logos/7/167/full/philadelphia_eagles_logo_primary_19964867.png",
    "Los Angeles Rams": "https://nfldesigns.com/wp-content/uploads/2023/09/los-angeles-rams-football-logo-png.png",
    "Detroit Lions": "https://content.sportslogos.net/logos/7/170/full/detroit_lions_logo_primary_20172565.png",
    "Minnesota Vikings": "https://nfldesigns.com/wp-content/uploads/2023/09/minnesota-vikings-logo-emblem-png.png",
    "Tampa Bay Buccaneers": "https://nfldesigns.com/wp-content/uploads/2023/09/tampa-bay-buccaneers-logo-emblem-png.png",
    "Washington Commanders": "https://content.sportslogos.net/logos/7/6832/full/washington_commanders_logo_primary_20228587.png",
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