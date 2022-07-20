import "./styles/Rallye.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import imagepeugeot from "../assets/imagepeugeot.jpg";
import logonaturelles from "../assets/logonaturelles.png";
import photogroupenaturelles from "../assets/photogroupenaturelles.jpg";
import logomaterrenelles from "../assets/logomaterrenelles.png";

export default function Rallye() {
  return (
    <div className="rallye-container">
      <div className="rallye-navbar">
        <Navbar />
      </div>
      <div className="info-rallye-content">
        <div className="image-peugeot-rallye">
          <img className="imagepeugeot" src={imagepeugeot} alt="imagepeugeot" />
        </div>
      </div>
      <div className="contain-who-naturelles">
        <div className="logo-naturelles">
          <img
            className="logonaturelles"
            src={logonaturelles}
            alt="logonaturelles"
          />
        </div>
        <div className="who-naturelles">
          <h1 className="title-who-naturelles">
            Natur'Elles Aventures c'est quoi?
          </h1>
          <p className="text-who-naturelles">
            La première organisation au monde à proposer l’électroféminin !
            Natur’Elles Aventures propose des challenges tout inclus en France
            et à l’international pour toutes les femmes avec ou sans expérience.
            Des challenges d’orientation d’une semaine mixant des étapes en
            véhicule 100% électrique et en trek, en toute sécurité, sans notion
            de vitesse, au cœur de paysages à couper le souffle ! À travers ses
            challenges, Natur’Elles Aventures soutient l’association Ma Terre
            N’Elles qui mène des actions en faveur de notre planète dans les
            pays que nous traversons
          </p>
          <button className="button-site-naturelles" type="button">
            En savoir plus
          </button>
        </div>
        <div className="photo-groupe-naturelles">
          <img
            className="photogroupenaturelles"
            src={photogroupenaturelles}
            alt="photogroupenaturelles"
          />
        </div>
        <div className="contain-who-materrenelles">
          <div className="who-materrenelles">
            <div className="logo-materrenelles">
              <img
                className="logomaterrenelles"
                src={logomaterrenelles}
                alt="logomaterrenelles"
              />
            </div>
            <div className="align-text-materrenelles">
              <p className="text-who-materrenelles">
                Soutenir un projet local ou nationale en faveur de
                l’environnement dans les pays où nous interviendrons.
              </p>
              <p className="text-who-materrenelles">
                Impliquer le tissu économique et social local pour tous nos
                projets.
              </p>
              <p className="text-who-materrenelles">
                Mobiliser les partenaires et les habitants par des actions de
                terrain contribuant à la protection de l’environnement.
              </p>
              <p className="text-who-materrenelles">
                Suivre et mesurer dans le temps les actions mises en place.
              </p>
            </div>
          </div>
          <button className="button-site-materrenelles" type="button">
            En savoir plus
          </button>
        </div>
      </div>
      <div className="rallye-scrollbutton">
        <ScrollButton />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}