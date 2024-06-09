import { useState } from "react";
import "./Header.scss";
import logo from "../../Assets/images/logo.svg";
function Header() {
  return (
    <header className="header">
      <a href="index.html" className="header__logoo">
        <img className="header__logo" src={logo} alt="logo" />
        NFTs
      </a>
      <ul className="header__list">
        <li className="header__item">
          <a href="" className="header__link">
            Home
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link">
            Market
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link">
            Artists
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link">
            Community
          </a>
        </li>
        <li className="header__item">
          <a href="" className="header__link">
            Wallet
          </a>
        </li>
      </ul>
      <div className="header__buttons">
        <a href="#" className="header__login">
          Login
        </a>
        <a href="#" className="header__signup">
          Sign Up
        </a>
      </div>
    </header>
  );
}
export default Header;
