import "./styles/Admin.css";
import SponsorAdd from "../components/SponsorAdd";
import logosacados from "../assets/logo-sacados.png";

function Admin() {
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
    </div>
  );
}

export default Admin;
