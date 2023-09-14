import React, { useState } from 'react';
import "./api.css"

function Api({ apiKey, onApiKeyChange }) {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const handleApiKeyChange = (event) => {
    setApiKeyInput(event.target.value);
  };

  const fetchAccountInfo = async () => {
    // Perform API request here using apiKeyInput
    try {
      const response = await fetch(`https://api.guildwars2.com/v2/account?access_token=${apiKeyInput}`);
      const data = await response.json();
      // Update state or pass data to other components as needed
      console.log('Account Data:', data); // For demonstration purposes, log the account data

      // Update apiKey state in the parent component (HomePage)
      onApiKeyChange(apiKeyInput);
    } catch (error) {
      console.error('Error fetching account info:', error);
    }
  };

  return (
    <section id="api-container">
      <h2>API Key</h2>
      <form id="apiKeyForm">
        <label htmlFor="apiKey">Enter your API Key:</label>
        <input
          type="text"
          id="apiKey"
          name="apiKey"
          value={apiKeyInput}
          onChange={handleApiKeyChange}
        />
        <br />
        <br />
        <button type="button" onClick={fetchAccountInfo}>Add Your Key</button>
      </form>
      <p>If you want your Guild Wars 2 information to display, you have to enter your API key above.</p>
      <p>To get your API key, you must have a <strong>Guild Wars 2 Account</strong>.</p>
      <p>Once you've created your account; login, select <strong>Account</strong>, <strong>Applications</strong>, <strong>New Key</strong>.</p>
      <p>Name your key whatever you want, and check off all the boxes you want checked off. Select <strong>Create API Key</strong> and you are done.</p>
      <p>The Guild Wars 2 API is accessed by making requests to <strong>https://api.guildwars2.com</strong> with the following URL format: <strong>https://api.guildwars2.com/version/endpoint</strong></p>
    </section>
  );
}

export default Api;