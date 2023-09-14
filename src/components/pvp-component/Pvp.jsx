import React, { useState, useEffect } from 'react';
import './pvp.css';
import '../../App.css';
import BearRank from './images/Bear_rank.png';
import DeerRank from './images/Deer_rank.png';
import DolyakRank from './images/Dolyak_rank.png';
import DragonRank from './images/Dragon_rank.png';
import PhoenixRank from './images/Phoenix_rank.png';
import RabbitRank from './images/Rabbit_rank.png';
import SharkRank from './images/Shark_rank.png';
import WolfRank from './images/Wolf_rank.png';

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
          console.error('Error fetching PvP info:', error);
        }
      }
    };

    fetchPvpData();
  }, [apiKey]);

  // Function to get the PvP rank icon URL based on pvp_rank value
  const getPvpRankIcon = () => {
    const pvpRank = pvpData && pvpData.pvp_rank;

    // Map pvpRank to the corresponding icon
    switch (pvpRank) {
      case 1:
        return BearRank;
      case 2:
        return DeerRank;
      case 3:
        return DolyakRank;
      case 4:
        return DragonRank;
      case 5:
        return PhoenixRank;
      case 6:
        return RabbitRank;
      case 7:
        return SharkRank;
      case 8:
        return WolfRank;
      default:
        return ''; // Return a default icon or handle missing icons
    }
  };

  return (
    <section id="pvpInfo">
      <h2>PvP Information</h2>
      <div id="pvpInfoContent">
        {pvpData && (
          <div className="pvp-container">
            <div>
              <img src={SharkRank} alt="PvP Rank Icon"></img>
              <p><strong>PvP Rank:</strong> {pvpData.pvp_rank}</p>
              <p><strong>Wins:</strong> {pvpData.aggregate.wins}</p>
              <p><strong>Losses:</strong> {pvpData.aggregate.losses}</p>
              <p><strong>Desertions:</strong> {pvpData.aggregate.desertions}</p>
              <p><strong>Forfeits:</strong> {pvpData.aggregate.forfeits}</p>
            </div>
            <div>
              <strong>Professions Used in PvP:</strong>
              <ul>
                {Object.keys(pvpData.professions).map((profession) => (
                  <li key={profession}>
                   <strong>{profession.charAt(0).toUpperCase() + profession.slice(1)}:</strong> Wins - {pvpData.professions[profession].wins}, Losses - {pvpData.professions[profession].losses}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Pvp;
