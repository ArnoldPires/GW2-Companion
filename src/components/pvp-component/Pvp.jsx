import React, { useState, useEffect } from 'react';
import "../../App.css"

function Pvp(props) {
  const { apiKey } = props;
  const [pvpData, setPvpData] = useState(null);

  useEffect(() => {
    const fetchPvpData = async () => {
      if (apiKey) {
        try {
          // Fetch pvp data
          const response = await fetch(`https://api.guildwars2.com/v2/pvp/stats?access_token=${apiKey}`);
          const data = await response.json();
          setPvpData(data);
        } catch (error) {
          console.error('Error fetching pvp info:', error);
        }
      }
    };

    fetchPvpData();
  }, [apiKey]);

  return (
    <section id="pvpInfo">
      <h2>PVP Information</h2>
      <div id="pvpInfoContent">
        {pvpData && (
          <div>
            <p>
              <strong>PvP Rank:</strong> {pvpData.pvp_rank}
            </p>
            <p>
              <strong>Wins:</strong> {pvpData.aggregate.wins}
            </p>
            <p>
              <strong>Losses:</strong> {pvpData.aggregate.losses}
            </p>
            <p>
              <strong>Desertions:</strong> {pvpData.aggregate.desertions}
            </p>
            <p>
              <strong>Forfeits:</strong> {pvpData.aggregate.forfeits}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Pvp;
