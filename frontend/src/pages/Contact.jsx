import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import ContactMessage from "../components/ContactMessage";
import "./styles/Contact.css";

export default function Contact() {
  const MAX_LENGTH = 30;

  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  const [content, setContent] = useState("");
  const handleChange = (event) => {
    if (event.target.value.length <= MAX_LENGTH) {
      setContent(event.target.value);
    }
  };
  const [isUserClick, setIsUserClick] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsUserClick(!isUserClick);
  }
  const maximumReached = content.length >= MAX_LENGTH;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/sendmail`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, objet, message }),
    });
  };

  return (
    <div className="contact-container">
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="contain-form-contact">
        <div className="title-contact-form">
          <h1 className="title-contact-form">Nous contacter</h1>
        </div>
        <div className="contact">
          <form onSubmit={handleSubmit} name="contact" method="post">
            <label htmlFor="name">
              Nom - Société *
              <input
                className={
                  maximumReached ? "length-maximum-reached" : "length-ok"
                }
                id="name"
                name="name"
                type="text"
                value={content}
                placeholder="Champ obligatoire"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email *
              <input
                className={
                  maximumReached ? "length-maximum-reached" : "length-ok"
                }
                id="email"
                type="email"
                value={email}
                name="email"
                placeholder="Champ obligatoire"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="objet">
              Objet *
              <input
                className={
                  maximumReached ? "length-maximum-reached" : "length-ok"
                }
                id="objet"
                type="text"
                name="objet"
                value={objet}
                placeholder="Champ obligatoire"
                onChange={(e) => setObjet(e.target.value)}
              />
            </label>

            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                value={message}
                placeholder="Dis-nous tout"
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              className="contactbutton"
              type="submit"
              value="submit"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              Envoyer
            </button>
            <div className="alerte-mail">
              {isUserClick && <ContactMessage />}
            </div>
          </form>
        </div>
      </div>
      <div className="contact-footer">
        <ScrollButton />
        <Footer />
      </div>
    </div>
  );
}
