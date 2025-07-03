import React from "react";
import "./Card.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" // ✅ Fixed back image
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default Card;
