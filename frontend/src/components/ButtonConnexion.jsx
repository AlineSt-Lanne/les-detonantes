import "./styles/ButtonConnexion.css";
import React from "react";
import PropTypes from "prop-types";

function ButtonConnexion({ handleSubmit }) {
  return (
    <button
      type="submit"
      className="buttonconnexion"
      style={{ cursor: "pointer" }}
      onClick={handleSubmit}
    >
      <h3>CONNEXION</h3>
    </button>
  );
}

ButtonConnexion.propTypes = {
  handleSubmit: PropTypes.func,
};

ButtonConnexion.defaultProps = {
  handleSubmit: PropTypes.func,
};
export default ButtonConnexion;
