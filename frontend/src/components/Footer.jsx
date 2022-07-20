import React from "react";
import "./styles/Footer.css";
import { SiMinutemailer } from "react-icons/si";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="info-mail">
        <SiMinutemailer />
        <h1 className="mail">les2détonantes@gmail.com</h1>
      </div>
      <div className="pictos-reseauxsociaux">
        <div className="picto-insta">
          <a href="https://www.instagram.com/les_detonantes/" target="_bank">
            <AiFillInstagram />
          </a>
        </div>
        <div className="picto-linkedin">
          <a
            href="https://www.linkedin.com/in/les-déto-nantes-with-paulette-and-vicky-17b1a1244/"
            target="_bank"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
