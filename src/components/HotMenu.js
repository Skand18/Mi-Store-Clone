import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hotmenu.css";

const HotMenu = () => {
  return (
    <div className="Hotmenu">
      <Link className="HotLink" to="/music">
        Music Store
      </Link>
      <Link className="HotLink" to="/smartdevice">
        Smart Device
      </Link>
      <Link className="HotLink" to="/home">
        Home
      </Link>
      <Link className="HotLink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="HotLink" to="/mobileaccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotMenu;
