// Create a single flat array of all players at the top of scoring.js
const allPlayers = [
    // QBs
    { "name": "Baker Mayfield", "team": "TB" }, 
    { "name": "Bo Nix", "team": "DEN" },        
    { "name": "C.J. Stroud", "team": "HOU" },   
    { "name": "Jalen Hurts", "team": "PHI" },   
    { "name": "Jared Goff", "team": "DET" },    
    { "name": "Jayden Daniels", "team": "WAS" },
    { "name": "Jordan Love", "team": "GB" },    
    { "name": "Josh Allen", "team": "BUF" },    
    { "name": "Justin Fields", "team": "PIT" }, 
    { "name": "Justin Herbert", "team": "LAC" },
    { "name": "Lamar Jackson", "team": "BAL" }, 
    { "name": "Matthew Stafford", "team": "LAR" },
    { "name": "Patrick Mahomes II", "team": "KC" },
    { "name": "Russell Wilson", "team": "PIT" },
    { "name": "Sam Darnold", "team": "MIN" },
    // RBs
    { "name": "Aaron Jones Sr.", "team": "MIN" },
    { "name": "Austin Ekeler", "team": "WAS" },
    { "name": "Brian Robinson Jr.", "team": "WAS" },
    { "name": "Bucky Irving", "team": "TB" },
    { "name": "David Montgomery", "team": "DET" },
    { "name": "Derrick Henry", "team": "BAL" },
    { "name": "Gus Edwards", "team": "LAC" },
    { "name": "Isiah Pacheco", "team": "KC" },
    { "name": "J.K. Dobbins", "team": "LAC" },
    { "name": "Jahmyr Gibbs", "team": "DET" },
    { "name": "James Cook", "team": "BUF" },
    { "name": "Javonte Williams", "team": "DEN" },
    { "name": "Jaylen Warren", "team": "PIT" },
    { "name": "Joe Mixon", "team": "HOU" },
    { "name": "Josh Jacobs", "team": "GB" },
    { "name": "Kareem Hunt", "team": "KC" },
    { "name": "Kyren Williams", "team": "LAR" },
    { "name": "Najee Harris", "team": "PIT" },
    { "name": "Rachaad White", "team": "TB" },
    { "name": "Saquon Barkley", "team": "PHI" },
    { "name": "Ty Chandler", "team": "MIN" },
    // WRs and TEs
    { "name": "A.J. Brown", "team": "PHI" },
    { "name": "Amari Cooper", "team": "BUF" },
    { "name": "Amon-Ra St. Brown", "team": "DET" },
    { "name": "Cooper Kupp", "team": "LAR" },
    { "name": "Courtland Sutton", "team": "DEN" },
    { "name": "DeAndre Hopkins", "team": "KC" },
    { "name": "DeVonta Smith", "team": "PHI" },
    { "name": "George Pickens", "team": "PIT" },
    { "name": "Jalen McMillan", "team": "TB" },
    { "name": "Jameson Williams", "team": "DET" },
    { "name": "Jayden Reed", "team": "GB" },
    { "name": "Jordan Addison", "team": "MIN" },
    { "name": "JuJu Smith-Schuster", "team": "KC" },
    { "name": "Justin Jefferson", "team": "MIN" },
    { "name": "Keon Coleman", "team": "BUF" },
    { "name": "Khalil Shakir", "team": "BUF" },
    { "name": "Ladd McConkey", "team": "LAC" },
    { "name": "Marquise Brown", "team": "KC" },
    { "name": "Mike Evans", "team": "TB" },
    { "name": "Nico Collins", "team": "HOU" },
    { "name": "Puka Nacua", "team": "LAR" },
    { "name": "Quentin Johnston", "team": "LAC" },
    { "name": "Rashee Rice", "team": "KC" },
    { "name": "Rashod Bateman", "team": "BAL" },
    { "name": "Romeo Doubs", "team": "GB" },
    { "name": "Stefon Diggs", "team": "HOU" },
    { "name": "Tank Dell", "team": "HOU" },
    { "name": "Terry McLaurin", "team": "WAS" },
    { "name": "Xavier Worthy", "team": "KC" },
    { "name": "Zay Flowers", "team": "BAL" },
    { "name": "Dallas Goedert", "team": "PHI" },
    { "name": "Dalton Kincaid", "team": "BUF" },
    { "name": "Cade Otton", "team": "TB" },
    { "name": "Isaiah Likely", "team": "BAL" },
    { "name": "TJ Hockenson", "team": "MIN" },
    { "name": "Mark Andrews", "team": "BAL" },
    { "name": "Pat Freiermuth", "team": "PIT" },
    { "name": "Sam LaPorta", "team": "DET" },
    { "name": "Travis Kelce", "team": "KC" },
    { "name": "Tucker Kraft", "team": "GB" },
    // Kickers
    { "name": "Zane Gonzalez", "team": "WAS" },
    { "name": "Cameron Dicker", "team": "LAC" },
    { "name": "Chase McLaughlin", "team": "TB" },
    { "name": "Chris Boswell", "team": "PIT" },
    { "name": "Harrison Butker", "team": "KC" },
    { "name": "Jake Bates", "team": "DET" },
    { "name": "Jake Elliott", "team": "PHI" },
    { "name": "Justin Tucker", "team": "BAL" },
    { "name": "Ka'imi Fairbairn", "team": "HOU" },
    { "name": "Tyler Bass", "team": "BUF" },
    { "name": "Joshua Karty", "team": "LAR" },
    { "name": "Wil Lutz", "team": "DEN" },
    { "name": "Brandon McManus", "team": "GB" },
    { "name": "Wil Reichard", "team": "MIN" },
    // Defense
    { "name": "Baltimore Ravens", "team": "BAL" },
    { "name": "Buffalo Bills", "team": "BUF" },
    { "name": "Denver Broncos", "team": "DEN" },
    { "name": "Detroit Lions", "team": "DET" },
    { "name": "Green Bay Packers", "team": "GB" },
    { "name": "Houston Texans", "team": "HOU" },
    { "name": "Kansas City Chiefs", "team": "KC" },
    { "name": "Los Angeles Chargers", "team": "LAC" },
    { "name": "Minnesota Vikings", "team": "MIN" },
    { "name": "Philadelphia Eagles", "team": "PHI" },
    { "name": "Pittsburgh Steelers", "team": "PIT" },
    { "name": "Tampa Bay Buccaneers", "team": "TB" },
    { "name": "Washington Commanders", "team": "WAS" },
    { "name": "Los Angeles Rams", "team": "LAR" },
];

// Simplified helper function
function getTeamFromPlayerName(playerName) {
    const player = allPlayers.find(p => p.name === playerName);
    return player ? player.team : 'FA';
}

