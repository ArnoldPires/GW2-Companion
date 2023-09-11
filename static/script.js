async function fetchServerName(serverId) {
  try {
    const response = await fetch(`https://api.guildwars2.com/v2/worlds?id=${serverId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch server name (Status ${response.status})`);
    }

    const serverData = await response.json();
    return serverData.name;
  } catch (error) {
    console.error("Error fetching server name:", error);
    return "Unknown Server"; // Return a default name or handle the error as needed
  }
}

function fetchAccountInfo() {
  const apiKey = document.getElementById("apiKey").value;

  // Make an API request to Guild Wars 2 API to get account information
  fetch(`https://api.guildwars2.com/v2/account?access_token=${apiKey}`)
    .then(response => response.json())
    .then(async data => {
      //Achievement Point total

      // Parse and format account creation date
      const createdDate = new Date(data.created);
      const formattedCreatedDate = `${(createdDate.getMonth() + 1).toString().padStart(2, '0')}-${createdDate.getDate().toString().padStart(2, '0')}-${createdDate.getFullYear()}`;

      // Calculate age of the account in years (rounded down)
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - createdDate;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));

      // Fetch server name
      const serverId = data.world;
      const serverName = await fetchServerName(serverId);
      
      // Display account information, including total achievement points
      const accountInfo = document.getElementById("accountInfo");
      accountInfo.innerHTML = `
        <h2>Account Information:</h2>
        <p>Account Creation date: ${formattedCreatedDate}</p>
        <p>Account Name: ${data.name}</p>
        <p>Server Name: ${serverName}</p> <!-- Use serverName variable here -->
        <p>Age of your Account: ${ageInYears} years</p>
        <p>Total Time Played: 10795 hours 25 minutes </p>
        <p>Daily Achievement Points: ${data.daily_ap} earned </p>
        <p>Monthly Achievement Points: ${data.monthly_ap} earned </p>
        <p>Total Achievement Points: 33206 earned</p>
        <p>Fractal Level: ${data.fractal_level}</p>
        <p>Are you a Commander?: ${data.commander ? 'Yes' : 'No'}</p>
        <p>Expansions Owned: ${data.access}</p>
        <h2>Guilds:</h2>
        <ul id="guildList"></ul>
        <p>Guild Leader: ${data.guild_leader}</p>
      `;

      // Fetch and display guild names
      data.guilds.forEach(guildId => {
        fetch(`https://api.guildwars2.com/v2/guild/${guildId}`)
          .then(response => response.json())
          .then(guildData => {
            const guildList = document.getElementById("guildList");
            const guildNameItem = document.createElement("li");
            guildNameItem.textContent = `${guildData.name}`;
            guildList.appendChild(guildNameItem);
          })
          .catch(error => {
            // Handle errors
            console.error("Error fetching guild info:", error);
          });
      });
    })
    .catch(error => {
      // Handle errors (e.g., invalid API key)
      console.error("Error fetching account info:", error);
    });
}
