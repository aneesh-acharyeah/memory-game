import React from "react";
import Card from "./Card";
import "./GameBoard.css";

const GameBoard = ({ cards, handleChoice, flipped, disabled }) => {
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={flipped(card)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default GameBoard;
