import React, { useState } from "react";
import Api from "../../components/api-component/Api";
import Account from "../../components/account-component/Account";
import Character from "../../components/character-component/Character";
import Guild from "../../components/guild-component/Guild";
import Pvp from "../../components/pvp-component/Pvp";
import Map from "../../components/map-component/Map";
import "./homePage.css";

const HomePage = () => {
  // Initialize apiKey state in HomePage
  const [apiKey, setApiKey] = useState('');
  // Function to update apiKey state
  const handleApiKeyChange = (newApiKey) => {
    setApiKey(newApiKey);
  };

  return (
    <section className="HomePage-container">
      <Api apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      <Account apiKey={apiKey} />
      <Character apiKey={apiKey} />
      <Guild apiKey={apiKey} />
      <Pvp apiKey={apiKey} />
      <Map />
    </section>
  );
};

export default HomePage;