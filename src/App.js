<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Public card images (Unsplash)
  const cardImages = [
    { src: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", matched: false },
    { src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*", matched: false },
    { src: "https://naturecanada.ca/wp-content/uploads/2022/01/January-2022-3.png", matched: false },
    { src: "https://images.birdfact.com/production/long-eared-owl_2023-04-14-102503_wnsy.jpg?w=1800&h=1350&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5041&fp-y=0.4225&dm=1685704061&s=a4f77c53492843f3bbe9ab96ead9f513", matched: false },
    { src: "https://safariavventura.com/wp-content/uploads/2018/02/leone-africano-2-750x500.jpg", matched: false },
    { src: "https://theheritageart.com/wp-content/uploads/2022/12/Bengal-Tiger.webp", matched: false },
  ];

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>🎮 Memory Card Game</h1>
      <button onClick={shuffleCards}>🔄 New Game</button>
      <GameBoard
        cards={cards}
        handleChoice={handleChoice}
        flipped={(card) =>
          card === choiceOne || card === choiceTwo || card.matched
        }
        disabled={disabled}
      />
      <p>Turns: {turns}</p>
    </div>
  );
};
>>>>>>> master

export default App;
