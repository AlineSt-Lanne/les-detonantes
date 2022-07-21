import "./styles/Admin.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SponsorAdd from "../components/SponsorAdd";
import logosacados from "../assets/logo-sacados.png";
import ButtonLogout from "../components/ButtonLogout";

function Admin() {
  const handleLogout = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Successfully logged out");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // eslint-disable-next-line no-alert
          alert("You're not authenticated");
        }
      });
  };

  return (
    <div className="contain-admin">
      <div className="logo-loginadmin">
        <img
          className="logologinadmin"
          src={logosacados}
          alt="logologinadmin"
        />
      </div>
      <div className="form-sponsor-add">
        <SponsorAdd />
      </div>
      <div className="button-logout-admin">
        <Link to="/">
          <ButtonLogout handleSubmit={handleLogout}/>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
