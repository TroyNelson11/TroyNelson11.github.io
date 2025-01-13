
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
              
              row.innerHTML = `
                  <td>${player}</td>
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
          const itemsPerPage = Math.floor(mainTableHeight / mainRowHeight) - 5;
          
          // Ensure we return a reasonable number (minimum 5, maximum mainTableRows.length)
          return Math.max(5, Math.min(itemsPerPage, mainTableRows.length));
      }

function calculateOwnershipStats() {
  const ownershipTableBody = document.getElementById("ownershipTableBody");
  ownershipTableBody.innerHTML = "";

  // Get total number of teams (excluding test teams)
  const validTeams = fantasy_team_submissions.filter(team => 
      team.name !== "tbfootballplayer" && team.name !== "asd"
  );
  const totalTeams = validTeams.length;

  // Create a map to count player occurrences
  const playerCounts = new Map();

  validTeams.forEach(team => {
      const players = Object.entries(team)
          .filter(([key]) => key !== "name" && key !== "tiebreak")
          .map(([_, value]) => value);

      new Set(players).forEach(player => {
          playerCounts.set(player, (playerCounts.get(player) || 0) + 1);
      });
  });

  ownershipStatsData = Array.from(playerCounts.entries())
      .map(([player, count]) => ({
          player,
          percentage: (count / totalTeams) * 100
      }))
      .sort((a, b) => b.percentage - a.percentage);

  // Calculate items per page after data is loaded
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
      const row = document.createElement("tr");
      row.className = tracker % 2 === 0 ? 'bg-inherit' : 'bg-gray-100';
              tracker++;
      row.innerHTML = `
          <td>${player}</td>
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

