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
          <p><strong>Account Creation Date:</strong> {new Date(accountData.created).toLocaleDateString()}</p>
          <p><strong>Account Name:</strong> {accountData.name}</p>
          <p><strong>World Server:</strong> {worldName}</p>
          <p><strong>Age Of Account:</strong> {ageInYears} years</p>
          <p><strong>Total Time Played:</strong> 10795 hours 25 minutes</p>
          <p><strong>Daily Achievement Points:</strong> {accountData.daily_ap}</p>
          <p><strong>Monthly Achievement Points:</strong> {accountData.monthly_ap}</p>
          <p><strong>Total Achievement Points:</strong> 33206</p>
          <p><strong>Fractal Level:</strong> {accountData.fractal_level}</p>
          <p><strong>Total Mastery Points:</strong> 455</p>
          <p><strong>Are you a Commander?:</strong> {accountData.commander ? 'Yes' : 'No'}</p>
          <p><strong>Expansions Owned:</strong> {accountData.access.join(', ')}</p>
        </div>
      )}
    </section>
  );
}

export default Account;