import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import imagecard from "../assets/imagecard.png";
import paulette from "../assets/paulette.jpg";
import vicky from "../assets/vicky.jpg";
import sixteen from "../assets/sixteen.jpg";
import mapworld from "../assets/map-world.png";
import SponsorItem from "../components/SponsorItem";

export default function Home() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sponsors`)
      .then((res) => res.data)
      .then((data) => {
        setSponsors(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="info-home-content">
        <div className="image-card-home">
          <img className="imagecard" src={imagecard} alt="imagecard" />
        </div>
        <div className="contain-who-detonantes">
          <div className="who-detonantes">
            <h1 className="title-who-detonantes">Les Deto’Nantes c’est qui?</h1>
            <p className="text-who-detonantes">
              Amoureuses de la nature et des paysages qu’elle nous offre, on a
              opté pour un engagement au quotidien à son service pour la
              préserver et continuer d’en profiter. De collègues à amies nous
              sommes devenues partenaires d’aventure et de défis. Grace â
              Natur’Elles nous avont participé en juin à notre premier rallye et
              on compte bien ne pas s’arêter là !
            </p>
          </div>
        </div>
        <div className="presentation-paulette">
          <div className="image-paulette">
            <img className="paulette" src={paulette} alt="paulette" />
          </div>
          <div className="text-paulette">
            <p className="text-paulette">
              Paulette c’est avant tout une binôme prête à tout pour vivre le
              meilleur et dans la bonne humeur 34 balais dans le cul, ravie
              d’être chargée d’assistance au sein de Mutuaide, cela lui a permis
              de réaliser un de ses rêves les plus fous : participer à son
              premier rallye ! toujours partante pour les défis les plus
              improbables, aucunes limites quand il s’agit d’aventure, sportive
              hors pair toujours prête à repousser ses limites.
            </p>
          </div>
        </div>
        <div className="presentation-vicky">
          <div className="image-paulette">
            <img className="vicky" src={vicky} alt="vicky" />
          </div>
          <div className="text-vicky">
            <p className="text-vicky">
              Vicky, c'est 1.57m de bonne humeur et de rire. Une aventurière
              hors pair qui ne dit jamais non à des projets de voyage en France
              et autour du monde. La vadrouille c'est son dada ! On s'est
              trouvées, on ne va plus se quitter
            </p>
          </div>
        </div>
        <div className="presentation-sixteen">
          <div className="image-sixteen">
            <img className="sixteen" src={sixteen} alt="sixteen" />
          </div>
          <div className="text-sixteen">
            <p className="text-sixteen">
              {`Sixteen qui nous a accompagnera pour tous nos rallyes !
              Créée par Florence Maugis.`}
            </p>
          </div>
        </div>
        <div className="home-objectif">
          <h1 className="title-home-objectif">
            NOTRE OBJECTIF pour Juillet 2023 :
          </h1>
          <h1 className="title-home-objectif">LA NORVÈGE</h1>
          <div className="mapworld">
            <img className="map-world" src={mapworld} alt="map-world" />
          </div>
          <Link to="/objectif">
            <button className="button-home-objectif" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
      <div className="sponsors-home">
        {sponsors.map((sponsor) => (
          <Link key={sponsors.id} to={`/sponsors/${sponsors.id}`}>
            <SponsorItem sponsor={sponsor} />
          </Link>
        ))}
      </div>
      <div className="home-scrollbutton">
        <ScrollButton />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}
