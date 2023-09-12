import React from "react";
import Api from "../../components/api-component/api";
import Account from "../../components/account-component/account";
import Character from "../../components/character-component/Character";
import Guild from "../../components/guild-component/Guild";
import Pvp from "../../components/pvp-component/Pvp";
import Wvw from "../../components/wvw-component/Wvw";
import Map from "../../components/map-component/Map";
import "./homePage.css"

const HomePage = () => {
  return (
    <section className="HomePage-container">
      <Api />
      <Account />
      <Character />
      <Guild />
      <Pvp />
      <Wvw />
      <Map />
    </section>
  )
}

export default HomePage;