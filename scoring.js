// Create a single flat array of all players at the top of scoring.js
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

// Simplified helper function
function getTeamFromPlayerName(playerName) {
    const player = all_players.find(p => p.name === playerName);
    return player ? player.team : 'FA';
}

// Roster percentages
const roster_percentages = {
    "Christian McCaffrey": 86.4,
    "Jaxon Smith-Njigba": 77.3,
    "Saquon Barkley": 68.2,
    "Houston Texans": 63.6,
    "Josh Allen": 59.1,
    "Ryan Fitzgerald": 50.0,
    "Travis Etienne Jr.": 50.0,
    "Cameron Dicker": 45.5,
    "Chris Boswell": 45.5,
    "Christian Watson": 45.5,
    "Matthew Stafford": 45.5,
    "Puka Nacua": 45.5,
    "Drake Maye": 40.9,
    "James Cook III": 40.9,
    "Josh Jacobs": 36.4,
    "RJ Harvey": 36.4,
    "Colston Loveland": 27.3,
    "Los Angeles Chargers": 27.3,
    "Nico Collins": 27.3,
    "Pittsburgh Steelers": 27.3,
    "Stefon Diggs": 27.3,
    "A.J. Brown": 22.7,
    "Denver Broncos": 22.7,
    "New England Patriots": 22.7,
    "Trevor Lawrence": 22.7,
    "Cam Little": 18.2,
    "Carolina Panthers": 18.2,
    "Courtland Sutton": 18.2,
    "D'Andre Swift": 18.2,
    "DK Metcalf": 18.2,
    "Luther Burden III": 18.2,
    "Rome Odunze": 18.2,
    "Tetairoa McMillan": 18.2,
    "Bo Nix": 13.6,
    "Brock Purdy": 13.6,
    "Omarion Hampton": 13.6,
    "Brandon McManus": 9.1,
    "Chicago Bears": 9.1,
    "Chuba Hubbard": 9.1,
    "Ka'imi Fairbairn": 9.1,
    "Kenneth Gainwell": 9.1,
    "Ladd McConkey": 9.1,
    "Zach Charbonnet": 9.1,
    "Cairo Santos": 4.5,
    "Davante Adams": 4.5,
    "DeVonta Smith": 4.5,
    "Green Bay Packers": 4.5,
    "Harrison Mevis": 4.5,
    "Jacksonville Jaguars": 4.5,
    "Jake Elliott": 4.5,
    "Jason Myers": 4.5,
    "Kenneth Walker III": 4.5,
    "Kyle Monangai": 4.5,
    "Parker Washington": 4.5,
    "Quentin Johnston": 4.5,
    "Rhamondre Stevenson": 4.5,
    "Rico Dowdle": 4.5,
    "Romeo Doubs": 4.5,
    "Sam Darnold": 4.5,
    "TreVeyon Henderson": 4.5,
    "Troy Franklin": 4.5,
    "Wil Lutz": 4.5
};

const player_stats = {
  "Christian McCaffrey": {
    "week 1": {
      "Rank": 0,
      "Player": "Christian McCaffrey",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 86.4,
      "POS": "qb"
    }
  },
  "Jaxon Smith-Njigba": {
    "week 1": {
      "Rank": 0,
      "Player": "Jaxon Smith-Njigba",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 77.3,
      "POS": "qb"
    }
  },
  "Saquon Barkley": {
    "week 1": {
      "Rank": 0,
      "Player": "Saquon Barkley",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 68.2,
      "POS": "qb"
    }
  },
  "Houston Texans": {
    "week 1": {
      "Rank": 0,
      "Player": "Houston Texans",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 63.6,
      "POS": "def"
    }
  },
  "Josh Allen": {
    "week 1": {
      "Rank": 0,
      "Player": "Josh Allen",
      "CMP": 6,
      "ATT": 7,
      "PCT": 85.7,
      "YDS": 37,
      "TD": 0,
      "INT": 0,
      "ATT.1": 2,
      "YDS.1": 10,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.5,
      "FPTS/G": 2.5,
      "ROST": 59.1,
      "POS": "qb"
    }
  },
  "Ryan Fitzgerald": {
    "week 1": {
      "Rank": 0,
      "Player": "Ryan Fitzgerald",
      "FPTS": 8,
      "FPTS/G": 8,
      "ROST": "42.1%",
      "POS": "k"
    }
  },
  "Travis Etienne Jr.": {
    "week 1": {
      "Rank": 0,
      "Player": "Travis Etienne Jr.",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 2,
      "YDS.1": 15,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 15,
      "TD.2": 0,
      "G": 1,
      "FPTS": 5.0,
      "FPTS/G": 5.0,
      "ROST": 50.0,
      "POS": "qb"
    }
  },
  "Cameron Dicker": {
    "week 1": {
      "Rank": 0,
      "Player": "Cameron Dicker",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "42.1%",
      "POS": "k"
    }
  },
  "Chris Boswell": {
    "week 1": {
      "Rank": 0,
      "Player": "Chris Boswell",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "47.4%",
      "POS": "k"
    }
  },
  "Christian Watson": {
    "week 1": {
      "Rank": 0,
      "Player": "Christian Watson",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 3,
      "TGT": 7,
      "YDS.2": 36,
      "TD.2": 1,
      "G": 1,
      "FPTS": 12.6,
      "FPTS/G": 12.6,
      "ROST": 45.5,
      "POS": "qb"
    }
  },
  "Matthew Stafford": {
    "week 1": {
      "Rank": 0,
      "Player": "Matthew Stafford",
      "CMP": 24,
      "ATT": 42,
      "PCT": 57.1,
      "YDS": 304,
      "TD": 3,
      "INT": 1,
      "ATT.1": 2,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 23.2,
      "FPTS/G": 23.2,
      "ROST": 45.5,
      "POS": "rb"
    }
  },
  "Puka Nacua": {
    "week 1": {
      "Rank": 0,
      "Player": "Puka Nacua",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 3,
      "YDS.1": 14,
      "TD.1": 1,
      "FL": 0,
      "REC": 10,
      "TGT": 18,
      "YDS.2": 111,
      "TD.2": 1,
      "G": 1,
      "FPTS": 34.5,
      "FPTS/G": 34.5,
      "ROST": 45.5,
      "POS": "wr"
    }
  },
  "Drake Maye": {
    "week 1": {
      "Rank": 0,
      "Player": "Drake Maye",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 40.9,
      "POS": "qb"
    }
  },
  "James Cook III": {
    "week 1": {
      "Rank": 0,
      "Player": "James Cook III",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 2,
      "YDS.1": 6,
      "TD.1": 0,
      "FL": 0,
      "REC": 1,
      "TGT": 1,
      "YDS.2": 1,
      "TD.2": 0,
      "G": 1,
      "FPTS": 1.7,
      "FPTS/G": 1.7,
      "ROST": 40.9,
      "POS": "qb"
    }
  },
  "Josh Jacobs": {
    "week 1": {
      "Rank": 0,
      "Player": "Josh Jacobs",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 19,
      "YDS.1": 55,
      "TD.1": 0,
      "FL": 0,
      "REC": 1,
      "TGT": 3,
      "YDS.2": 3,
      "TD.2": 0,
      "G": 1,
      "FPTS": 6.8,
      "FPTS/G": 6.8,
      "ROST": 36.4,
      "POS": "qb"
    }
  },
  "RJ Harvey": {
    "week 1": {
      "Rank": 0,
      "Player": "RJ Harvey",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 36.4,
      "POS": "qb"
    }
  },
  "Colston Loveland": {
    "week 1": {
      "Rank": 0,
      "Player": "Colston Loveland",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 8,
      "TGT": 15,
      "YDS.2": 137,
      "TD.2": 0,
      "G": 1,
      "FPTS": 21.7,
      "FPTS/G": 21.7,
      "ROST": 27.3,
      "POS": "qb"
    }
  },
  "Los Angeles Chargers": {
    "week 1": {
      "Rank": 0,
      "Player": "Los Angeles Chargers",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 27.3,
      "POS": "def"
    }
  },
  "Nico Collins": {
    "week 1": {
      "Rank": 0,
      "Player": "Nico Collins",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 27.3,
      "POS": "qb"
    }
  },
  "Pittsburgh Steelers": {
    "week 1": {
      "Rank": 0,
      "Player": "Pittsburgh Steelers",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 27.3,
      "POS": "def"
    }
  },
  "Stefon Diggs": {
    "week 1": {
      "Rank": 0,
      "Player": "Stefon Diggs",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 27.3,
      "POS": "qb"
    }
  },
  "A.J. Brown": {
    "week 1": {
      "Rank": 0,
      "Player": "A.J. Brown",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 22.7,
      "POS": "qb"
    }
  },
  "Denver Broncos": {
    "week 1": {
      "Rank": 0,
      "Player": "Denver Broncos",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 22.7,
      "POS": "def"
    }
  },
  "New England Patriots": {
    "week 1": {
      "Rank": 0,
      "Player": "New England Patriots",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 22.7,
      "POS": "def"
    }
  },
  "Trevor Lawrence": {
    "week 1": {
      "Rank": 0,
      "Player": "Trevor Lawrence",
      "CMP": 2,
      "ATT": 5,
      "PCT": 40.0,
      "YDS": 15,
      "TD": 0,
      "INT": 1,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": -0.4,
      "FPTS/G": -0.4,
      "ROST": 22.7,
      "POS": "qb"
    }
  },
  "Cam Little": {
    "week 1": {
      "Rank": 0,
      "Player": "Cam Little",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "21.1%",
      "POS": "k"
    }
  },
  "Carolina Panthers": {
    "week 1": {
      "Rank": 0,
      "Player": "Carolina Panthers",
      "SACKS": 1.0,
      "FR": 0,
      "INT.1": 1,
      "TD.3": 0,
      "BK": 1,
      "SAFE": 0,
      "PA": 34,
      "G": 1,
      "FPTS": 4.0,
      "FPTS/G": 4.0,
      "ROST": 18.2,
      "POS": "def"
    }
  },
  "Courtland Sutton": {
    "week 1": {
      "Rank": 0,
      "Player": "Courtland Sutton",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 18.2,
      "POS": "qb"
    }
  },
  "D'Andre Swift": {
    "week 1": {
      "Rank": 0,
      "Player": "D'Andre Swift",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 13,
      "YDS.1": 54,
      "TD.1": 1,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 38,
      "TD.2": 0,
      "G": 1,
      "FPTS": 17.2,
      "FPTS/G": 17.2,
      "ROST": 18.2,
      "POS": "qb"
    }
  },
  "DK Metcalf": {
    "week 1": {
      "Rank": 0,
      "Player": "DK Metcalf",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 18.2,
      "POS": "qb"
    }
  },
  "Luther Burden III": {
    "week 1": {
      "Rank": 0,
      "Player": "Luther Burden III",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 1,
      "YDS.1": -4,
      "TD.1": 0,
      "FL": 0,
      "REC": 3,
      "TGT": 7,
      "YDS.2": 42,
      "TD.2": 0,
      "G": 1,
      "FPTS": 6.8,
      "FPTS/G": 6.8,
      "ROST": 18.2,
      "POS": "qb"
    }
  },
  "Rome Odunze": {
    "week 1": {
      "Rank": 0,
      "Player": "Rome Odunze",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 6,
      "YDS.2": 44,
      "TD.2": 0,
      "G": 1,
      "FPTS": 6.4,
      "FPTS/G": 6.4,
      "ROST": 18.2,
      "POS": "qb"
    }
  },
  "Tetairoa McMillan": {
    "week 1": {
      "Rank": 0,
      "Player": "Tetairoa McMillan",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 5,
      "TGT": 7,
      "YDS.2": 81,
      "TD.2": 0,
      "G": 1,
      "FPTS": 13.1,
      "FPTS/G": 13.1,
      "ROST": 18.2,
      "POS": "wr"
    }
  },
  "Bo Nix": {
    "week 1": {
      "Rank": 0,
      "Player": "Bo Nix",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 13.6,
      "POS": "qb"
    }
  },
  "Brock Purdy": {
    "week 1": {
      "Rank": 0,
      "Player": "Brock Purdy",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 13.6,
      "POS": "qb"
    }
  },
  "Omarion Hampton": {
    "week 1": {
      "Rank": 0,
      "Player": "Omarion Hampton",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 13.6,
      "POS": "qb"
    }
  },
  "Brandon McManus": {
    "week 1": {
      "Rank": 0,
      "Player": "Brandon McManus",
      "FPTS": 3,
      "FPTS/G": 3,
      "ROST": "10.5%",
      "POS": "k"
    }
  },
  "Chicago Bears": {
    "week 1": {
      "Rank": 0,
      "Player": "Chicago Bears",
      "SACKS": 1.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 27,
      "G": 1,
      "FPTS": 1.0,
      "FPTS/G": 1.0,
      "ROST": 9.1,
      "POS": "def"
    }
  },
  "Chuba Hubbard": {
    "week 1": {
      "Rank": 0,
      "Player": "Chuba Hubbard",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 13,
      "YDS.1": 46,
      "TD.1": 2,
      "FL": 0,
      "REC": 2,
      "TGT": 4,
      "YDS.2": 13,
      "TD.2": 0,
      "G": 1,
      "FPTS": 19.9,
      "FPTS/G": 19.9,
      "ROST": 9.1,
      "POS": "wr"
    }
  },
  "Ka'imi Fairbairn": {
    "week 1": {
      "Rank": 0,
      "Player": "Ka'imi Fairbairn",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "10.5%",
      "POS": "k"
    }
  },
  "Kenneth Gainwell": {
    "week 1": {
      "Rank": 0,
      "Player": "Kenneth Gainwell",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 9.1,
      "POS": "qb"
    }
  },
  "Ladd McConkey": {
    "week 1": {
      "Rank": 0,
      "Player": "Ladd McConkey",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 9.1,
      "POS": "qb"
    }
  },
  "Zach Charbonnet": {
    "week 1": {
      "Rank": 0,
      "Player": "Zach Charbonnet",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 9.1,
      "POS": "qb"
    }
  },
  "Cairo Santos": {
    "week 1": {
      "Rank": 0,
      "Player": "Cairo Santos",
      "FPTS": 13,
      "FPTS/G": 13,
      "ROST": "5.3%",
      "POS": "k"
    }
  },
  "Davante Adams": {
    "week 1": {
      "Rank": 0,
      "Player": "Davante Adams",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 5,
      "TGT": 13,
      "YDS.2": 72,
      "TD.2": 0,
      "G": 1,
      "FPTS": 12.2,
      "FPTS/G": 12.2,
      "ROST": 4.5,
      "POS": "wr"
    }
  },
  "DeVonta Smith": {
    "week 1": {
      "Rank": 0,
      "Player": "DeVonta Smith",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Green Bay Packers": {
    "week 1": {
      "Rank": 0,
      "Player": "Green Bay Packers",
      "SACKS": 1.0,
      "FR": 0,
      "INT.1": 2,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 31,
      "G": 1,
      "FPTS": 4.0,
      "FPTS/G": 4.0,
      "ROST": 4.5,
      "POS": "def"
    }
  },
  "Harrison Mevis": {
    "week 1": {
      "Rank": 0,
      "Player": "Harrison Mevis",
      "FPTS": 12,
      "FPTS/G": 12,
      "ROST": "5.3%",
      "POS": "k"
    }
  },
  "Jacksonville Jaguars": {
    "week 1": {
      "Rank": 0,
      "Player": "Jacksonville Jaguars",
      "SACKS": 0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 0,
      "G": 1,
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": 4.5,
      "POS": "def"
    }
  },
  "Jake Elliott": {
    "week 1": {
      "Rank": 0,
      "Player": "Jake Elliott",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "5.3%",
      "POS": "k"
    }
  },
  "Jason Myers": {
    "week 1": {
      "Rank": 0,
      "Player": "Jason Myers",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "5.3%",
      "POS": "k"
    }
  },
  "Kenneth Walker III": {
    "week 1": {
      "Rank": 0,
      "Player": "Kenneth Walker III",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Kyle Monangai": {
    "week 1": {
      "Rank": 0,
      "Player": "Kyle Monangai",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 8,
      "YDS.1": 27,
      "TD.1": 0,
      "FL": 0,
      "REC": 1,
      "TGT": 3,
      "YDS.2": 22,
      "TD.2": 0,
      "G": 1,
      "FPTS": 5.9,
      "FPTS/G": 5.9,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Parker Washington": {
    "week 1": {
      "Rank": 0,
      "Player": "Parker Washington",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 1,
      "YDS.1": -3,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": -0.3,
      "FPTS/G": -0.3,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Quentin Johnston": {
    "week 1": {
      "Rank": 0,
      "Player": "Quentin Johnston",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Rhamondre Stevenson": {
    "week 1": {
      "Rank": 0,
      "Player": "Rhamondre Stevenson",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Rico Dowdle": {
    "week 1": {
      "Rank": 0,
      "Player": "Rico Dowdle",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 5,
      "YDS.1": 9,
      "TD.1": 0,
      "FL": 0,
      "REC": 1,
      "TGT": 2,
      "YDS.2": 6,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.5,
      "FPTS/G": 2.5,
      "ROST": 4.5,
      "POS": "wr"
    }
  },
  "Romeo Doubs": {
    "week 1": {
      "Rank": 0,
      "Player": "Romeo Doubs",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 8,
      "TGT": 11,
      "YDS.2": 124,
      "TD.2": 1,
      "G": 1,
      "FPTS": 26.4,
      "FPTS/G": 26.4,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Sam Darnold": {
    "week 1": {
      "Rank": 0,
      "Player": "Sam Darnold",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "TreVeyon Henderson": {
    "week 1": {
      "Rank": 0,
      "Player": "TreVeyon Henderson",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Troy Franklin": {
    "week 1": {
      "Rank": 0,
      "Player": "Troy Franklin",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 0,
      "YDS.1": 0,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": 4.5,
      "POS": "qb"
    }
  },
  "Wil Lutz": {
    "week 1": {
      "Rank": 0,
      "Player": "Wil Lutz",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "5.3%",
      "POS": "k"
    }
  }
};;

const fantasy_team_submissions = [
    {
        "name":"2X Toilet Bowl Champion",
        "qb1":"Josh Allen",
        "qb2":"Matthew Stafford",
        "rb1":"Christian McCaffrey",
        "rb2":"Josh Jacobs",
        "rb3":"Saquon Barkley",
        "rb4":"Omarion Hampton",
        "wr1":"DK Metcalf",
        "wr2":"Courtland Sutton",
        "wr3":"Jaxon Smith-Njigba",
        "wr4":"Luther Burden III",
        "k1":"Ryan Fitzgerald",
        "k2":"Cam Little",
        "def1":"Houston Texans",
        "def2":"New England Patriots",
        "tiebreak":57
    },
    {
        "name":"Hippies know football",
        "qb1":"Matthew Stafford",
        "qb2":"Josh Allen",
        "rb1":"Chuba Hubbard",
        "rb2":"Christian McCaffrey",
        "rb3":"Josh Jacobs",
        "rb4":"Kenneth Gainwell",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Stefon Diggs",
        "wr3":"Colston Loveland",
        "wr4":"Quentin Johnston",
        "k1":"Jake Elliott",
        "k2":"Cam Little",
        "def1":"Denver Broncos",
        "def2":"Houston Texans",
        "tiebreak":42
    },
    {
        "name":"SOUTHPAWS 1",
        "qb1":"Josh Allen",
        "qb2":"Trevor Lawrence",
        "rb1":"Christian McCaffrey",
        "rb2":"Saquon Barkley",
        "rb3":"RJ Harvey",
        "rb4":"Zach Charbonnet",
        "wr1":"DK Metcalf",
        "wr2":"Christian Watson",
        "wr3":"Rome Odunze",
        "wr4":"Puka Nacua",
        "k1":"Cameron Dicker",
        "k2":"Ryan Fitzgerald",
        "def1":"New England Patriots",
        "def2":"Houston Texans",
        "tiebreak":55
    },
    {
        "name":"Brutus",
        "qb1":"Josh Allen",
        "qb2":"Matthew Stafford",
        "rb1":"Christian McCaffrey",
        "rb2":"Saquon Barkley",
        "rb3":"Travis Etienne Jr.",
        "rb4":"RJ Harvey",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Nico Collins",
        "wr3":"Colston Loveland",
        "wr4":"Christian Watson",
        "k1":"Ryan Fitzgerald",
        "k2":"Cameron Dicker",
        "def1":"Pittsburgh Steelers",
        "def2":"New England Patriots",
        "tiebreak":55
    },
    {
        "name":"Skokie Boys",
        "qb1":"Matthew Stafford",
        "qb2":"Trevor Lawrence",
        "rb1":"Christian McCaffrey",
        "rb2":"James Cook III",
        "rb3":"Kyle Monangai",
        "rb4":"Saquon Barkley",
        "wr1":"Christian Watson",
        "wr2":"Jaxon Smith-Njigba",
        "wr3":"Stefon Diggs",
        "wr4":"Ladd McConkey",
        "k1":"Chris Boswell",
        "k2":"Ryan Fitzgerald",
        "def1":"Denver Broncos",
        "def2":"Houston Texans",
        "tiebreak":51
    },
    {
        "name":"Metro #1",
        "qb1":"Matthew Stafford",
        "qb2":"Trevor Lawrence",
        "rb1":"James Cook III",
        "rb2":"TreVeyon Henderson",
        "rb3":"Christian McCaffrey",
        "rb4":"Kenneth Gainwell",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Colston Loveland",
        "wr3":"A.J. Brown",
        "wr4":"Romeo Doubs",
        "k1":"Ka'imi Fairbairn",
        "k2":"Wil Lutz",
        "def1":"Carolina Panthers",
        "def2":"Los Angeles Chargers",
        "tiebreak":58
    },
    {
        "name":"HolySchlitz!!",
        "qb1":"Drake Maye",
        "qb2":"Matthew Stafford",
        "rb1":"James Cook III",
        "rb2":"Saquon Barkley",
        "rb3":"Christian McCaffrey",
        "rb4":"Josh Jacobs",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Courtland Sutton",
        "wr3":"Colston Loveland",
        "wr4":"Nico Collins",
        "k1":"Chris Boswell",
        "k2":"Ryan Fitzgerald",
        "def1":"Los Angeles Chargers",
        "def2":"Jacksonville Jaguars",
        "tiebreak":49
    },
    {
        "name":"Bo Nix Maye Cook",
        "qb1":"Bo Nix",
        "qb2":"Drake Maye",
        "rb1":"Travis Etienne Jr.",
        "rb2":"Christian McCaffrey",
        "rb3":"James Cook III",
        "rb4":"Josh Jacobs",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Puka Nacua",
        "wr3":"A.J. Brown",
        "wr4":"Tetairoa McMillan",
        "k1":"Chris Boswell",
        "k2":"Cameron Dicker",
        "def1":"Chicago Bears",
        "def2":"Houston Texans",
        "tiebreak":45
    },
    {
        "name":"Drake & Josh",
        "qb1":"Drake Maye",
        "qb2":"Josh Allen",
        "rb1":"Christian McCaffrey",
        "rb2":"Josh Jacobs",
        "rb3":"Saquon Barkley",
        "rb4":"Travis Etienne Jr.",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Puka Nacua",
        "wr3":"Nico Collins",
        "wr4":"Luther Burden III",
        "k1":"Cameron Dicker",
        "k2":"Chris Boswell",
        "def1":"Carolina Panthers",
        "def2":"Denver Broncos",
        "tiebreak":51
    },
    {
        "name":"Dina's Team",
        "qb1":"Josh Allen",
        "qb2":"Drake Maye",
        "rb1":"Christian McCaffrey",
        "rb2":"D'Andre Swift",
        "rb3":"Josh Jacobs",
        "rb4":"Saquon Barkley",
        "wr1":"Puka Nacua",
        "wr2":"Jaxon Smith-Njigba",
        "wr3":"Tetairoa McMillan",
        "wr4":"Courtland Sutton",
        "k1":"Cam Little",
        "k2":"Chris Boswell",
        "def1":"Houston Texans",
        "def2":"Los Angeles Chargers",
        "tiebreak":44
    },
    {
        "name":"Super Bowl Shufflers",
        "qb1":"Brock Purdy",
        "qb2":"Josh Allen",
        "rb1":"Saquon Barkley",
        "rb2":"Omarion Hampton",
        "rb3":"Rico Dowdle",
        "rb4":"D'Andre Swift",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"DK Metcalf",
        "wr3":"Christian Watson",
        "wr4":"Troy Franklin",
        "k1":"Cam Little",
        "k2":"Harrison Mevis",
        "def1":"Houston Texans",
        "def2":"New England Patriots",
        "tiebreak":37
    },
    {
        "name":"Big Winner ",
        "qb1":"Josh Allen",
        "qb2":"Drake Maye",
        "rb1":"Christian McCaffrey",
        "rb2":"Saquon Barkley",
        "rb3":"RJ Harvey",
        "rb4":"Travis Etienne Jr.",
        "wr1":"Puka Nacua",
        "wr2":"Jaxon Smith-Njigba",
        "wr3":"Tetairoa McMillan",
        "wr4":"Rome Odunze",
        "k1":"Brandon McManus",
        "k2":"Chris Boswell",
        "def1":"Houston Texans",
        "def2":"Los Angeles Chargers",
        "tiebreak":55
    },
    {
        "name":"Stallions",
        "qb1":"Bo Nix",
        "qb2":"Matthew Stafford",
        "rb1":"Christian McCaffrey",
        "rb2":"Zach Charbonnet",
        "rb3":"Saquon Barkley",
        "rb4":"James Cook III",
        "wr1":"Ladd McConkey",
        "wr2":"Nico Collins",
        "wr3":"Christian Watson",
        "wr4":"Parker Washington",
        "k1":"Cairo Santos",
        "k2":"Ryan Fitzgerald",
        "def1":"Pittsburgh Steelers",
        "def2":"New England Patriots",
        "tiebreak":55
    },
    {
        "name":"Express",
        "qb1":"Josh Allen",
        "qb2":"Matthew Stafford",
        "rb1":"Christian McCaffrey",
        "rb2":"RJ Harvey",
        "rb3":"Travis Etienne Jr.",
        "rb4":"Saquon Barkley",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Tetairoa McMillan",
        "wr3":"Luther Burden III",
        "wr4":"Stefon Diggs",
        "k1":"Brandon McManus",
        "k2":"Cameron Dicker",
        "def1":"Pittsburgh Steelers",
        "def2":"Houston Texans",
        "tiebreak":48
    },
    {
        "name":"Mac Attack",
        "qb1":"Josh Allen",
        "qb2":"Brock Purdy",
        "rb1":"Saquon Barkley",
        "rb2":"Travis Etienne Jr.",
        "rb3":"Kenneth Walker III",
        "rb4":"D'Andre Swift",
        "wr1":"Courtland Sutton",
        "wr2":"Stefon Diggs",
        "wr3":"Nico Collins",
        "wr4":"Puka Nacua",
        "k1":"Ryan Fitzgerald",
        "k2":"Cameron Dicker",
        "def1":"Pittsburgh Steelers",
        "def2":"Green Bay Packers",
        "tiebreak":59
    },
    {
        "name":"Pathetic Team",
        "qb1":"Josh Allen",
        "qb2":"Bo Nix",
        "rb1":"Christian McCaffrey",
        "rb2":"Saquon Barkley",
        "rb3":"Travis Etienne Jr.",
        "rb4":"Chuba Hubbard",
        "wr1":"Rome Odunze",
        "wr2":"Christian Watson",
        "wr3":"Stefon Diggs",
        "wr4":"Puka Nacua",
        "k1":"Cameron Dicker",
        "k2":"Jason Myers",
        "def1":"Pittsburgh Steelers",
        "def2":"Houston Texans",
        "tiebreak":50
    },
    {
        "name":"Metro2",
        "qb1":"Drake Maye",
        "qb2":"Trevor Lawrence",
        "rb1":"James Cook III",
        "rb2":"Christian McCaffrey",
        "rb3":"Josh Jacobs",
        "rb4":"RJ Harvey",
        "wr1":"Colston Loveland",
        "wr2":"Jaxon Smith-Njigba",
        "wr3":"Puka Nacua",
        "wr4":"A.J. Brown",
        "k1":"Chris Boswell",
        "k2":"Ryan Fitzgerald",
        "def1":"Houston Texans",
        "def2":"Los Angeles Chargers",
        "tiebreak":55
    },
    {
        "name":"Fbutt",
        "qb1":"Matthew Stafford",
        "qb2":"Drake Maye",
        "rb1":"James Cook III",
        "rb2":"Christian McCaffrey",
        "rb3":"RJ Harvey",
        "rb4":"Travis Etienne Jr.",
        "wr1":"Jaxon Smith-Njigba",
        "wr2":"Christian Watson",
        "wr3":"Luther Burden III",
        "wr4":"A.J. Brown",
        "k1":"Chris Boswell",
        "k2":"Cameron Dicker",
        "def1":"Carolina Panthers",
        "def2":"Houston Texans",
        "tiebreak":46
    },
    {
        "name":"Green Bay Sucks",
        "qb1":"Drake Maye",
        "qb2":"Brock Purdy",
        "rb1":"James Cook III",
        "rb2":"D'Andre Swift",
        "rb3":"Travis Etienne Jr.",
        "rb4":"Omarion Hampton",
        "wr1":"Christian Watson",
        "wr2":"Jaxon Smith-Njigba",
        "wr3":"Puka Nacua",
        "wr4":"DeVonta Smith",
        "k1":"Ka'imi Fairbairn",
        "k2":"Chris Boswell",
        "def1":"Denver Broncos",
        "def2":"Carolina Panthers",
        "tiebreak":47
    },
    {
        "name":"WhoaNelly33",
        "qb1":"Josh Allen",
        "qb2":"Trevor Lawrence",
        "rb1":"Christian McCaffrey",
        "rb2":"Rhamondre Stevenson",
        "rb3":"Saquon Barkley",
        "rb4":"Josh Jacobs",
        "wr1":"Rome Odunze",
        "wr2":"Davante Adams",
        "wr3":"DK Metcalf",
        "wr4":"Jaxon Smith-Njigba",
        "k1":"Ryan Fitzgerald",
        "k2":"Cameron Dicker",
        "def1":"Houston Texans",
        "def2":"Denver Broncos",
        "tiebreak":46
    },
    {
        "name":" Nelly22",
        "qb1":"Josh Allen",
        "qb2":"Sam Darnold",
        "rb1":"Christian McCaffrey",
        "rb2":"Saquon Barkley",
        "rb3":"RJ Harvey",
        "rb4":"Travis Etienne Jr.",
        "wr1":"Puka Nacua",
        "wr2":"Nico Collins",
        "wr3":"Stefon Diggs",
        "wr4":"Christian Watson",
        "k1":"Ryan Fitzgerald",
        "k2":"Chris Boswell",
        "def1":"Chicago Bears",
        "def2":"Los Angeles Chargers",
        "tiebreak":55
    },
    {
        "name":"SundayBloodySunday",
        "qb1":"Matthew Stafford",
        "qb2":"Drake Maye",
        "rb1":"Christian McCaffrey",
        "rb2":"James Cook III",
        "rb3":"RJ Harvey",
        "rb4":"Travis Etienne Jr.",
        "wr1":"Colston Loveland",
        "wr2":"A.J. Brown",
        "wr3":"Jaxon Smith-Njigba",
        "wr4":"Christian Watson",
        "k1":"Ryan Fitzgerald",
        "k2":"Cameron Dicker",
        "def1":"Pittsburgh Steelers",
        "def2":"Houston Texans",
        "tiebreak":53
    }
];

// Add this to the filterAndSortTeams function to always keep it at the bottom
function filterAndSortTeams(teams) {
    // Separate the highest possible team
    const highestPossibleTeam = teams.find(team => team.name === "Highest Possible Score");
    const regularTeams = teams.filter(team => team.name !== "Highest Possible Score");
    
    // Sort regular teams by points
    const sortedTeams = regularTeams.sort((a, b) => b.totalPoints - a.totalPoints);
    
    // Add highest possible team back at the end
    if (highestPossibleTeam) {
        sortedTeams.push(highestPossibleTeam);
    }
    
    // Combine them with highest possible at the end
    const finalSortedTeams = [...sortedTeams];
    const firstTeam = finalSortedTeams.shift(); // Remove first element
    finalSortedTeams.push(firstTeam); // Add it to the end
    
    return finalSortedTeams;
}

      function populateScores() {
          // Calculate and display prize amounts
          const numTeams = fantasy_team_submissions.length;
          const totalPrizePool = numTeams * 20;
          const firstPrize = Math.round(totalPrizePool * 0.6);
          const secondPrize = Math.round(totalPrizePool * 0.3);
          const thirdPrize = Math.round(totalPrizePool * 0.1);
          
          const prizeSubtitle = document.getElementById("prizeSubtitle");
          if (prizeSubtitle) {
              prizeSubtitle.innerHTML = `<span>1st - $${firstPrize}</span><span>2nd - $${secondPrize}</span><span>3rd - $${thirdPrize}</span>`;
          }
          
          const tbody = document.getElementById("scoreTableBody");
          tbody.innerHTML = "";
          
          const playerScoresContainer = document.getElementById("playerScoresContainer");
          playerScoresContainer.innerHTML = "";
      
          // Initialize team scores array
          const teamScores = fantasy_team_submissions.map(team => {
              let totalScores = {
                  name: team.name,
                  week1: 0,
                  week2: 0,
                  week3: 0,
                  week4: 0,
                  total: 0,
                  players: Object.values(team).slice(1, -1)
              };
              
              totalScores.players.forEach(player => {
                  for (let week = 1; week <= 4; week++) {
                      const weekKey = `week ${week}`;
                      if (player_stats[player]?.[weekKey]) {
                          totalScores[`week${week}`] += player_stats[player][weekKey]["FPTS"] || 0;
                      }
                  }
              });
      
              totalScores.total = Object.keys(totalScores)
                  .filter(key => key.startsWith('week'))
                  .reduce((sum, key) => sum + totalScores[key], 0);
      
              Object.keys(totalScores).forEach(key => {
                  if (typeof totalScores[key] === 'number') {
                      totalScores[key] = parseFloat(totalScores[key].toFixed(1));
                  }
              });
      
              return totalScores;
          });
      
          // Find highest scores for each week
          const highestScores = {
              week1: Math.max(...teamScores.map(team => team.week1)),
              week2: Math.max(...teamScores.map(team => team.week2)),
              week3: Math.max(...teamScores.map(team => team.week3)),
              week4: Math.max(...teamScores.map(team => team.week4)),
          };
      
          teamScores.sort((a, b) => {
              // First sort by total score (descending)
              if (b.total !== a.total) {
                  return b.total - a.total;
              }
              // If totals are equal, sort alphabetically by name (ascending)
              return a.name.localeCompare(b.name);
          });
      
          teamScores.forEach((teamScore, index) => {
              // Determine which weeks this team had the highest score
              const isHighestWeek1 = teamScore.week1 === highestScores.week1 && teamScore.week1 !== 0;
              const isHighestWeek2 = teamScore.week2 === highestScores.week2 && teamScore.week2 !== 0;
              const isHighestWeek3 = teamScore.week3 === highestScores.week3 && teamScore.week3 !== 0;
              const isHighestWeek4 = teamScore.week4 === highestScores.week4 && teamScore.week4 !== 0;
      
              const row = document.createElement("tr");
              row.className = index % 2 === 0 ? 'bg-inherit' : 'bg-gray-100';
              // In your populateScores function, update the row.innerHTML section:
              row.innerHTML = `
              <td class="sticky left-0 px-6 py-4 whitespace-nowrap font-medium text-gray-100 bg-inherit">
                  <span class="team-name-link" data-team="${teamScore.name}">${teamScore.name}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-100 ${isHighestWeek1 ? 'font-semibold' : ''}">${teamScore.week1}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-100 ${isHighestWeek2 ? 'font-semibold' : ''}">${teamScore.week2}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-100 ${isHighestWeek3 ? 'font-semibold' : ''}">${teamScore.week3}</td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-100 ${isHighestWeek4 ? 'font-semibold' : ''}">${teamScore.week4}</td>
              <td class="px-6 py-4 whitespace-nowrap font-semibold text-gray-100 bg-green-900">${teamScore.total}</td>
              `;

              // Add click handler to the team name
              const teamNameLink = row.querySelector('.team-name-link');
              teamNameLink.addEventListener('click', () => {
              const teamDetailId = `team-detail-${teamScore.name.replace(/\s+/g, '-')}`;
              const teamDetail = document.getElementById(teamDetailId);
              if (teamDetail) {
                  teamDetail.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                  });
              }
              });
              tbody.appendChild(row);
      
              // Create player score tables
              createTeamDetailCard(teamScore, index);
          });
      
          calculateOwnershipStats();

          // After the main table, add the highest possible team div
          const highestPossibleDiv = document.createElement('div');
          highestPossibleDiv.className = 'highest-possible-div';
          highestPossibleDiv.innerHTML = ``;

          // Insert after the leaderboard container
          const leaderboardContainer = document.querySelector('.leaderboard-container');
          leaderboardContainer.parentNode.insertBefore(highestPossibleDiv, leaderboardContainer.nextSibling);
      }
      
      function createTeamDetailCard(teamScore, index) {
          const playerScoresContainer = document.getElementById("playerScoresContainer");
          
          const teamCard = document.createElement("div");
          // Add an ID to the team card for scrolling
          teamCard.id = `team-detail-${teamScore.name.replace(/\s+/g, '-')}`;
          teamCard.className = "team-card";
          
          const header = document.createElement("div");
          header.className = "team-card-header";
          header.textContent = `${teamScore.name} - Player Scores`;
          
          const tableWrapper = document.createElement("div");
          tableWrapper.className = "overflow-x-auto";
          
          const table = document.createElement("table");
          table.className = "min-w-full";
          table.innerHTML = `
          <thead>
              <tr>
                  <th>Player</th>
                  <th>Wildcard</th>
                  <th>Divisional</th>
                  <th>Conference</th>
                  <th>Superbowl</th>
                  <th>Total</th>
              </tr>
          </thead>
          <tbody>
          </tbody>
      `;
      
          const tbody = table.querySelector('tbody');
          let tracker = 0;
          teamScore.players.forEach(player => {
              const row = document.createElement('tr');
              row.className = tracker % 2 === 0 ? 'bg-inherit' : 'bg-gray-100';
              tracker++;
              let playerTotal = 0;
              let weeklyScores = [];
              
              const weekToRoundMap = {
                  1: "Wildcard",
                  2: "Divisional",
                  3: "Conference",
                  4: "Superbowl"
              };
              
              for (let week = 1; week <= 4; week++) {
                  const weekKey = `week ${week}`;
                  const fpts = player_stats[player]?.[weekKey]?.["FPTS"] || 0;
                  playerTotal += fpts;
                  weeklyScores.push({
                      round: weekToRoundMap[week],
                      score: fpts.toFixed(1)
                  });
              }
              
              const team = all_players.find(p => p.name === player)?.team || 'FA';
              row.innerHTML = `
                  <td>${player} (${team})</td>
                  ${weeklyScores.map(({score}) => 
                      `<td>${score}</td>`
                  ).join('')}
                  <td>${playerTotal.toFixed(1)}</td>
              `;
              
              tbody.appendChild(row);
          });
      
          tableWrapper.appendChild(table);
          teamCard.appendChild(header);
          teamCard.appendChild(tableWrapper);
          playerScoresContainer.appendChild(teamCard);
      
          // Return the ID for reference
          return teamCard.id;
      }
      let currentPage = 1;
      function calculateItemsPerPage() {
          const ownershipTable = document.querySelector('.ownership-stats');
          const mainLeaderboard = document.querySelector('.main-leaderboard');
          
          // Get the actual height of the main leaderboard table
          const mainTableHeight = mainLeaderboard.offsetHeight;
          const mainTableRows = mainLeaderboard.querySelectorAll('tbody tr');
          if (mainTableRows.length === 0) return 10; // Default if no rows
          
          // Calculate the actual row height from the main leaderboard
          const mainRowHeight = mainTableRows[0].offsetHeight;
          
          // Calculate how many rows will fit in the ownership stats table
          // Subtract 3 rows worth of space for header and pagination
          const itemsPerPage = Math.floor(mainTableHeight / mainRowHeight) - 20;
          
          // Ensure we return a reasonable number (minimum 5, maximum mainTableRows.length)
          return Math.max(13, Math.min(itemsPerPage, mainTableRows.length));
      }

function calculateOwnershipStats() {
    const ownershipTableBody = document.getElementById("ownershipTableBody");
    ownershipTableBody.innerHTML = "";

    // Use roster_percentages data instead of calculating dynamically
    ownershipStatsData = Object.entries(roster_percentages)
        .map(([player, percentage]) => ({
            player: player,
            percentage: percentage
        }))
        .sort((a, b) => b.percentage - a.percentage);

    const itemsPerPage = calculateItemsPerPage();
    displayOwnershipPage(1, itemsPerPage);
    setupPagination(itemsPerPage);
}

function displayOwnershipPage(page, itemsPerPage) {
    const ownershipTableBody = document.getElementById("ownershipTableBody");
    ownershipTableBody.innerHTML = "";
    
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = ownershipStatsData.slice(startIndex, endIndex);
    let tracker = 0;
    pageData.forEach(({ player, percentage }) => {
        const team = all_players.find(p => p.name === player)?.team || 'FA';
        const row = document.createElement("tr");
        row.className = tracker % 2 === 0 ? 'bg-inherit' : 'bg-gray-100';
        tracker++;
        row.innerHTML = `
            <td>${player} (${team})</td>
            <td>${percentage.toFixed(1)}%</td>
        `;
        ownershipTableBody.appendChild(row);
    });

    const pageInfo = document.getElementById("pageInfo");
    const totalPages = Math.ceil(ownershipStatsData.length / itemsPerPage);
    pageInfo.textContent = `Page ${page} of ${totalPages}`;

    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    currentPage = page;
}

function setupPagination(itemsPerPage) {
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");

  prevBtn.onclick = () => {
      if (currentPage > 1) {
          displayOwnershipPage(currentPage - 1, itemsPerPage);
      }
  };

  nextBtn.onclick = () => {
      const totalPages = Math.ceil(ownershipStatsData.length / itemsPerPage);
      if (currentPage < totalPages) {
          displayOwnershipPage(currentPage + 1, itemsPerPage);
      }
  };
}

// Add window resize handler to recalculate items per page when window is resized
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
      const itemsPerPage = calculateItemsPerPage();
      displayOwnershipPage(currentPage, itemsPerPage);
      setupPagination(itemsPerPage);
  }, 250); // Debounce resize events
});
      
      // Call on page load
      window.onload = populateScores;

function renderScoreTable(sortedTeams) {
    const tableBody = document.querySelector('#scoreTable tbody');
    tableBody.innerHTML = '';
    // First render all regular teams
    sortedTeams.forEach((team, index) => {
        const row = createTableRow(team, index + 1);
        tableBody.appendChild(row);
    });

}

function displayLeaderboard() {
    // Calculate total points for each team (excluding highest possible)
    const teamsWithPoints = fantasy_team_submissions
        .filter(team => team.name !== "Highest Possible Score")
        .map(team => ({
            ...team,
            totalPoints: calculateTeamPoints(team)
        }))
        .sort((a, b) => b.totalPoints - a.totalPoints);

    // Combine regular teams with highest possible at the end
    const finalSortedTeams = [...teamsWithPoints, highestPossibleTeam];
    
    console.log('Final order:', finalSortedTeams.map(t => t.name));

    // Display the sorted teams
    renderScoreTable(finalSortedTeams);
}

function calculateTeamPoints(team) {
    // Special case for Highest Possible Score - make points negative to force to bottom
    if (team.name === "Highest Possible Score") {
        return -999999; // This will ensure it's always last
    }

    // Regular point calculation for all other teams
    const positions = ['qb1', 'qb2', 'rb1', 'rb2', 'rb3', 'rb4', 'wr1', 'wr2', 'wr3', 'wr4', 'k1', 'k2', 'def1', 'def2'];
    return positions.reduce((total, pos) => {
        const playerName = team[pos];
        const playerStats = player_stats[playerName];
        if (playerStats && playerStats["week 1"]) {
            return total + (playerStats["week 1"].FPTS || 0);
        }
        return total;
    }, 0);
}

