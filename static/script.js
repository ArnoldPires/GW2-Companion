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
      const accountInfoContent = document.getElementById("accountInfoContent");
      accountInfoContent.innerHTML = `
        <p>Account Creation date: ${formattedCreatedDate}</p>
        <p>Account Name: ${data.name}</p>
        <p>Server Name: ${serverName}</p> <!-- Use serverName variable here -->
        <p>Age of your Account: ${ageInYears} years</p>
        <p>Total Time Played: 10795 hours 25 minutes </p>
        <p>Daily Achievement Points: ${data.daily_ap} earned </p>
        <p>Monthly Achievement Points: ${data.monthly_ap} earned </p>
        <p>Total Achievement Points: 33206 earned</p>
        <p>Fractal Level: ${data.fractal_level}</p>
        <p>Mastery Level: ${data.masteries_levels}</p>
        
        <p>Are you a Commander?: ${data.commander ? 'Yes' : 'No'}</p>
        <p>Expansions Owned: ${data.access}</p>
        <h2>Guilds:</h2>
        <ul id="guildList"></ul>
        
       
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

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for fixing the sidebar
const sidebar = document.getElementById('sidebar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
    }
});

// window.onload = wvwFrameHeight;
// window.onresize = wvwFrameHeight;
// function wvwFrameHeight() {
// 	var width = document.getElementById("wvwIntelFrame").clientWidth;
// 	var height = Math.floor(width / 1.38);
// 	if (width > 767) {
// 		document.getElementById("wvwIntelFrame").style.height = height + "px";
// 		document.getElementById("wvwIntelFrame").setAttribute("scrolling", "no");
// 	} else {
// 		document.getElementById("wvwIntelFrame").style.height = "680px";
// 		document.getElementById("wvwIntelFrame").setAttribute("scrolling", "yes");
// 	}
// }