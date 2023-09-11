import React from "react"
import { Link } from 'react-router-dom';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <section id="sidebar">
			<h1>Guild Wars 2 Companion</h1>
			<div id="api-list">
				<span class="label">
					<Link to="accountInfo">Account Information</Link> 
				</span>
				<span class="label">
					<Link to="CharacterInfo">Character Information</Link> 
				</span>
				<span class="label">
					<Link to="GuildInfo">Guild Information</Link> 
				</span>
				<span class="label">
					<Link to="PvpInfo">PVP Information</Link> 
				</span>
				<span class="label">
					<Link to="WvwInfo">WvW Information</Link> 
				</span>
				<span class="label">
					<Link to="WvwMap">WvW Map</Link> 
				</span>
				<span class="label">
					<Link to="PveMap">PvE Map</Link> 
				</span>
			</div>
		</section>
  )
}

export default Sidebar