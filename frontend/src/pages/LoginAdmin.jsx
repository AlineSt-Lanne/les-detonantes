import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./styles/LoginAdmin.css";
import logosacados from "../assets/logo-sacados.png";
import ButtonConnexion from "../components/ButtonConnexion";

function LoginAdmin() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pseudo || !password) {
      swal({
        title: "Error!",
        text: "Merci de renseigner votre pseudo ET votre email",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { pseudo, password },
          { withCredentials: true }
        )
        .then(() => navigate("/admin", { replace: true }))
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="containloginadmin">
      <div className="logo-loginadmin">
        <img
          className="logosacados-login"
          src={logosacados}
          alt="logo-sacados-login"
        />
      </div>
      <div className="title-loginadmin">
        <h1 className="title-loginadmin">Bienvenue Paulette et Vicky</h1>
      </div>
      <div className="formloginadmin">
        <form className="form-login-admin">
          <input
            className="inputPseudoAdmin"
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Paulette ou Vicky"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <input
            className="inputLogPasswordAdmin"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttoncontinueadmin">
            <ButtonConnexion handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginAdmin;
