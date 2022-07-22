import "./styles/Objectif.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import photogroupenaturelles2 from "../assets/photogroupenaturelles2.jpg";
import paulettevicky from "../assets/paulette-vicky.jpg";
import logosacados from "../assets/logo-sacados.png";

export default function Objectif() {
  return (
    <div className="objectif-container">
      <div className="objectif-navbar">
        <Navbar />
      </div>
      <div className="info-objectif-content">
        <div className="image-group-naturelles-objectif">
          <img
            className="photogroupenaturelles2"
            src={photogroupenaturelles2}
            alt="photogroupenaturelles2"
          />
        </div>
        <div className="retour-premiere-experience">
          <h1 className="title-retour-premiere-experience">
            Retour sur notre{" "}
            <span className="orange-title">premier rallye</span> en juin 2022
          </h1>
          <p className="text-retour-premiere-experience">
            Les sourires sur nos visages en disent long sur notre joie d'être
            là, parmi tous ces humains incroyables à savourer le momentprésent.
          </p>
          <p className="text-retour-premiere-experience">
            On se rend compte alors que{" "}
            <span className="brown-text">
              seul(e) on n'est rien face à la force du
            </span>
            , que l'entraide prévaut sur la compétition quand les âmes savent se
            connecter et que nous ne représentons pas grand chose face à la
            grandeur et la puissance de la nature.
          </p>
          <p className="text-retour-premiere-experience">
            Une preuve de plus, s'il en fallait, qu'il faut oeuvrer au quotidien
            pour espérer{" "}
            <span className="brown-text">
              permettre aux générations futures de savourer à leur tour de se
              reconnecter à la nature et à soi
            </span>
            .
          </p>
          <p className="text-retour-premiere-experience">
            Pendant une semaine, on remet les choses à leur juste place.
            (sûrement pour ça que c'est si difficile de redescendre...) C'est
            sur et certain,{" "}
            <span className="brown-text">
              il y a un avant et un après Natur'Elles Aventures
            </span>
            ça nous change..
          </p>
          <p className="text-retour-premiere-experience">
            Alors <span className="brown-text">merci Mutuaide</span> de nous
            avoir fait confiance et de nous avoir permis de vivre cette aventure
            incroyable."
          </p>
        </div>
        <div className="info-objectif-norvege">
          <div className="image-paulette-vicky">
            <img
              className="paulette-vicky"
              src={paulettevicky}
              alt="paulette-vicky"
            />
          </div>
          <div className="objectif-norvege-explications">
            <div className="logo-sacados">
              <img
                className="logosacados"
                src={logosacados}
                alt="logo-sacados"
              />
            </div>
            <div className="norvege-explications">
              <h1 className="title-norvege-explications">
                Le <span className="orange-title">but</span> de notre rallye en
                Norvège
              </h1>
              <p className="text-norvege-explications">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="objectif-scrollbutton">
          <ScrollButton />
        </div>
        <div className="objectif-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
