// Cache DOM elements
const playerGrid = document.getElementById('playerGrid');
const playerSearch = document.getElementById('playerSearch');
const positionFilter = document.getElementById('positionFilter');
const sortBy = document.getElementById('sortBy');
const template = document.getElementById('playerCardTemplate');

// Store player data globally
let allPlayers = [];
let espnPlayerIds = {};

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
function getPlayerStats(stats) {
    if (!stats || !stats["week 1"]) return null;
    const latestWeek = stats["week 1"];
    return {
        completions: latestWeek.CMP || 0,
        attempts: latestWeek.ATT || 0,
        yards: latestWeek.YDS || 0,
        touchdowns: latestWeek.TD || 0,
        interceptions: latestWeek.INT || 0,
        rushYards: latestWeek["YDS.1"] || 0,
        rushTD: latestWeek["TD.1"] || 0
    };
}

// Get player image URL using ESPN data
function getPlayerImageUrl(playerName) {
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
    const espnData = espnPlayerIds.players[player.name];
    
    // Set player image
    const playerImage = clone.querySelector('.player-image');
    const imageUrl = getPlayerImageUrl(player.name);
    console.log(`Loading image for ${player.name} from ${imageUrl}`);
    playerImage.src = imageUrl;
    playerImage.alt = player.name;
    
    playerImage.onerror = () => {
        console.log(`Failed to load image for ${player.name} from ${imageUrl}`);
        playerImage.src = 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/q7dpdlxyu5rs05rgh1le';
    };
    
    // Add a load event handler to verify successful loads
    playerImage.onload = () => {
        console.log(`Successfully loaded image for ${player.name}`);
    };
    
    // Set player info
    clone.querySelector('.player-name').textContent = player.name;
    clone.querySelector('.player-position').textContent = `${espnData?.position || player.position} - ${espnData?.team || player.team}`;
    
    // Calculate and set stats
    const seasonAvg = calculateSeasonAvg(player_stats[player.name]);
    const last4Avg = calculateLast4WeeksAvg(player_stats[player.name]);
    const totalPoints = calculateTotalPoints(player_stats[player.name]);
    const rosterPercent = espnData?.roster_pct ? `${espnData.roster_pct}%` : "0%";
    
    clone.querySelector('.avg-points').textContent = seasonAvg;
    clone.querySelector('.last-4-avg').textContent = last4Avg;
    clone.querySelector('.total-points').textContent = totalPoints;
    clone.querySelector('.roster-percent').textContent = rosterPercent;
    
    return clone;
}

// Filter and sort players
function filterAndSortPlayers() {
    const searchTerm = playerSearch.value.toLowerCase();
    const position = positionFilter.value;
    const sortingMethod = sortBy.value;
    
    let filtered = allPlayers.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm);
        const matchesPosition = position === 'all' || player.position === position;
        return matchesSearch && matchesPosition;
    });
    
    filtered.sort((a, b) => {
        switch(sortingMethod) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'avgPoints':
                return calculateSeasonAvg(player_stats[b.name]) - calculateSeasonAvg(player_stats[a.name]);
            case 'last4':
                return calculateLast4WeeksAvg(player_stats[b.name]) - calculateLast4WeeksAvg(player_stats[a.name]);
            case 'totalPoints':
                return calculateTotalPoints(player_stats[b.name]) - calculateTotalPoints(player_stats[a.name]);
            case 'team':
                return a.team.localeCompare(b.team);
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
    
    // Check the last 3 weeks of the regular season (weeks 15-17)
    let inactiveWeeks = 0;
    for (let week = 1; week <= 4; week++) {
        const points = calculateFantasyPoints(stats, week);
        if (points === 0) {
            inactiveWeeks++;
        }
    }
    
    // Return false if player has been inactive for all 3 recent weeks
    return inactiveWeeks < 3;
}

// Initialize the page
function initialize() {
    const playoffTeams = ["TB", "DEN", "HOU", "PHI", "DET", "WAS", "GB", "BUF", "PIT", "LAC", "BAL", "LAR", "KC", "MIN"];
    
    // Convert player_stats into our player array format
    allPlayers = Object.keys(espnPlayerIds.players)
        .filter(name => {
            const playerData = espnPlayerIds.players[name];
            const totalPoints = calculateTotalPoints(player_stats[name]);
            return playoffTeams.includes(playerData.team) && 
                   parseFloat(totalPoints) >= 40 && 
                   hasRecentActivity(player_stats[name]);
        })
        .map(name => {
            const playerData = espnPlayerIds.players[name];
            return {
                name: name,
                position: playerData.position,
                team: playerData.team,
                photo: playerData.photo,
                roster_pct: playerData.roster_pct
            };
        });

    // Set default sort to totalPoints
    document.getElementById('sortBy').value = 'totalPoints';

    // Set up event listeners
    playerSearch.addEventListener('input', filterAndSortPlayers);
    positionFilter.addEventListener('change', filterAndSortPlayers);
    sortBy.addEventListener('change', filterAndSortPlayers);
    
    // Initial render
    filterAndSortPlayers();
}

// Start the app
document.addEventListener('DOMContentLoaded', initialize);