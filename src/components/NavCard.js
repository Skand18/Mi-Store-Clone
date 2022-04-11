import React from "react";
import "../styles/NavCard.css";
const NavCard = ({ index, image, name, price }) => {
  return (
    <div>
      <div className="NavCard">
        <img src={image} alt={`${index} phone`} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default NavCard;
