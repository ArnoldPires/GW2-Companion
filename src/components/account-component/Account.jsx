import React, { useState, useEffect } from 'react';
import "../../App.css"

function Account(props) {
  const { apiKey } = props;
  const [accountData, setAccountData] = useState(null);
  const [worldName, setWorldName] = useState('');
  const [ageInYears, setAgeInYears] = useState(null);

  useEffect(() => {
    const fetchAccountData = async () => {
      if (apiKey) {
        try {
          // Fetch account data
          const response = await fetch(`https://api.guildwars2.com/v2/account?access_token=${apiKey}`);
          const data = await response.json();
          setAccountData(data);

          // Fetch world data
          const worldResponse = await fetch(`https://api.guildwars2.com/v2/worlds/${data.world}`);
          const worldData = await worldResponse.json();
          setWorldName(worldData.name);

          // Calculate age in years
          const createdDate = new Date(data.created); // Convert to milliseconds
          const currentDate = new Date();
          const ageInMilliseconds = currentDate - createdDate;
          const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
          setAgeInYears(ageInYears);
        } catch (error) {
          console.error('Error fetching account info:', error);
        }
      }
    };

    fetchAccountData();
  }, [apiKey]);

  return (
    <section id="accountInfo">
      <h2>Account Information</h2>
      {accountData && (
        <div id="accountInfoContent">
          <p>Account Creation Date: {new Date(accountData.created).toLocaleDateString()}</p>
          <p>Account Name: {accountData.name}</p>
          <p>World Server: {worldName}</p>
          <p>Age Of Account: {ageInYears} years</p>
          <p>Total Time Played: 10795 hours 25 minutes</p>
          <p>Daily Achievement Points: {accountData.daily_ap}</p>
          <p>Monthly Achievement Points: {accountData.monthly_ap}</p>
          <p>Total Achievement Points: 33206</p>
          <p>Fractal Level: {accountData.fractal_level}</p>
          <p>Total Mastery Points: 455</p>
          <p>Are you a Commander?: {accountData.commander ? 'Yes' : 'No'}</p>
          <p>Expansions Owned: {accountData.access.join(', ')}</p>
        </div>
      )}
    </section>
  );
}

export default Account;