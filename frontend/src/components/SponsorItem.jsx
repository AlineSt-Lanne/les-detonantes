import "./styles/SponsorItem.css";
import propTypes from "prop-types";

function SponsorItem({ sponsor }) {
  const { image, name, category } = sponsor;

  return (
    <div className="sponsor-item">
      <div className="sponsor-item-image">
        <img
          className="sponsor-image"
          src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
          height="327"
          alt=""
        />
      </div>
      <div className="sponsor-legende">
        <div className="infos">
          <div className="name">{name}</div>
          <div className="category">{category}</div>
        </div>
      </div>
    </div>
  );
}

SponsorItem.propTypes = {
  sponsor: propTypes.shape({
    image: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default SponsorItem;
