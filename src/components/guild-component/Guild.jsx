import React, { useState, useEffect } from 'react';
import "../../App.css"

function Guild(props) {
  const { apiKey } = props;
  const [guildData, setGuildData] = useState(null);
  const [guildDetails, setGuildDetails] = useState([]);

  useEffect(() => {
    const fetchGuildData = async () => {
      if (apiKey) {
        try {
          const response = await fetch(`https://api.guildwars2.com/v2/account?access_token=${apiKey}`);
          const data = await response.json();
          setGuildData(data);

          // Fetch and set guild details
          const guildDetails = await Promise.all(data.guilds.map(async (guildId) => {
            const guildResponse = await fetch(`https://api.guildwars2.com/v2/guild/${guildId}`);
            const guildData = await guildResponse.json();
            return guildData;
          }));
          setGuildDetails(guildDetails);
        } catch (error) {
          console.error('Error fetching account info:', error);
        }
      }
    };

    fetchGuildData();

  }, [apiKey]);

  return (
    <section id="guildInfo">
      <h2>Guild Information</h2>
      {guildData && (
        <div id="guildInfoContent">
          <p>Guilds:</p>
          <ul>
            {guildDetails.map((guild, index) => (
              <li key={index}>
                {guild.name} [{guild.tag}]<br />
                <img src={`https://guilds.gw2w2w.com/guilds/${guild.name.split(" ").join("-")}/128.svg`} alt={`Guild Emblem for ${guild.name}`} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Guild;
