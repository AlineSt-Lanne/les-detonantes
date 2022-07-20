import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { GiStairsGoal, GiLetterBomb } from "react-icons/gi";
import logoNavbar from "../assets/logo-noir.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="align-navbar-container">
        <div className="logo-navbar">
          <Link to="/">
            <img className="logo-navbar" src={logoNavbar} alt="logoNavbar" />
          </Link>
        </div>
        <div className="pictos-navbar">
          <div className="picto-car">
            <Link to="/rallye">
              <AiFillCar />
            </Link>
          </div>
          <div className="picto-objectif">
            <Link to="/objectif">
              <GiStairsGoal />
            </Link>
          </div>
          <div className="picto-contact">
            <Link to="/contact">
              <GiLetterBomb />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
