import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import ThemeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="leftSide">
        <div className="logo_container">
          <img src={punkLogo} className="punkLogo" alt="" />
        </div>
        <div className="searchBar">
          <div className="searchIconContainer">
            <img src={searchIcon} alt="" />
          </div>
          <input
            type="text"
            className="searchInput"
            placeholder="Collections, item or User...."
          />
        </div>
      </div>
      <div className="rightSide">
        <div className="headerItems">
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </div>
        <div className="headerActions">
          <div className="themeswitchContainer">
            <img src={ThemeSwitchIcon} alt="" />
          </div>
        </div>
        <div className="loginBtn">GET IN</div>
      </div>
    </div>
  );
};

export default Header;
