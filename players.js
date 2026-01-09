// Cache DOM elements
const playerGrid = document.getElementById('playerGrid');
const playerSearch = document.getElementById('playerSearch');
const positionFilter = document.getElementById('positionFilter');
const sortBy = document.getElementById('sortBy');
const template = document.getElementById('playerCardTemplate');

// Store player data globally
const players = {
    "qb": [
        { "name": "Aaron Rodgers", "team": "PIT", "id": "8439", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png" },
        { "name": "Bo Nix", "team": "DEN", "id": "4426338", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426338.png" },
        { "name": "Brock Purdy", "team": "SF", "id": "4361741", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361741.png" },
        { "name": "Bryce Young", "team": "CAR", "id": "4685720", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685720.png" },
        { "name": "C.J. Stroud", "team": "HOU", "id": "4432577", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432577.png" },
        { "name": "Caleb Williams", "team": "CHI", "id": "4431611", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431611.png" },
        { "name": "Drake Maye", "team": "NE", "id": "4431452", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431452.png" },
        { "name": "Jalen Hurts", "team": "PHI", "id": "4040715", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040715.png" },
        { "name": "Jordan Love", "team": "GB", "id": "4036378", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png" },
        { "name": "Josh Allen", "team": "BUF", "id": "3918298", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png" },
        { "name": "Justin Herbert", "team": "LAC", "id": "4038941", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038941.png" },
        { "name": "Malik Willis", "team": "GB", "id": "4242512", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4242512.png" },
        { "name": "Matthew Stafford", "team": "LAR", "id": "12483", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png" },
        { "name": "Sam Darnold", "team": "SEA", "id": "3912547", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png" },
        { "name": "Trevor Lawrence", "team": "JAC", "id": "4360310", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360310.png" },
    ],
    "rb": [
        { "name": "Bhayshul Tuten", "team": "JAC", "id": "4882093", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4882093.png" },
        { "name": "Blake Corum", "team": "LAR", "id": "4429096", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429096.png" },
        { "name": "Brian Robinson Jr.", "team": "SF", "id": "4241474", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241474.png" },
        { "name": "Christian McCaffrey", "team": "SF", "id": "3117251", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3117251.png" },
        { "name": "Chuba Hubbard", "team": "CAR", "id": "4241416", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241416.png" },
        { "name": "D'Andre Swift", "team": "CHI", "id": "4259545", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4259545.png" },
        { "name": "Emanuel Wilson", "team": "GB", "id": "4887558", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4887558.png" },
        { "name": "J.K. Dobbins", "team": "DEN", "id": "4241985", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241985.png" },
        { "name": "James Cook III", "team": "BUF", "id": "4379399", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4379399.png" },
        { "name": "Jawhar Jordan", "team": "HOU", "id": "4429939", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429939.png" },
        { "name": "Jaylen Warren", "team": "PIT", "id": "4569987", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569987.png" },
        { "name": "Joe Mixon", "team": "HOU", "id": "3116385", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116385.png" },
        { "name": "Josh Jacobs", "team": "GB", "id": "4047365", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047365.png" },
        { "name": "Kenneth Gainwell", "team": "PIT", "id": "4371733", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4371733.png" },
        { "name": "Kenneth Walker III", "team": "SEA", "id": "4567048", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4567048.png" },
        { "name": "Kimani Vidal", "team": "LAC", "id": "4430968", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430968.png" },
        { "name": "Kyle Juszczyk", "team": "SF", "id": "16002", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16002.png" },
        { "name": "Kyle Monangai", "team": "CHI", "id": "4608686", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4608686.png" },
        { "name": "Kyren Williams", "team": "LAR", "id": "4430737", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430737.png" },
        { "name": "Nick Chubb", "team": "HOU", "id": "3128720", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3128720.png" },
        { "name": "Omarion Hampton", "team": "LAC", "id": "4685382", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685382.png" },
        { "name": "RJ Harvey", "team": "DEN", "id": "4568490", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4568490.png" },
        { "name": "Rhamondre Stevenson", "team": "NE", "id": "4569173", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569173.png" },
        { "name": "Rico Dowdle", "team": "CAR", "id": "4038815", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038815.png" },
        { "name": "Saquon Barkley", "team": "PHI", "id": "3929630", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3929630.png" },
        { "name": "Tank Bigsby", "team": "PHI", "id": "4429013", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429013.png" },
        { "name": "Travis Etienne Jr.", "team": "JAC", "id": "4239996", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4239996.png" },
        { "name": "TreVeyon Henderson", "team": "NE", "id": "4432710", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432710.png" },
        { "name": "Ty Johnson", "team": "BUF", "id": "3915411", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915411.png" },
        { "name": "Woody Marks", "team": "HOU", "id": "4429059", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429059.png" },
        { "name": "Zach Charbonnet", "team": "SEA", "id": "4426385", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426385.png" },
    ],
    "wr": [
        { "name": "A.J. Brown", "team": "PHI", "id": "4047646", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047646.png" },
        { "name": "Brandin Cooks", "team": "BUF", "id": "16731", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16731.png" },
        { "name": "Brandon Aiyuk", "team": "SF", "id": "4360438", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360438.png" },
        { "name": "Brian Thomas Jr.", "team": "JAC", "id": "4432773", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432773.png" },
        { "name": "Christian Watson", "team": "GB", "id": "4248528", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4248528.png" },
        { "name": "Cooper Kupp", "team": "SEA", "id": "2977187", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2977187.png" },
        { "name": "Courtland Sutton", "team": "DEN", "id": "3128429", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3128429.png" },
        { "name": "DJ Moore", "team": "CHI", "id": "3915416", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915416.png" },
        { "name": "DK Metcalf", "team": "PIT", "id": "4047650", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4047650.png" },
        { "name": "Davante Adams", "team": "LAR", "id": "16800", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16800.png" },
        { "name": "DeVonta Smith", "team": "PHI", "id": "4241478", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241478.png" },
        { "name": "Demarcus Robinson", "team": "SF", "id": "3043116", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043116.png" },
        { "name": "Efton Chism III", "team": "NE", "id": "4695193", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4695193.png" },
        { "name": "Jahdae Walker", "team": "CHI", "id": "5160110", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/5160110.png" },
        { "name": "Jakobi Meyers", "team": "JAC", "id": "3916433", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916433.png" },
        { "name": "Jalen Coker", "team": "CAR", "id": "4695883", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4695883.png" },
        { "name": "Jauan Jennings", "team": "SF", "id": "3886598", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3886598.png" },
        { "name": "Jaxon Smith-Njigba", "team": "SEA", "id": "4430878", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430878.png" },
        { "name": "Jayden Higgins", "team": "HOU", "id": "4877706", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4877706.png" },
        { "name": "Jayden Reed", "team": "GB", "id": "4362249", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362249.png" },
        { "name": "Jaylin Noel", "team": "HOU", "id": "4586312", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4586312.png" },
        { "name": "KeAndre Lambert-Smith", "team": "LAC", "id": "4430870", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4430870.png" },
        { "name": "Keenan Allen", "team": "LAC", "id": "15818", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15818.png" },
        { "name": "Keon Coleman", "team": "BUF", "id": "4635008", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4635008.png" },
        { "name": "Khalil Shakir", "team": "BUF", "id": "4373678", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4373678.png" },
        { "name": "Kyle Williams", "team": "NE", "id": "4613202", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4613202.png" },
        { "name": "Ladd McConkey", "team": "LAC", "id": "4612826", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4612826.png" },
        { "name": "Lil'Jordan Humphrey", "team": "DEN", "id": "4039057", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4039057.png" },
        { "name": "Luther Burden III", "team": "CHI", "id": "4685278", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685278.png" },
        { "name": "Mack Hollins", "team": "NE", "id": "2991662", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2991662.png" },
        { "name": "Marquez Valdes-Scantling", "team": "PIT", "id": "3051738", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3051738.png" },
        { "name": "Marvin Mims Jr.", "team": "DEN", "id": "4686472", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4686472.png" },
        { "name": "Matthew Golden", "team": "GB", "id": "4701936", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4701936.png" },
        { "name": "Michael Bandy", "team": "DEN", "id": "4034704", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4034704.png" },
        { "name": "Nico Collins", "team": "HOU", "id": "4258173", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4258173.png" },
        { "name": "Parker Washington", "team": "JAC", "id": "4432620", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4432620.png" },
        { "name": "Puka Nacua", "team": "LAR", "id": "4426515", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426515.png" },
        { "name": "Quentin Johnston", "team": "LAC", "id": "4429025", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4429025.png" },
        { "name": "Rashid Shaheed", "team": "SEA", "id": "4032473", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4032473.png" },
        { "name": "Ricky Pearsall", "team": "SF", "id": "4428209", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4428209.png" },
        { "name": "Rome Odunze", "team": "CHI", "id": "4431299", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431299.png" },
        { "name": "Romeo Doubs", "team": "GB", "id": "4361432", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361432.png" },
        { "name": "Stefon Diggs", "team": "NE", "id": "2976212", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2976212.png" },
        { "name": "Tetairoa McMillan", "team": "CAR", "id": "4685472", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685472.png" },
        { "name": "Travis Hunter", "team": "JAC", "id": "4685415", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4685415.png" },
        { "name": "Troy Franklin", "team": "DEN", "id": "4431280", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4431280.png" },
        { "name": "Xavier Smith", "team": "LAR", "id": "4386544", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4386544.png" },
    ],
    "k": [
        { "name": "Andy Borregales", "team": "NE", "id": "4569923", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569923.png" },
        { "name": "Brandon McManus", "team": "GB", "id": "16339", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16339.png" },
        { "name": "Cairo Santos", "team": "CHI", "id": "17427", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/17427.png" },
        { "name": "Cam Little", "team": "JAC", "id": "4686361", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4686361.png" },
        { "name": "Cameron Dicker", "team": "LAC", "id": "4362081", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362081.png" },
        { "name": "Chris Boswell", "team": "PIT", "id": "17372", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/17372.png" },
        { "name": "Eddy Pineiro", "team": "SF", "id": "4034949", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4034949.png" },
        { "name": "Harrison Mevis", "team": "LAR", "id": "4574716", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4574716.png" },
        { "name": "Jake Elliott", "team": "PHI", "id": "3050478", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3050478.png" },
        { "name": "Jason Myers", "team": "SEA", "id": "2473037", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2473037.png" },
        { "name": "Ka'imi Fairbairn", "team": "HOU", "id": "2971573", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971573.png" },
        { "name": "Matt Prater", "team": "BUF", "id": "11122", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11122.png" },
        { "name": "Ryan Fitzgerald", "team": "CAR", "id": "4568263", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4568263.png" },
        { "name": "Wil Lutz", "team": "DEN", "id": "2985659", "photo": "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2985659.png" },
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
}

const position_map = {
    "qb": "QB",
    "rb": "RB",
    "wr": "WR",
    "te": "TE",
    "k": "K",
    "dst": "DEF"
}

// Convert to flat array format (JS version)
let allPlayers = [];
for (const pos_key in position_map) {
    const pos_code = position_map[pos_key];
    if (players[pos_key]) {
        // Optionally, add comment line for clarity (JS can't append comments inside array)
        // allPlayers.push(`// ${pos_code}`); 
        for (const player of players[pos_key]) {
            allPlayers.push({ 
                "name": player.name, 
                "team": player.team, 
                "position": pos_code,
                "id": player.id,
                "photo": player.photo
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
function getPlayerStats(stats, playerPosition = null) {
    if (!stats) return null;
    
    // Get position from player object first, then from stats
    const firstWeek = stats["week 1"] || stats["week 2"] || stats["week 3"] || stats["week 4"];
    let position = playerPosition?.toLowerCase() || (firstWeek?.position || firstWeek?.POS || 'unknown').toLowerCase();
    
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
        
        // Position
        position: position
    };
    
    // Sum up stats from all available weeks
    Object.keys(stats).forEach(week => {
        if (week.startsWith('week')) {
            const weekStats = stats[week];
            
            // Check if it's a defense - check position first
            // Defenses have SACKS/SACK but NOT CMP/ATT (which QBs have)
            // Only use SACKS check if position is unknown
            const isDefense = position === 'def' || position === 'dst' || 
                             (position === 'unknown' && 
                              (weekStats.hasOwnProperty('SACKS') || weekStats.hasOwnProperty('SACK')) &&
                              !weekStats.hasOwnProperty('CMP') && !weekStats.hasOwnProperty('ATT'));
            
            if (isDefense) {
                // Defense stats
                cumulativeStats.sacks += (weekStats.SACKS || weekStats.SACK || 0);
                cumulativeStats.defInt += (weekStats["INT.1"] || weekStats.INT || 0);
                cumulativeStats.fumbles += (weekStats.FR || 0);
                cumulativeStats.safeties += (weekStats.SFTY || weekStats.SAFE || 0);
                cumulativeStats.touchdowns += (weekStats["TD.3"] || weekStats["DEF TD"] || 0);
                cumulativeStats.pointsAllowed += (weekStats.PA || 0);
                cumulativeStats.fantasyPoints += (weekStats.FPTS || 0);
            } else if (position === 'qb') {
                // QB stats
                cumulativeStats.completions += (weekStats.CMP || 0);
                cumulativeStats.attempts += (weekStats.ATT || 0);
                cumulativeStats.passYards += (weekStats.YDS || 0);
                cumulativeStats.passTD += (weekStats.TD || 0);
                cumulativeStats.interceptions += (weekStats.INT || 0);
                
                // QB rushing stats (ATT.1, YDS.1, TD.1)
                cumulativeStats.rushYards += (weekStats["YDS.1"] || 0);
                cumulativeStats.rushTD += (weekStats["TD.1"] || 0);
                
                cumulativeStats.fantasyPoints += (weekStats.FPTS || 0);
            } else if (position === 'rb') {
                // RB stats - YDS is rushing, YDS.1 is receiving
                cumulativeStats.rushYards += (weekStats.YDS || 0);
                cumulativeStats.rushTD += (weekStats.TD || 0);
                
                cumulativeStats.receptions += (weekStats.REC || 0);
                cumulativeStats.recYards += (weekStats["YDS.1"] || 0);
                cumulativeStats.recTD += (weekStats["TD.1"] || 0);
                
                cumulativeStats.fantasyPoints += (weekStats.FPTS || 0);
            } else if (position === 'wr' || position === 'te') {
                // WR/TE stats - YDS.2 is receiving, YDS.1 is rushing
                cumulativeStats.receptions += (weekStats.REC || 0);
                cumulativeStats.recYards += (weekStats["YDS.2"] || 0);
                cumulativeStats.recTD += (weekStats["TD.2"] || 0);
                
                // Rushing stats for WRs/TEs (if any)
                cumulativeStats.rushYards += (weekStats["YDS.1"] || 0);
                cumulativeStats.rushTD += (weekStats["TD.1"] || 0);
                
                cumulativeStats.fantasyPoints += (weekStats.FPTS || 0);
            } else {
                // Fallback: try to extract any available stats
                cumulativeStats.completions += (weekStats.CMP || 0);
                cumulativeStats.attempts += (weekStats.ATT || 0);
                cumulativeStats.passYards += (weekStats.YDS || 0);
                cumulativeStats.passTD += (weekStats.TD || 0);
                cumulativeStats.interceptions += (weekStats.INT || 0);
                
                cumulativeStats.rushYards += (weekStats["YDS.1"] || 0);
                cumulativeStats.rushTD += (weekStats["TD.1"] || 0);
                cumulativeStats.receptions += (weekStats.REC || 0);
                cumulativeStats.recYards += (weekStats["YDS.2"] || 0);
                cumulativeStats.recTD += (weekStats["TD.2"] || 0);
                
                cumulativeStats.fantasyPoints += (weekStats.FPTS || 0);
            }
        }
    });
    
    return cumulativeStats;
}

// Normalize player name for matching (trim whitespace, handle special cases)
function normalizePlayerName(name) {
    return name.trim();
}

// Get player image URL using ESPN data
function getPlayerImageUrl(player) {
    // If it's a defense, return the team logo
    const pos = player.position?.toLowerCase();
    if (pos === 'def' || pos === 'dst') {
        // Remove 'Defense' or 'DST' from the name to match our teamLogos object
        const teamName = player.name
            .replace(' Defense', '')
            .replace(' DST', '');
        const logoUrl = teamLogos[teamName];
        return logoUrl || 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/q7dpdlxyu5rs05rgh1le';
    }
    
    // For other players, use the photo URL from the player object
    if (player.photo) {
        return player.photo;
    }
    
    // If we have an ID but no photo URL, construct it
    if (player.id) {
        return `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.id}.png`;
    }
    
    // Fallback to default image
    return 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/q7dpdlxyu5rs05rgh1le';
}

// Create a player card
async function createPlayerCard(player) {
    const clone = template.content.cloneNode(true);
    const stats = getPlayerStats(player.stats, player.position);
    
    // Set player info
    clone.querySelector('.player-name').textContent = player.name;
    clone.querySelector('.player-position').textContent = player.position;
    clone.querySelector('.player-team').textContent = player.team ? `• ${player.team}` : '';
    
    // Set player image using ESPN data
    const playerImage = clone.querySelector('.player-image');
    const imageUrl = getPlayerImageUrl(player);
    playerImage.src = imageUrl;
    playerImage.onerror = function() {
        console.log(`Image failed to load for ${player.name}: ${imageUrl}`);
    };
    const pos = player.position?.toLowerCase();
    if (pos === 'def' || pos === 'dst') {
        playerImage.classList.add('defense-logo');
    }
    playerImage.alt = player.name;
    
    // Update stats display based on position
    const statsContainer = clone.querySelector('.position-stats');
    statsContainer.innerHTML = ''; // Clear existing stats

    if (stats) {
        const pos = player.position?.toUpperCase();
        console.log(`Player: ${player.name}, Position: ${pos}, Has Stats: ${!!stats}, Stats Object:`, stats);
        console.log(`  - Completions: ${stats.completions}, Attempts: ${stats.attempts}, PassYards: ${stats.passYards}`);
        console.log(`  - RushYards: ${stats.rushYards}, Receptions: ${stats.receptions}, RecYards: ${stats.recYards}`);
        
        switch (pos) {
            case 'QB':
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
            
            case 'RB':
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
            
            case 'WR':
            case 'TE':
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
            
            case 'DEF':
            case 'DST':
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
            
            case 'K':
                // Kickers don't have detailed stats in the current structure
                statsContainer.innerHTML = `
                    <div class="stat-item">
                        <span class="stat-label">Kicker</span>
                        <span class="stat-value">Field Goals & PATs</span>
                    </div>`;
                break;
            
            default:
                console.warn(`Unknown position for ${player.name}: ${pos}`);
                // Show generic stats if position doesn't match
                if (stats.completions > 0 || stats.attempts > 0) {
                    statsContainer.innerHTML = `
                        <div class="stat-item">
                            <span class="stat-label">Pass: ${stats.completions}/${stats.attempts}</span>
                            <span class="stat-value">${stats.passYards} YDS</span>
                        </div>`;
                } else if (stats.rushYards > 0 || stats.receptions > 0) {
                    statsContainer.innerHTML = `
                        <div class="stat-item">
                            <span class="stat-label">Rush: ${stats.rushYards} YDS</span>
                            <span class="stat-value">Rec: ${stats.receptions} REC, ${stats.recYards} YDS</span>
                        </div>`;
                }
                break;
        }
    } else {
        console.warn(`No stats found for ${player.name}`);
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
        
        // Filter out players with zero fantasy points
        const playerStats = getPlayerStats(player.stats, player.position);
        const hasPoints = playerStats && playerStats.fantasyPoints > 0;
        
        return matchesSearch && matchesPosition && hasPoints;
    });
    
    filtered.sort((a, b) => {
        switch(sortingMethod) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'team': {
                const teamA = (a.team || '').toUpperCase();
                const teamB = (b.team || '').toUpperCase();
                if (teamA !== teamB) {
                    return teamA.localeCompare(teamB);
                }
                // If teams are the same, sort by total points (descending)
                const aTeamStats = getPlayerStats(a.stats, a.position);
                const bTeamStats = getPlayerStats(b.stats, b.position);
                return (bTeamStats?.fantasyPoints || 0) - (aTeamStats?.fantasyPoints || 0);
            }
            case 'avgPoints':
            case 'totalPoints': {
                const aStats = getPlayerStats(a.stats, a.position);
                const bStats = getPlayerStats(b.stats, b.position);
                return (bStats?.fantasyPoints || 0) - (aStats?.fantasyPoints || 0);
            }
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

// Add this helper function to check if player has any fantasy points
function hasRecentActivity(stats) {
    if (!stats) return false;
    
    // Check if player has any fantasy points across all weeks
    const playerStats = getPlayerStats(stats);
    return playerStats && playerStats.fantasyPoints > 0;
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== DOM Content Loaded ===');
    console.log('allPlayers:', allPlayers?.length || 'Not loaded');
    console.log('player_stats:', typeof player_stats !== 'undefined' ? 'Loaded' : 'Not loaded');
    initialize();
});