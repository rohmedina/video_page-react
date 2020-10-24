import React from "react";
import "../assets/styles/components/Header.scss";

import videoSearch from "../assets/static/video-search.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={videoSearch} alt="Logo Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
