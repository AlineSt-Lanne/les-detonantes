import { useState } from "react";
import "./styles/SponsorAdd.css";
import swal from "sweetalert";

export default function SponsorAdd() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !name || !category) {
      swal({
        title: "Error!",
        text: "Merci de renseigner l'image, le nom de l'entreprise et la catégorie",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      swal({
        title: "Top!",
        text: "Sponsor ajouté :)",
        icon: "success",
        confirmButtonText: "Cool",
      });

      fetch(`${import.meta.env.VITE_BACKEND_URL}/sponsors`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          image,
          name,
          category,
        }),
      }).then(() => {
        setImage("");
        setName("");
        setCategory("");
      });
    }
  };

  return (
    <div id="sponsoradd">
      <h1 className="sponsoradd_title">Ajouter un sponsor</h1>

      <form className="sponsoradd_form" onSubmit={handleSubmit}>
        <label className="sponsoradd_label" htmlFor="image">
          Logo de l'entreprise
          <input
            className="sponsoradd_input"
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Url de l'image"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label className="sponsoradd_label" htmlFor="name">
          Nom de l'entreprise
          <input
            className="sponsoradd_input"
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="ex: Mutuaide"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="sponsoradd_label" htmlFor="name">
          Catégorie de l'entreprise
          <input
            className="sponsoradd_input"
            id="name"
            name="name"
            type="text"
            value={category}
            placeholder="ex: Sport, Assurance, ..."
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <button className="buttonaddsponsor" type="submit">
          Ajouter un sponsor
        </button>
      </form>
    </div>
  );
}
