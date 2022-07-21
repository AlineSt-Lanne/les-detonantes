import React from "react";
import PropTypes from "prop-types";
import "./styles/ButtonLogout.css";

function ButtonLogout({ handleLogout }) {
  return (
    <button type="submit" className="button-logout" onClick={handleLogout}>
      <h3>Me déconnecter</h3>
    </button>
  );
}

ButtonLogout.propTypes = {
  handleLogout: PropTypes.func,
};

ButtonLogout.defaultProps = {
  handleLogout: PropTypes.func,
};

export default ButtonLogout;
