import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
     <nav id="top-navbar">
        <ul>
          <div>
            <li><Link to="https://gw2-selection-screen-ap.netlify.app/classespage/classes">Learn About the Classes</Link></li>
            <li><Link to="https://gw2-selection-screen-ap.netlify.app/">My Charaters</Link></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar