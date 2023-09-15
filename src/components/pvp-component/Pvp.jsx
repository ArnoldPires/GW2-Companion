import React, { useState, useEffect } from 'react';
import './pvp.css';
import '../../App.css';
// PvP rank icons
import BearRank from './images/Bear_rank.png';
import DeerRank from './images/Deer_rank.png';
import DolyakRank from './images/Dolyak_rank.png';
import DragonRank from './images/Dragon_rank.png';
import PhoenixRank from './images/Phoenix_rank.png';
import RabbitRank from './images/Rabbit_rank.png';
import SharkRank from './images/Shark_rank.png';
import WolfRank from './images/Wolf_rank.png';

function Pvp(props) {
  // Destructure the apiKey from props
  const { apiKey } = props;
  // Define state for PvP data and initialize it to null
  const [pvpData, setPvpData] = useState(null);
  // Use the useEffect hook to fetch data when the component mounts or when apiKey changes
  useEffect(() => {
    // Define an asynchronous function for fetching PvP data
    const fetchPvpData = async () => {
      if (apiKey) { // Check if an API key is available
        try {
          const response = await fetch(`https://api.guildwars2.com/v2/pvp/stats?access_token=${apiKey}`);
          // response data as JSON
          const data = await response.json();
          // Update the state with the fetched PvP data
          setPvpData(data);
        } catch (error) {
          console.error('Error fetching PvP info:', error);
        }
      }
    };

    fetchPvpData(); 
    // Call the fetchPvpData function when the component mounts
  }, [apiKey]);

  // Function to get the PvP rank icon URL based on pvp_rank value
  // This doesn't work, will need to fix this later
  const getPvpRankIcon = () => {
  const pvpRank = pvpData && pvpData.pvp_rank; // Get the PvP rank from the PvP data

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
        return ''; // Missing icon
    }
  };

  return (
    <section id="pvpInfo">
      <h2>PvP Information</h2>
      <div id="pvpInfoContent">
        {pvpData && ( // Check if PvP data is available
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