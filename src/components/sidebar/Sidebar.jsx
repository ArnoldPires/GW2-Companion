import { Link } from 'react-router-dom';
import "./sidebar.css";

let Sidebar = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="sidebar">
      <Link onClick={() => handleClickScroll("api-container")}><h1>Guild Wars 2 Companion</h1></Link>
      <div id="api-list">
        <span className="label">
          <Link onClick={() => handleClickScroll("accountInfo")}>Account Information</Link>    
        </span>
        <span className="label">
          <Link onClick={() => handleClickScroll("characterInfo")}>Characters</Link>
        </span>
        <span className="label">
          <Link onClick={() => handleClickScroll("guildInfo")}>Guilds</Link>
        </span>
        <span className="label">
          <Link onClick={() => handleClickScroll("pvpInfo")}>PVP Information</Link>
        </span>
        <span className="label">
          <Link onClick={() => handleClickScroll("wvwInfo")}>WvW Information</Link>
        </span>
        <span className="label">
          <Link onClick={() => handleClickScroll("pvEandWvWMap")}>PVE & WvW Maps</Link>
        </span>
      </div>
    </section>
  );
}

export default Sidebar;