const player_stats = {
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
      "ATT.1": 25,
      "YDS.1": 119,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 4,
      "TD.2": 0,
      "G": 1,
      "FPTS": 14.3,
      "FPTS/G": 14.3,
      "ROST": "89.7%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Saquon Barkley",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 26,
      "YDS.1": 205,
      "TD.1": 2,
      "FL": 0,
      "REC": 4,
      "TGT": 4,
      "YDS.2": 27,
      "TD.2": 0,
      "G": 1,
      "FPTS": 39.2,
      "FPTS/G": 39.2,
      "ROST": "89.7%",
      "POS": "qb"
    }
  },
  "Justin Jefferson": {
    "week 1": {
      "Rank": 0,
      "Player": "Justin Jefferson",
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
      "TGT": 8,
      "YDS.2": 58,
      "TD.2": 0,
      "G": 1,
      "FPTS": 10.8,
      "FPTS/G": 10.8,
      "ROST": "82.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Justin Jefferson",
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
      "ROST": "82.1%",
      "POS": "qb"
    }
  },
  "Josh Allen": {
    "week 1": {
      "Rank": 0,
      "Player": "Josh Allen",
      "CMP": 20,
      "ATT": 26,
      "PCT": 76.9,
      "YDS": 272,
      "TD": 2,
      "INT": 0,
      "ATT.1": 8,
      "YDS.1": 46,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 23.5,
      "FPTS/G": 23.5,
      "ROST": "79.5%",
      "POS": "rb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Josh Allen",
      "CMP": 5,
      "ATT": 7,
      "PCT": 71.4,
      "YDS": 69,
      "TD": 0,
      "INT": 0,
      "ATT.1": 5,
      "YDS.1": 15,
      "TD.1": 2,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 16.3,
      "FPTS/G": 16.3,
      "ROST": "79.5%",
      "POS": "qb"
    }
  },
  "Jahmyr Gibbs": {
    "week 1": {
      "Rank": 0,
      "Player": "Jahmyr Gibbs",
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
      "ROST": "61.5%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Jahmyr Gibbs",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 14,
      "YDS.1": 105,
      "TD.1": 2,
      "FL": 0,
      "REC": 6,
      "TGT": 11,
      "YDS.2": 70,
      "TD.2": 0,
      "G": 1,
      "FPTS": 35.5,
      "FPTS/G": 35.5,
      "ROST": "61.5%",
      "POS": "qb"
    }
  },
  "Lamar Jackson": {
    "week 1": {
      "Rank": 0,
      "Player": "Lamar Jackson",
      "CMP": 16,
      "ATT": 21,
      "PCT": 76.2,
      "YDS": 175,
      "TD": 2,
      "INT": 0,
      "ATT.1": 15,
      "YDS.1": 81,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 23.1,
      "FPTS/G": 23.1,
      "ROST": "51.3%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Lamar Jackson",
      "CMP": 6,
      "ATT": 10,
      "PCT": 60.0,
      "YDS": 123,
      "TD": 1,
      "INT": 1,
      "ATT.1": 5,
      "YDS.1": 31,
      "TD.1": 0,
      "FL": 1,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 9.0,
      "FPTS/G": 9.0,
      "ROST": "51.3%",
      "POS": "qb"
    }
  },
  "Derrick Henry": {
    "week 1": {
      "Rank": 0,
      "Player": "Derrick Henry",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 26,
      "YDS.1": 186,
      "TD.1": 2,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 30.6,
      "FPTS/G": 30.6,
      "ROST": "48.7%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Derrick Henry",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 8,
      "YDS.1": 21,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.1,
      "FPTS/G": 2.1,
      "ROST": "48.7%",
      "POS": "qb"
    }
  },
  "Chris Boswell": {
    "week 1": {
      "Rank": 0,
      "Player": "Chris Boswell",
      "FPTS": 2,
      "FPTS/G": 2,
      "ROST": "48.7%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Chris Boswell",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "48.7%",
      "POS": "k"
    }
  },
  "Denver Broncos": {
    "week 1": {
      "Rank": 0,
      "Player": "Denver Broncos",
      "SACKS": 2.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 31,
      "G": 1,
      "FPTS": 1.0,
      "FPTS/G": 1.0,
      "ROST": "48.7%",
      "POS": "def"
    },
    "week 2": {
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
      "ROST": "48.7%",
      "POS": "def"
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
      "ATT.1": 1,
      "YDS.1": 7,
      "TD.1": 0,
      "FL": 0,
      "REC": 5,
      "TGT": 9,
      "YDS.2": 44,
      "TD.2": 0,
      "G": 1,
      "FPTS": 10.1,
      "FPTS/G": 10.1,
      "ROST": "48.7%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Puka Nacua",
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
      "REC": 6,
      "TGT": 14,
      "YDS.2": 97,
      "TD.2": 0,
      "G": 1,
      "FPTS": 15.7,
      "FPTS/G": 15.7,
      "ROST": "48.7%",
      "POS": "qb"
    }
  },
  "Bucky Irving": {
    "week 1": {
      "Rank": 0,
      "Player": "Bucky Irving",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 17,
      "YDS.1": 77,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 6,
      "TD.2": 1,
      "G": 1,
      "FPTS": 16.3,
      "FPTS/G": 16.3,
      "ROST": "46.2%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Bucky Irving",
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
      "ROST": "46.2%",
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
      "REC": 9,
      "TGT": 14,
      "YDS.2": 197,
      "TD.2": 1,
      "G": 1,
      "FPTS": 34.7,
      "FPTS/G": 34.7,
      "ROST": "46.2%",
      "POS": "qb"
    },
    "week 2": {
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
      "ROST": "46.2%",
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
      "ATT.1": 18,
      "YDS.1": 81,
      "TD.1": 1,
      "FL": 0,
      "REC": 3,
      "TGT": 3,
      "YDS.2": 40,
      "TD.2": 0,
      "G": 1,
      "FPTS": 21.1,
      "FPTS/G": 21.1,
      "ROST": "43.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Josh Jacobs",
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
      "ROST": "43.6%",
      "POS": "qb"
    }
  },
  "Terry McLaurin": {
    "week 1": {
      "Rank": 0,
      "Player": "Terry McLaurin",
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
      "REC": 7,
      "TGT": 10,
      "YDS.2": 89,
      "TD.2": 1,
      "G": 1,
      "FPTS": 21.9,
      "FPTS/G": 21.9,
      "ROST": "41.0%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Terry McLaurin",
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
      "REC": 4,
      "TGT": 6,
      "YDS.2": 87,
      "TD.2": 1,
      "G": 1,
      "FPTS": 18.7,
      "FPTS/G": 18.7,
      "ROST": "41.0%",
      "POS": "qb"
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
      "REC": 7,
      "TGT": 8,
      "YDS.2": 122,
      "TD.2": 1,
      "G": 1,
      "FPTS": 25.2,
      "FPTS/G": 25.2,
      "ROST": "38.5%",
      "POS": "qb"
    },
    "week 2": {
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
      "REC": 5,
      "TGT": 8,
      "YDS.2": 81,
      "TD.2": 0,
      "G": 1,
      "FPTS": 13.1,
      "FPTS/G": 13.1,
      "ROST": "38.5%",
      "POS": "wr"
    }
  },
  "Brandon McManus": {
    "week 1": {
      "Rank": 0,
      "Player": "Brandon McManus",
      "FPTS": 2,
      "FPTS/G": 2,
      "ROST": "38.5%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Brandon McManus",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "38.5%",
      "POS": "k"
    }
  },
  "Travis Kelce": {
    "week 1": {
      "Rank": 0,
      "Player": "Travis Kelce",
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
      "ROST": "35.9%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Travis Kelce",
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
      "REC": 7,
      "TGT": 8,
      "YDS.2": 117,
      "TD.2": 1,
      "G": 1,
      "FPTS": 24.7,
      "FPTS/G": 24.7,
      "ROST": "35.9%",
      "POS": "wr"
    }
  },
  "Wil Lutz": {
    "week 1": {
      "Rank": 0,
      "Player": "Wil Lutz",
      "FPTS": 1,
      "FPTS/G": 1,
      "ROST": "35.9%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Wil Lutz",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "35.9%",
      "POS": "k"
    }
  },
  "Pittsburgh Steelers": {
    "week 1": {
      "Rank": 0,
      "Player": "Pittsburgh Steelers",
      "SACKS": 1.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 28,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": "35.9%",
      "POS": "def"
    },
    "week 2": {
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
      "ROST": "35.9%",
      "POS": "def"
    }
  },
  "Kyren Williams": {
    "week 1": {
      "Rank": 0,
      "Player": "Kyren Williams",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 16,
      "YDS.1": 76,
      "TD.1": 0,
      "FL": 0,
      "REC": 3,
      "TGT": 3,
      "YDS.2": 16,
      "TD.2": 1,
      "G": 1,
      "FPTS": 18.2,
      "FPTS/G": 18.2,
      "ROST": "25.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Kyren Williams",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 19,
      "YDS.1": 106,
      "TD.1": 0,
      "FL": 1,
      "REC": 1,
      "TGT": 2,
      "YDS.2": -1,
      "TD.2": 0,
      "G": 1,
      "FPTS": 9.5,
      "FPTS/G": 9.5,
      "ROST": "25.6%",
      "POS": "qb"
    }
  },
  "Jared Goff": {
    "week 1": {
      "Rank": 0,
      "Player": "Jared Goff",
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
      "ROST": "23.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Jared Goff",
      "CMP": 23,
      "ATT": 40,
      "PCT": 57.5,
      "YDS": 313,
      "TD": 1,
      "INT": 3,
      "ATT.1": 1,
      "YDS.1": 7,
      "TD.1": 0,
      "FL": 1,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 12.2,
      "FPTS/G": 12.2,
      "ROST": "23.1%",
      "POS": "qb"
    }
  },
  "Washington Commanders": {
    "week 1": {
      "Rank": 0,
      "Player": "Washington Commanders",
      "SACKS": 1.0,
      "FR": 1,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 20,
      "G": 1,
      "FPTS": 4.0,
      "FPTS/G": 4.0,
      "ROST": "23.1%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Washington Commanders",
      "SACKS": 2.0,
      "FR": 1,
      "INT.1": 4,
      "TD.3": 1,
      "BK": 0,
      "SAFE": 0,
      "PA": 31,
      "G": 1,
      "FPTS": 17.0,
      "FPTS/G": 17.0,
      "ROST": "23.1%",
      "POS": "def"
    }
  },
  "Patrick Mahomes II": {
    "week 1": {
      "Rank": 0,
      "Player": "Patrick Mahomes II",
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
      "ROST": "23.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Patrick Mahomes II",
      "CMP": 16,
      "ATT": 25,
      "PCT": 64.0,
      "YDS": 177,
      "TD": 1,
      "INT": 0,
      "ATT.1": 7,
      "YDS.1": 14,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 12.5,
      "FPTS/G": 12.5,
      "ROST": "23.1%",
      "POS": "rb"
    }
  },
  "Mike Evans": {
    "week 1": {
      "Rank": 0,
      "Player": "Mike Evans",
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
      "REC": 7,
      "TGT": 7,
      "YDS.2": 92,
      "TD.2": 1,
      "G": 1,
      "FPTS": 22.2,
      "FPTS/G": 22.2,
      "ROST": "23.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Mike Evans",
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
      "ROST": "23.1%",
      "POS": "qb"
    }
  },
  "Los Angeles Chargers": {
    "week 1": {
      "Rank": 0,
      "Player": "Los Angeles Chargers",
      "SACKS": 3.0,
      "FR": 2,
      "INT.1": 1,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 32,
      "G": 1,
      "FPTS": 8.0,
      "FPTS/G": 8.0,
      "ROST": "23.1%",
      "POS": "def"
    },
    "week 2": {
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
      "ROST": "23.1%",
      "POS": "def"
    }
  },
  "Houston Texans": {
    "week 1": {
      "Rank": 0,
      "Player": "Houston Texans",
      "SACKS": 4.0,
      "FR": 0,
      "INT.1": 4,
      "TD.3": 1,
      "BK": 0,
      "SAFE": 0,
      "PA": 12,
      "G": 1,
      "FPTS": 22.0,
      "FPTS/G": 22.0,
      "ROST": "20.5%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Houston Texans",
      "SACKS": 3.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 1,
      "PA": 23,
      "G": 1,
      "FPTS": 5.0,
      "FPTS/G": 5.0,
      "ROST": "20.5%",
      "POS": "def"
    }
  },
  "Joe Mixon": {
    "week 1": {
      "Rank": 0,
      "Player": "Joe Mixon",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 25,
      "YDS.1": 106,
      "TD.1": 1,
      "FL": 1,
      "REC": 1,
      "TGT": 2,
      "YDS.2": 13,
      "TD.2": 0,
      "G": 1,
      "FPTS": 16.9,
      "FPTS/G": 16.9,
      "ROST": "20.5%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Joe Mixon",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 18,
      "YDS.1": 88,
      "TD.1": 1,
      "FL": 0,
      "REC": 2,
      "TGT": 3,
      "YDS.2": 12,
      "TD.2": 0,
      "G": 1,
      "FPTS": 18.0,
      "FPTS/G": 18.0,
      "ROST": "20.5%",
      "POS": "wr"
    }
  },
  "Ka'imi Fairbairn": {
    "week 1": {
      "Rank": 0,
      "Player": "Ka'imi Fairbairn",
      "FPTS": 13,
      "FPTS/G": 13,
      "ROST": "17.9%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Ka'imi Fairbairn",
      "FPTS": 11,
      "FPTS/G": 11,
      "ROST": "17.9%",
      "POS": "k"
    }
  },
  "Cameron Dicker": {
    "week 1": {
      "Rank": 0,
      "Player": "Cameron Dicker",
      "FPTS": 6,
      "FPTS/G": 6,
      "ROST": "17.9%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Cameron Dicker",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "17.9%",
      "POS": "k"
    }
  },
  "Zane Gonzalez": {
    "week 1": {
      "Rank": 0,
      "Player": "Zane Gonzalez",
      "FPTS": 11,
      "FPTS/G": 11,
      "ROST": "17.9%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Zane Gonzalez",
      "FPTS": 8,
      "FPTS/G": 8,
      "ROST": "17.9%",
      "POS": "k"
    }
  },
  "James Cook": {
    "week 1": {
      "Rank": 0,
      "Player": "James Cook",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 23,
      "YDS.1": 120,
      "TD.1": 1,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 18.0,
      "FPTS/G": 18.0,
      "ROST": "17.9%",
      "POS": "rb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "James Cook",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 11,
      "YDS.1": 36,
      "TD.1": 0,
      "FL": 0,
      "REC": 1,
      "TGT": 1,
      "YDS.2": 7,
      "TD.2": 0,
      "G": 1,
      "FPTS": 5.3,
      "FPTS/G": 5.3,
      "ROST": "17.9%",
      "POS": "qb"
    }
  },
  "Amon-Ra St. Brown": {
    "week 1": {
      "Rank": 0,
      "Player": "Amon-Ra St. Brown",
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
      "ROST": "15.4%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Amon-Ra St. Brown",
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
      "TGT": 10,
      "YDS.2": 137,
      "TD.2": 0,
      "G": 1,
      "FPTS": 21.7,
      "FPTS/G": 21.7,
      "ROST": "15.4%",
      "POS": "qb"
    }
  },
  "J.K. Dobbins": {
    "week 1": {
      "Rank": 0,
      "Player": "J.K. Dobbins",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 9,
      "YDS.1": 26,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.6,
      "FPTS/G": 2.6,
      "ROST": "12.8%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "J.K. Dobbins",
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
      "ROST": "12.8%",
      "POS": "qb"
    }
  },
  "Green Bay Packers": {
    "week 1": {
      "Rank": 0,
      "Player": "Green Bay Packers",
      "SACKS": 2.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 22,
      "G": 1,
      "FPTS": 2.0,
      "FPTS/G": 2.0,
      "ROST": "12.8%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Green Bay Packers",
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
      "ROST": "12.8%",
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
      "REC": 5,
      "TGT": 9,
      "YDS.2": 75,
      "TD.2": 0,
      "G": 1,
      "FPTS": 12.5,
      "FPTS/G": 12.5,
      "ROST": "12.8%",
      "POS": "wr"
    },
    "week 2": {
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
      "ROST": "12.8%",
      "POS": "qb"
    }
  },
  "Kansas City Chiefs": {
    "week 1": {
      "Rank": 0,
      "Player": "Kansas City Chiefs",
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
      "ROST": "12.8%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Kansas City Chiefs",
      "SACKS": 8.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 14,
      "G": 1,
      "FPTS": 9.0,
      "FPTS/G": 9.0,
      "ROST": "12.8%",
      "POS": "def"
    }
  },
  "Los Angeles Rams": {
    "week 1": {
      "Rank": 0,
      "Player": "Los Angeles Rams",
      "SACKS": 9.0,
      "FR": 1,
      "INT.1": 1,
      "TD.3": 1,
      "BK": 0,
      "SAFE": 0,
      "PA": 9,
      "G": 1,
      "FPTS": 23.0,
      "FPTS/G": 23.0,
      "ROST": "10.3%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Los Angeles Rams",
      "SACKS": 7.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 1,
      "PA": 28,
      "G": 1,
      "FPTS": 8.0,
      "FPTS/G": 8.0,
      "ROST": "10.3%",
      "POS": "def"
    }
  },
  "Xavier Worthy": {
    "week 1": {
      "Rank": 0,
      "Player": "Xavier Worthy",
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
      "ROST": "10.3%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Xavier Worthy",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 1,
      "YDS.1": -8,
      "TD.1": 0,
      "FL": 0,
      "REC": 5,
      "TGT": 6,
      "YDS.2": 45,
      "TD.2": 0,
      "G": 1,
      "FPTS": 8.7,
      "FPTS/G": 8.7,
      "ROST": "10.3%",
      "POS": "wr"
    }
  },
  "Cooper Kupp": {
    "week 1": {
      "Rank": 0,
      "Player": "Cooper Kupp",
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
      "REC": 1,
      "TGT": 1,
      "YDS.2": 29,
      "TD.2": 0,
      "G": 1,
      "FPTS": 3.9,
      "FPTS/G": 3.9,
      "ROST": "10.3%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Cooper Kupp",
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
      "YDS.2": 61,
      "TD.2": 0,
      "G": 1,
      "FPTS": 11.1,
      "FPTS/G": 11.1,
      "ROST": "10.3%",
      "POS": "qb"
    }
  },
  "Baker Mayfield": {
    "week 1": {
      "Rank": 0,
      "Player": "Baker Mayfield",
      "CMP": 15,
      "ATT": 18,
      "PCT": 83.3,
      "YDS": 185,
      "TD": 2,
      "INT": 0,
      "ATT.1": 7,
      "YDS.1": 23,
      "TD.1": 0,
      "FL": 1,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 15.7,
      "FPTS/G": 15.7,
      "ROST": "10.3%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Baker Mayfield",
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
      "ROST": "10.3%",
      "POS": "qb"
    }
  },
  "George Pickens": {
    "week 1": {
      "Rank": 0,
      "Player": "George Pickens",
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
      "TGT": 5,
      "YDS.2": 87,
      "TD.2": 1,
      "G": 1,
      "FPTS": 19.7,
      "FPTS/G": 19.7,
      "ROST": "10.3%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "George Pickens",
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
      "ROST": "10.3%",
      "POS": "qb"
    }
  },
  "Chase McLaughlin": {
    "week 1": {
      "Rank": 0,
      "Player": "Chase McLaughlin",
      "FPTS": 10,
      "FPTS/G": 10,
      "ROST": "10.3%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Chase McLaughlin",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "10.3%",
      "POS": "k"
    }
  },
  "Jayden Daniels": {
    "week 1": {
      "Rank": 0,
      "Player": "Jayden Daniels",
      "CMP": 24,
      "ATT": 35,
      "PCT": 68.6,
      "YDS": 268,
      "TD": 2,
      "INT": 0,
      "ATT.1": 13,
      "YDS.1": 36,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 22.3,
      "FPTS/G": 22.3,
      "ROST": "7.7%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Jayden Daniels",
      "CMP": 22,
      "ATT": 31,
      "PCT": 71.0,
      "YDS": 299,
      "TD": 2,
      "INT": 0,
      "ATT.1": 16,
      "YDS.1": 51,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 25.1,
      "FPTS/G": 25.1,
      "ROST": "7.7%",
      "POS": "qb"
    }
  },
  "Tampa Bay Buccaneers": {
    "week 1": {
      "Rank": 0,
      "Player": "Tampa Bay Buccaneers",
      "SACKS": 1.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 23,
      "G": 1,
      "FPTS": 1.0,
      "FPTS/G": 1.0,
      "ROST": "7.7%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Tampa Bay Buccaneers",
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
      "ROST": "7.7%",
      "POS": "def"
    }
  },
  "Jalen Hurts": {
    "week 1": {
      "Rank": 0,
      "Player": "Jalen Hurts",
      "CMP": 13,
      "ATT": 21,
      "PCT": 61.9,
      "YDS": 131,
      "TD": 2,
      "INT": 0,
      "ATT.1": 6,
      "YDS.1": 36,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 16.8,
      "FPTS/G": 16.8,
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Jalen Hurts",
      "CMP": 15,
      "ATT": 20,
      "PCT": 75.0,
      "YDS": 128,
      "TD": 0,
      "INT": 0,
      "ATT.1": 7,
      "YDS.1": 70,
      "TD.1": 1,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 18.1,
      "FPTS/G": 18.1,
      "ROST": "5.1%",
      "POS": "qb"
    }
  },
  "Kareem Hunt": {
    "week 1": {
      "Rank": 0,
      "Player": "Kareem Hunt",
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
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Kareem Hunt",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 8,
      "YDS.1": 44,
      "TD.1": 1,
      "FL": 0,
      "REC": 1,
      "TGT": 1,
      "YDS.2": 2,
      "TD.2": 0,
      "G": 1,
      "FPTS": 11.6,
      "FPTS/G": 11.6,
      "ROST": "5.1%",
      "POS": "wr"
    }
  },
  "Najee Harris": {
    "week 1": {
      "Rank": 0,
      "Player": "Najee Harris",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 6,
      "YDS.1": 17,
      "TD.1": 0,
      "FL": 0,
      "REC": 3,
      "TGT": 3,
      "YDS.2": 41,
      "TD.2": 0,
      "G": 1,
      "FPTS": 8.8,
      "FPTS/G": 8.8,
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Najee Harris",
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
      "ROST": "5.1%",
      "POS": "qb"
    }
  },
  "Joshua Karty": {
    "week 1": {
      "Rank": 0,
      "Player": "Joshua Karty",
      "FPTS": 10,
      "FPTS/G": 10,
      "ROST": "5.1%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Joshua Karty",
      "FPTS": 8,
      "FPTS/G": 8,
      "ROST": "5.1%",
      "POS": "k"
    }
  },
  "Wil Reichard": {
    "week 1": {
      "Rank": 0,
      "Player": "Wil Reichard",
      "FPTS": 3,
      "FPTS/G": 3,
      "ROST": "5.1%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Wil Reichard",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "5.1%",
      "POS": "k"
    }
  },
  "Isiah Pacheco": {
    "week 1": {
      "Rank": 0,
      "Player": "Isiah Pacheco",
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
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Isiah Pacheco",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 5,
      "YDS.1": 18,
      "TD.1": 0,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 1.8,
      "FPTS/G": 1.8,
      "ROST": "5.1%",
      "POS": "rb"
    }
  },
  "Minnesota Vikings": {
    "week 1": {
      "Rank": 0,
      "Player": "Minnesota Vikings",
      "SACKS": 2.0,
      "FR": 0,
      "INT.1": 0,
      "TD.3": 0,
      "BK": 0,
      "SAFE": 0,
      "PA": 27,
      "G": 1,
      "FPTS": 2.0,
      "FPTS/G": 2.0,
      "ROST": "5.1%",
      "POS": "def"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Minnesota Vikings",
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
      "ROST": "5.1%",
      "POS": "def"
    }
  },
  "Brian Robinson Jr.": {
    "week 1": {
      "Rank": 0,
      "Player": "Brian Robinson Jr.",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 10,
      "YDS.1": 16,
      "TD.1": 0,
      "FL": 0,
      "REC": 4,
      "TGT": 5,
      "YDS.2": 22,
      "TD.2": 0,
      "G": 1,
      "FPTS": 7.8,
      "FPTS/G": 7.8,
      "ROST": "5.1%",
      "POS": "rb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Brian Robinson Jr.",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 15,
      "YDS.1": 77,
      "TD.1": 2,
      "FL": 0,
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 19.7,
      "FPTS/G": 19.7,
      "ROST": "5.1%",
      "POS": "rb"
    }
  },
  "Austin Ekeler": {
    "week 1": {
      "Rank": 0,
      "Player": "Austin Ekeler",
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
      "REC": 3,
      "TGT": 4,
      "YDS.2": 26,
      "TD.2": 0,
      "G": 1,
      "FPTS": 8.3,
      "FPTS/G": 8.3,
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Austin Ekeler",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 6,
      "YDS.1": 47,
      "TD.1": 0,
      "FL": 0,
      "REC": 4,
      "TGT": 4,
      "YDS.2": 41,
      "TD.2": 0,
      "G": 1,
      "FPTS": 12.8,
      "FPTS/G": 12.8,
      "ROST": "5.1%",
      "POS": "qb"
    }
  },
  "Jordan Addison": {
    "week 1": {
      "Rank": 0,
      "Player": "Jordan Addison",
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
      "TGT": 8,
      "YDS.2": 29,
      "TD.2": 0,
      "G": 1,
      "FPTS": 5.9,
      "FPTS/G": 5.9,
      "ROST": "5.1%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Jordan Addison",
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
      "ROST": "5.1%",
      "POS": "qb"
    }
  },
  "Aaron Jones": {
    "week 1": {
      "Rank": 0,
      "Player": "Aaron Jones",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 13,
      "YDS.1": 48,
      "TD.1": 0,
      "FL": 0,
      "REC": 3,
      "TGT": 6,
      "YDS.2": 12,
      "TD.2": 0,
      "G": 1,
      "FPTS": 9.0,
      "FPTS/G": 9.0,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Aaron Jones",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Diontae Johnson": {
    "week 1": {
      "Rank": 0,
      "Player": "Diontae Johnson",
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
      "REC": 1,
      "TGT": 1,
      "YDS.2": 12,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.2,
      "FPTS/G": 2.2,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Diontae Johnson",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Tucker Kraft": {
    "week 1": {
      "Rank": 0,
      "Player": "Tucker Kraft",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 2,
      "YDS.1": 10,
      "TD.1": 0,
      "FL": 0,
      "REC": 5,
      "TGT": 5,
      "YDS.2": 26,
      "TD.2": 0,
      "G": 1,
      "FPTS": 8.6,
      "FPTS/G": 8.6,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Tucker Kraft",
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
      "ROST": "2.6%",
      "POS": "qb"
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
      "REC": 2,
      "TGT": 2,
      "YDS.2": 13,
      "TD.2": 0,
      "G": 1,
      "FPTS": 3.3,
      "FPTS/G": 3.3,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
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
      "REC": 0,
      "TGT": 0,
      "YDS.2": 0,
      "TD.2": 0,
      "G": 1,
      "FPTS": 0.0,
      "FPTS/G": 0.0,
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Javonte Williams": {
    "week 1": {
      "Rank": 0,
      "Player": "Javonte Williams",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 7,
      "YDS.1": 29,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 14,
      "TD.2": 0,
      "G": 1,
      "FPTS": 6.3,
      "FPTS/G": 6.3,
      "ROST": "2.6%",
      "POS": "wr"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Javonte Williams",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Amari Cooper": {
    "week 1": {
      "Rank": 0,
      "Player": "Amari Cooper",
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
      "TGT": 3,
      "YDS.2": 8,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.8,
      "FPTS/G": 2.8,
      "ROST": "2.6%",
      "POS": "wr"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Amari Cooper",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Harrison Butker": {
    "week 1": {
      "Rank": 0,
      "Player": "Harrison Butker",
      "FPTS": 0,
      "FPTS/G": 0,
      "ROST": "2.6%",
      "POS": "k"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Harrison Butker",
      "FPTS": 11,
      "FPTS/G": 11,
      "ROST": "2.6%",
      "POS": "k"
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
      "REC": 1,
      "TGT": 3,
      "YDS.2": 10,
      "TD.2": 0,
      "G": 1,
      "FPTS": 2.0,
      "FPTS/G": 2.0,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
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
      "REC": 2,
      "TGT": 7,
      "YDS.2": 14,
      "TD.2": 0,
      "G": 1,
      "FPTS": 3.4,
      "FPTS/G": 3.4,
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "JuJu Smith-Schuster": {
    "week 1": {
      "Rank": 0,
      "Player": "JuJu Smith-Schuster",
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
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "JuJu Smith-Schuster",
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
      "ROST": "2.6%",
      "POS": "qb"
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
      "REC": 4,
      "TGT": 4,
      "YDS.2": 55,
      "TD.2": 0,
      "G": 1,
      "FPTS": 9.5,
      "FPTS/G": 9.5,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
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
      "REC": 4,
      "TGT": 4,
      "YDS.2": 21,
      "TD.2": 0,
      "G": 1,
      "FPTS": 6.1,
      "FPTS/G": 6.1,
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "DeAndre Hopkins": {
    "week 1": {
      "Rank": 0,
      "Player": "DeAndre Hopkins",
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
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "DeAndre Hopkins",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  },
  "Rachaad White": {
    "week 1": {
      "Rank": 0,
      "Player": "Rachaad White",
      "CMP": 0,
      "ATT": 0,
      "PCT": 0,
      "YDS": 0,
      "TD": 0,
      "INT": 0,
      "ATT.1": 1,
      "YDS.1": 1,
      "TD.1": 0,
      "FL": 0,
      "REC": 2,
      "TGT": 2,
      "YDS.2": 14,
      "TD.2": 0,
      "G": 1,
      "FPTS": 3.5,
      "FPTS/G": 3.5,
      "ROST": "2.6%",
      "POS": "qb"
    },
    "week 2": {
      "Rank": 0,
      "Player": "Rachaad White",
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
      "ROST": "2.6%",
      "POS": "qb"
    }
  }
};;

const fantasy_team_submissions = [
  {
      "name":"HolySchlitz!",
      "qb1":"Josh Allen",
      "qb2":"Jalen Hurts",
      "rb1":"Derrick Henry",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Bucky Irving",
      "rb4":"Josh Jacobs",
      "wr1":"Travis Kelce",
      "wr2":"Terry McLaurin",
      "wr3":"Ladd McConkey",
      "wr4":"Justin Jefferson",
      "k1":"Ka'imi Fairbairn",
      "k2":"Chris Boswell",
      "def1":"Los Angeles Rams",
      "def2":"Denver Broncos",
      "tiebreak":48
  },
  {
      "name":"HolySchlitz!!",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Saquon Barkley",
      "rb2":"Derrick Henry",
      "rb3":"Bucky Irving",
      "rb4":"Josh Jacobs",
      "wr1":"Nico Collins",
      "wr2":"Xavier Worthy",
      "wr3":"Puka Nacua",
      "wr4":"Justin Jefferson",
      "k1":"Chris Boswell",
      "k2":"Cameron Dicker",
      "def1":"Washington Commanders",
      "def2":"Denver Broncos",
      "tiebreak":65
  },
  {
      "name":"Yinz Stillers",
      "qb1":"Josh Allen",
      "qb2":"Patrick Mahomes II",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Josh Jacobs",
      "rb3":"Derrick Henry",
      "rb4":"Saquon Barkley",
      "wr1":"Justin Jefferson",
      "wr2":"Mike Evans",
      "wr3":"Cooper Kupp",
      "wr4":"Terry McLaurin",
      "k1":"Chris Boswell",
      "k2":"Wil Lutz",
      "def1":"Houston Texans",
      "def2":"Los Angeles Chargers",
      "tiebreak":57
  },
  {
      "name":"RougeHeros",
      "qb1":"Lamar Jackson",
      "qb2":"Josh Allen",
      "rb1":"Saquon Barkley",
      "rb2":"Aaron Jones",
      "rb3":"Kareem Hunt",
      "rb4":"Najee Harris",
      "wr1":"Amon-Ra St. Brown",
      "wr2":"Diontae Johnson",
      "wr3":"Tucker Kraft",
      "wr4":"Mike Evans",
      "k1":"Joshua Karty",
      "k2":"Zane Gonzalez",
      "def1":"Los Angeles Chargers",
      "def2":"Denver Broncos",
      "tiebreak":46
  },
  {
      "name":"M KIZ",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Bucky Irving",
      "rb2":"Jahmyr Gibbs",
      "rb3":"J.K. Dobbins",
      "rb4":"Saquon Barkley",
      "wr1":"Nico Collins",
      "wr2":"Justin Jefferson",
      "wr3":"Xavier Worthy",
      "wr4":"Terry McLaurin",
      "k1":"Wil Lutz",
      "k2":"Chris Boswell",
      "def1":"Los Angeles Rams",
      "def2":"Green Bay Packers",
      "tiebreak":58
  },
  {
      "name":"E KIZ",
      "qb1":"Josh Allen",
      "qb2":"Patrick Mahomes II",
      "rb1":"Derrick Henry",
      "rb2":"Saquon Barkley",
      "rb3":"Kyren Williams",
      "rb4":"J.K. Dobbins",
      "wr1":"Amon-Ra St. Brown",
      "wr2":"Justin Jefferson",
      "wr3":"Mike Evans",
      "wr4":"Terry McLaurin",
      "k1":"Chris Boswell",
      "k2":"Wil Lutz",
      "def1":"Green Bay Packers",
      "def2":"Houston Texans",
      "tiebreak":54
  },
  {
      "name":"KEL-C",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Bucky Irving",
      "rb3":"Jahmyr Gibbs",
      "rb4":"Josh Jacobs",
      "wr1":"Puka Nacua",
      "wr2":"Ladd McConkey",
      "wr3":"Justin Jefferson",
      "wr4":"Travis Kelce",
      "k1":"Wil Lutz",
      "k2":"Ka'imi Fairbairn",
      "def1":"Washington Commanders",
      "def2":"Pittsburgh Steelers",
      "tiebreak":47
  },
  {
      "name":"Superbowl Shufflers",
      "qb1":"Josh Allen",
      "qb2":"Baker Mayfield",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Saquon Barkley",
      "rb3":"Derrick Henry",
      "rb4":"Joe Mixon",
      "wr1":"Travis Kelce",
      "wr2":"Puka Nacua",
      "wr3":"Ladd McConkey",
      "wr4":"Romeo Doubs",
      "k1":"Wil Lutz",
      "k2":"Wil Reichard",
      "def1":"Pittsburgh Steelers",
      "def2":"Washington Commanders",
      "tiebreak":37
  },
  {
      "name":"Brutus1",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Joe Mixon",
      "rb4":"Isiah Pacheco",
      "wr1":"Puka Nacua",
      "wr2":"Mike Evans",
      "wr3":"Justin Jefferson",
      "wr4":"Ladd McConkey",
      "k1":"Brandon McManus",
      "k2":"Chris Boswell",
      "def1":"Washington Commanders",
      "def2":"Denver Broncos",
      "tiebreak":55
  },
  {
      "name":"Stallions",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Saquon Barkley",
      "rb2":"Kyren Williams",
      "rb3":"Derrick Henry",
      "rb4":"Josh Jacobs",
      "wr1":"Mike Evans",
      "wr2":"Justin Jefferson",
      "wr3":"Courtland Sutton",
      "wr4":"Terry McLaurin",
      "k1":"Ka'imi Fairbairn",
      "k2":"Chris Boswell",
      "def1":"Kansas City Chiefs",
      "def2":"Los Angeles Chargers",
      "tiebreak":50
  },
  {
      "name":"Dina's Team",
      "qb1":"Patrick Mahomes II",
      "qb2":"Josh Allen",
      "rb1":"Derrick Henry",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Saquon Barkley",
      "rb4":"J.K. Dobbins",
      "wr1":"Justin Jefferson",
      "wr2":"Courtland Sutton",
      "wr3":"Terry McLaurin",
      "wr4":"Mike Evans",
      "k1":"Ka'imi Fairbairn",
      "k2":"Brandon McManus",
      "def1":"Pittsburgh Steelers",
      "def2":"Los Angeles Rams",
      "tiebreak":47
  },
  {
      "name":"Berkeley Bulldogs",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Saquon Barkley",
      "rb3":"Bucky Irving",
      "rb4":"J.K. Dobbins",
      "wr1":"Puka Nacua",
      "wr2":"Justin Jefferson",
      "wr3":"Nico Collins",
      "wr4":"Travis Kelce",
      "k1":"Zane Gonzalez",
      "k2":"Brandon McManus",
      "def1":"Pittsburgh Steelers",
      "def2":"Denver Broncos",
      "tiebreak":51
  },
  {
      "name":"Master Baker",
      "qb1":"Baker Mayfield",
      "qb2":"Josh Allen",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Saquon Barkley",
      "rb3":"Derrick Henry",
      "rb4":"Kyren Williams",
      "wr1":"Travis Kelce",
      "wr2":"Justin Jefferson",
      "wr3":"Nico Collins",
      "wr4":"Ladd McConkey",
      "k1":"Zane Gonzalez",
      "k2":"Brandon McManus",
      "def1":"Denver Broncos",
      "def2":"Pittsburgh Steelers",
      "tiebreak":52
  },
  {
      "name":"Rookie Year",
      "qb1":"Jayden Daniels",
      "qb2":"Josh Allen",
      "rb1":"Derrick Henry",
      "rb2":"Joe Mixon",
      "rb3":"Jahmyr Gibbs",
      "rb4":"Saquon Barkley",
      "wr1":"Mike Evans",
      "wr2":"Xavier Worthy",
      "wr3":"Justin Jefferson",
      "wr4":"Puka Nacua",
      "k1":"Brandon McManus",
      "k2":"Cameron Dicker",
      "def1":"Denver Broncos",
      "def2":"Pittsburgh Steelers",
      "tiebreak":49
  },
  {
      "name":"WhoaNelly33",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Bucky Irving",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Saquon Barkley",
      "rb4":"Kyren Williams",
      "wr1":"Justin Jefferson",
      "wr2":"Travis Kelce",
      "wr3":"Ladd McConkey",
      "wr4":"Terry McLaurin",
      "k1":"Brandon McManus",
      "k2":"Ka'imi Fairbairn",
      "def1":"Denver Broncos",
      "def2":"Pittsburgh Steelers",
      "tiebreak":49
  },
  {
      "name":"Southpaws",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Javonte Williams",
      "rb3":"Jahmyr Gibbs",
      "rb4":"Bucky Irving",
      "wr1":"Travis Kelce",
      "wr2":"Puka Nacua",
      "wr3":"Justin Jefferson",
      "wr4":"Nico Collins",
      "k1":"Brandon McManus",
      "k2":"Chris Boswell",
      "def1":"Los Angeles Chargers",
      "def2":"Washington Commanders",
      "tiebreak":57
  },
  {
      "name":"Hawks",
      "qb1":"Lamar Jackson",
      "qb2":"Patrick Mahomes II",
      "rb1":"James Cook",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Saquon Barkley",
      "rb4":"Josh Jacobs",
      "wr1":"Mike Evans",
      "wr2":"Puka Nacua",
      "wr3":"Justin Jefferson",
      "wr4":"Terry McLaurin",
      "k1":"Chris Boswell",
      "k2":"Wil Lutz",
      "def1":"Houston Texans",
      "def2":"Los Angeles Chargers",
      "tiebreak":58
  },
  {
      "name":"SundayBloodySunday",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Derrick Henry",
      "rb2":"Saquon Barkley",
      "rb3":"Isiah Pacheco",
      "rb4":"Bucky Irving",
      "wr1":"Justin Jefferson",
      "wr2":"Terry McLaurin",
      "wr3":"Ladd McConkey",
      "wr4":"Puka Nacua",
      "k1":"Chris Boswell",
      "k2":"Brandon McManus",
      "def1":"Houston Texans",
      "def2":"Denver Broncos",
      "tiebreak":45
  },
  {
      "name":"Big Winner ",
      "qb1":"Lamar Jackson",
      "qb2":"Josh Allen",
      "rb1":"Saquon Barkley",
      "rb2":"Bucky Irving",
      "rb3":"Jahmyr Gibbs",
      "rb4":"Josh Jacobs",
      "wr1":"Puka Nacua",
      "wr2":"Ladd McConkey",
      "wr3":"Xavier Worthy",
      "wr4":"Nico Collins",
      "k1":"Zane Gonzalez",
      "k2":"Chris Boswell",
      "def1":"Denver Broncos",
      "def2":"Minnesota Vikings",
      "tiebreak":51
  },
  {
      "name":"T &T Skokie",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Derrick Henry",
      "rb2":"Saquon Barkley",
      "rb3":"J.K. Dobbins",
      "rb4":"Josh Jacobs",
      "wr1":"Puka Nacua",
      "wr2":"Nico Collins",
      "wr3":"Justin Jefferson",
      "wr4":"Travis Kelce",
      "k1":"Wil Lutz",
      "k2":"Chris Boswell",
      "def1":"Tampa Bay Buccaneers",
      "def2":"Washington Commanders",
      "tiebreak":49
  },
  {
      "name":"TB Skokie ",
      "qb1":"Patrick Mahomes II",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Bucky Irving",
      "rb3":"James Cook",
      "rb4":"Brian Robinson Jr.",
      "wr1":"Amon-Ra St. Brown",
      "wr2":"Justin Jefferson",
      "wr3":"Cooper Kupp",
      "wr4":"Ladd McConkey",
      "k1":"Ka'imi Fairbairn",
      "k2":"Chris Boswell",
      "def1":"Denver Broncos",
      "def2":"Green Bay Packers",
      "tiebreak":50
  },
  {
      "name":"Mac's Team",
      "qb1":"Jared Goff",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Kareem Hunt",
      "rb3":"Joe Mixon",
      "rb4":"Bucky Irving",
      "wr1":"Justin Jefferson",
      "wr2":"Cooper Kupp",
      "wr3":"George Pickens",
      "wr4":"Amari Cooper",
      "k1":"Brandon McManus",
      "k2":"Wil Lutz",
      "def1":"Washington Commanders",
      "def2":"Los Angeles Chargers",
      "tiebreak":48
  },
  {
      "name":"Pathetic Team",
      "qb1":"Josh Allen",
      "qb2":"Patrick Mahomes II",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Derrick Henry",
      "rb3":"Josh Jacobs",
      "rb4":"Saquon Barkley",
      "wr1":"Courtland Sutton",
      "wr2":"Justin Jefferson",
      "wr3":"Puka Nacua",
      "wr4":"Terry McLaurin",
      "k1":"Chase McLaughlin",
      "k2":"Cameron Dicker",
      "def1":"Houston Texans",
      "def2":"Pittsburgh Steelers",
      "tiebreak":55
  },
  {
      "name":"Pathetic Team 2",
      "qb1":"Josh Allen",
      "qb2":"Jayden Daniels",
      "rb1":"Saquon Barkley",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Derrick Henry",
      "rb4":"Kyren Williams",
      "wr1":"Justin Jefferson",
      "wr2":"Nico Collins",
      "wr3":"George Pickens",
      "wr4":"Courtland Sutton",
      "k1":"Chase McLaughlin",
      "k2":"Cameron Dicker",
      "def1":"Kansas City Chiefs",
      "def2":"Green Bay Packers",
      "tiebreak":52
  },
  {
      "name":"Suck my Ditka",
      "qb1":"Josh Allen",
      "qb2":"Patrick Mahomes II",
      "rb1":"Derrick Henry",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Saquon Barkley",
      "rb4":"Bucky Irving",
      "wr1":"Ladd McConkey",
      "wr2":"Justin Jefferson",
      "wr3":"Puka Nacua",
      "wr4":"Terry McLaurin",
      "k1":"Wil Lutz",
      "k2":"Brandon McManus",
      "def1":"Pittsburgh Steelers",
      "def2":"Houston Texans",
      "tiebreak":66
  },
  {
      "name":"The Bears will mess it up again",
      "qb1":"Jared Goff",
      "qb2":"Lamar Jackson",
      "rb1":"James Cook",
      "rb2":"Saquon Barkley",
      "rb3":"Kyren Williams",
      "rb4":"Joe Mixon",
      "wr1":"Mike Evans",
      "wr2":"Courtland Sutton",
      "wr3":"Justin Jefferson",
      "wr4":"Terry McLaurin",
      "k1":"Harrison Butker",
      "k2":"Brandon McManus",
      "def1":"Los Angeles Chargers",
      "def2":"Pittsburgh Steelers",
      "tiebreak":59
  },
  {
      "name":"Little Metro\u2019s team",
      "qb1":"Jayden Daniels",
      "qb2":"Lamar Jackson",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Bucky Irving",
      "rb3":"James Cook",
      "rb4":"Kyren Williams",
      "wr1":"A.J. Brown",
      "wr2":"Travis Kelce",
      "wr3":"Nico Collins",
      "wr4":"Ladd McConkey",
      "k1":"Chris Boswell",
      "k2":"Wil Reichard",
      "def1":"Green Bay Packers",
      "def2":"Denver Broncos",
      "tiebreak":55
  },
  {
      "name":"Lemonheads",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Josh Jacobs",
      "rb3":"Kyren Williams",
      "rb4":"Saquon Barkley",
      "wr1":"Justin Jefferson",
      "wr2":"Travis Kelce",
      "wr3":"Nico Collins",
      "wr4":"Ladd McConkey",
      "k1":"Chris Boswell",
      "k2":"Wil Lutz",
      "def1":"Tampa Bay Buccaneers",
      "def2":"Washington Commanders",
      "tiebreak":58
  },
  {
      "name":"CraftingRunning",
      "qb1":"Josh Allen",
      "qb2":"Baker Mayfield",
      "rb1":"Austin Ekeler",
      "rb2":"Derrick Henry",
      "rb3":"Joe Mixon",
      "rb4":"Najee Harris",
      "wr1":"JuJu Smith-Schuster",
      "wr2":"Amon-Ra St. Brown",
      "wr3":"DeVonta Smith",
      "wr4":"Jordan Addison",
      "k1":"Wil Lutz",
      "k2":"Brandon McManus",
      "def1":"Los Angeles Chargers",
      "def2":"Los Angeles Rams",
      "tiebreak":65
  },
  {
      "name":"Hitmen (M Dierbach)",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Derrick Henry",
      "rb2":"Saquon Barkley",
      "rb3":"Bucky Irving",
      "rb4":"Josh Jacobs",
      "wr1":"Justin Jefferson",
      "wr2":"Terry McLaurin",
      "wr3":"Travis Kelce",
      "wr4":"Ladd McConkey",
      "k1":"Ka'imi Fairbairn",
      "k2":"Joshua Karty",
      "def1":"Denver Broncos",
      "def2":"Pittsburgh Steelers",
      "tiebreak":45
  },
  {
      "name":"Hitmen 2 (M Dierbach)",
      "qb1":"Lamar Jackson",
      "qb2":"Josh Allen",
      "rb1":"Saquon Barkley",
      "rb2":"Bucky Irving",
      "rb3":"Kyren Williams",
      "rb4":"Jahmyr Gibbs",
      "wr1":"Terry McLaurin",
      "wr2":"Justin Jefferson",
      "wr3":"Travis Kelce",
      "wr4":"Nico Collins",
      "k1":"Cameron Dicker",
      "k2":"Brandon McManus",
      "def1":"Denver Broncos",
      "def2":"Pittsburgh Steelers",
      "tiebreak":38
  },
  {
      "name":"BNelly",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Kyren Williams",
      "rb4":"Bucky Irving",
      "wr1":"Justin Jefferson",
      "wr2":"Travis Kelce",
      "wr3":"Terry McLaurin",
      "wr4":"Ladd McConkey",
      "k1":"Chris Boswell",
      "k2":"Brandon McManus",
      "def1":"Denver Broncos",
      "def2":"Houston Texans",
      "tiebreak":55
  },
  {
      "name":"Cdierbach",
      "qb1":"Patrick Mahomes II",
      "qb2":"Josh Allen",
      "rb1":"Josh Jacobs",
      "rb2":"Derrick Henry",
      "rb3":"Saquon Barkley",
      "rb4":"Jahmyr Gibbs",
      "wr1":"George Pickens",
      "wr2":"Cooper Kupp",
      "wr3":"Nico Collins",
      "wr4":"Terry McLaurin",
      "k1":"Cameron Dicker",
      "k2":"Chase McLaughlin",
      "def1":"Denver Broncos",
      "def2":"Minnesota Vikings",
      "tiebreak":45
  },
  {
      "name":"Pukkake",
      "qb1":"Josh Allen",
      "qb2":"Lamar Jackson",
      "rb1":"Saquon Barkley",
      "rb2":"Jahmyr Gibbs",
      "rb3":"Josh Jacobs",
      "rb4":"Bucky Irving",
      "wr1":"Puka Nacua",
      "wr2":"Nico Collins",
      "wr3":"Ladd McConkey",
      "wr4":"Justin Jefferson",
      "k1":"Chris Boswell",
      "k2":"Zane Gonzalez",
      "def1":"Kansas City Chiefs",
      "def2":"Denver Broncos",
      "tiebreak":46
  },
  {
      "name":"Nash Dawgs",
      "qb1":"Lamar Jackson",
      "qb2":"Jalen Hurts",
      "rb1":"Brian Robinson Jr.",
      "rb2":"Josh Jacobs",
      "rb3":"James Cook",
      "rb4":"Joe Mixon",
      "wr1":"Ladd McConkey",
      "wr2":"Amon-Ra St. Brown",
      "wr3":"Justin Jefferson",
      "wr4":"Puka Nacua",
      "k1":"Wil Lutz",
      "k2":"Chris Boswell",
      "def1":"Kansas City Chiefs",
      "def2":"Tampa Bay Buccaneers",
      "tiebreak":56
  },
  {
      "name":"Nash Dawgs 2",
      "qb1":"Lamar Jackson",
      "qb2":"Patrick Mahomes II",
      "rb1":"Saquon Barkley",
      "rb2":"Bucky Irving",
      "rb3":"James Cook",
      "rb4":"Josh Jacobs",
      "wr1":"Justin Jefferson",
      "wr2":"Nico Collins",
      "wr3":"Puka Nacua",
      "wr4":"Amon-Ra St. Brown",
      "k1":"Cameron Dicker",
      "k2":"Zane Gonzalez",
      "def1":"Pittsburgh Steelers",
      "def2":"Denver Broncos",
      "tiebreak":64
  },
  {
      "name":"Bakers Dozen",
      "qb1":"Josh Allen",
      "qb2":"Baker Mayfield",
      "rb1":"Jahmyr Gibbs",
      "rb2":"Derrick Henry",
      "rb3":"Saquon Barkley",
      "rb4":"Josh Jacobs",
      "wr1":"Justin Jefferson",
      "wr2":"Ladd McConkey",
      "wr3":"Travis Kelce",
      "wr4":"Puka Nacua",
      "k1":"Chris Boswell",
      "k2":"Zane Gonzalez",
      "def1":"Houston Texans",
      "def2":"Denver Broncos",
      "tiebreak":52
  },
  {
      "name":"Mason's Team",
      "qb1":"Jared Goff",
      "qb2":"Lamar Jackson",
      "rb1":"James Cook",
      "rb2":"Saquon Barkley",
      "rb3":"Joe Mixon",
      "rb4":"Josh Jacobs",
      "wr1":"Puka Nacua",
      "wr2":"Justin Jefferson",
      "wr3":"Ladd McConkey",
      "wr4":"DeAndre Hopkins",
      "k1":"Chase McLaughlin",
      "k2":"Wil Lutz",
      "def1":"Pittsburgh Steelers",
      "def2":"Washington Commanders",
      "tiebreak":52
  },
  {
      "name":"Southpaws2",
      "qb1":"Josh Allen",
      "qb2":"Jared Goff",
      "rb1":"Derrick Henry",
      "rb2":"Rachaad White",
      "rb3":"Saquon Barkley",
      "rb4":"Austin Ekeler",
      "wr1":"Jordan Addison",
      "wr2":"Nico Collins",
      "wr3":"Puka Nacua",
      "wr4":"George Pickens",
      "k1":"Wil Lutz",
      "k2":"Brandon McManus",
      "def1":"Los Angeles Chargers",
      "def2":"Kansas City Chiefs",
      "tiebreak":57
  },

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
          highestPossibleDiv.innerHTML = `
              <h3>Highest Possible Score (Wildcard)</h3>
              <div class="highest-possible-content">
                  <p>QB1: Josh Allen</p>
                  <p>QB2: Jayden Daniels</p>
                  <p>RB1: Derrick Henry</p>
                  <p>RB2: Josh Jacobs</p>
                  <p>RB3: Bucky Irving</p>
                  <p>RB4: Saquon Barkley</p>
                  <p>WR1: Ladd McConkey</p>
                  <p>WR2: Nico Collins</p>
                  <p>WR3: George Pickens</p>
                  <p>WR4: Courtland Sutton</p>
                  <p>K1: Wil Reichard</p>
                  <p>K2: Jake Bates</p>
                  <p>DEF1: Los Angeles Rams</p>
                  <p>DEF2: Kansas City Chiefs</p>
                  <p>Total: 246.2</p>
              </div>
          `;

          // Insert after the leaderboard container
          const leaderboardContainer = document.querySelector('.leaderboard-container');
          leaderboardContainer.parentNode.insertBefore(highestPossibleDiv, leaderboardContainer.nextSibling);
      }
      
      function createTeamDetailCard(teamScore, index) {
          const playerScoresContainer = document.getElementById("playerScoresContainer");
          
          // Calculate position in grid
          const column = index % 2; // 0 for first column, 1 for second
          const row = Math.floor(index / 2);
          
          const teamCard = document.createElement("div");
          // Add an ID to the team card for scrolling
          teamCard.id = `team-detail-${teamScore.name.replace(/\s+/g, '-')}`;
          teamCard.className = "team-card";
          teamCard.style.gridColumn = column + 1;
          teamCard.style.gridRow = row + 1;
          
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
              
              const team = allPlayers.find(p => p.name === player)?.team || 'FA';
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
          return Math.max(5, Math.min(itemsPerPage, mainTableRows.length));
      }

function calculateOwnershipStats() {
    const ownershipTableBody = document.getElementById("ownershipTableBody");
    ownershipTableBody.innerHTML = "";

    const validTeams = fantasy_team_submissions.filter(team => 
        team.name !== "tbfootballplayer" && team.name !== "asd"
    );
    const totalTeams = validTeams.length;

    const playerCounts = new Map();

    validTeams.forEach(team => {
        const players = Object.entries(team)
            .filter(([key]) => key !== "name" && key !== "tiebreak")
            .map(([_, value]) => value);

        new Set(players).forEach(player => {
            playerCounts.set(player, (playerCounts.get(player) || 0) + 1);
        });
    });

    // Let's log what we're working with
    console.log("Player Counts:", playerCounts);

    ownershipStatsData = Array.from(playerCounts.entries())
        .map(([player, count]) => ({
            player: player,  // Keep original for now
            percentage: (count / totalTeams) * 100
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
        const team = allPlayers.find(p => p.name === player)?.team || 'FA';
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

    // Create highest possible team separately
    const highestPossibleTeam = {
        "name": "Highest Possible Score",
        "qb1": "Josh Allen",
        "qb2": "Jayden Daniels",
        "rb1": "Derrick Henry",
        "rb2": "Josh Jacobs",
        "rb3": "Bucky Irving",
        "rb4": "Saquon Barkley",
        "wr1": "Ladd McConkey",
        "wr2": "Nico Collins",
        "wr3": "George Pickens",
        "wr4": "Courtland Sutton",
        "k1": "Harrison Butker",
        "k2": "Jake Bates",
        "def1": "Minnesota Vikings",
        "def2": "Los Angeles Rams",
        totalPoints: calculateTeamPoints({
            "name": "Highest Possible Score",
            "qb1": "Josh Allen",
            "qb2": "Jayden Daniels",
            "rb1": "Derrick Henry",
            "rb2": "Josh Jacobs",
            "rb3": "Bucky Irving",
            "rb4": "Saquon Barkley",
            "wr1": "Ladd McConkey",
            "wr2": "Nico Collins",
            "wr3": "George Pickens",
            "wr4": "Courtland Sutton",
            "k1": "Harrison Butker",
            "k2": "Jake Bates",
            "def1": "Minnesota Vikings",
            "def2": "Los Angeles Rams"
        })
    };

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

