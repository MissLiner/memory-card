/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import { flagArray } from './components/flagArray';
import Gameboard from './components/Gameboard';
import Greyout from './components/Greyout';
import Scoreboard from './components/Scoreboard';
import ShowMessage from './components/ShowMessage.js'

function App() {
  const [score, setScore] = useState(0);
  const [deck, setDeck] = useState([]);
  const [message, setMessage] = useState('startGame');

  useEffect(() => {
    fillDeck();
  }, []);

  useEffect(() => {
    if(score === 16) {
      setMessage('win1');
      fillDeck();
    } else if(score === 32) {
      setMessage('win2');
      fillDeck();
    }  else if(score === 48) {
      setMessage('win3');
      setScore(0);
      fillDeck();
    }
  }, [score]);
  const clearMessage = () => {
    setMessage("none");
  }
  const emptyDeck = () => {
    const arrLength = deck.length;
    setDeck(deck.splice(0, arrLength));
  }
  const fillDeck = () => {
    const newCards = flagArray.map(flag => flag.name)
    setDeck(deck.concat(newCards));
  }

  const playCard = (e) => {
    const cardClicked = e.target.dataset.name;
    if(deck.includes(cardClicked)) {
      setDeck(deck.filter(card => card !== cardClicked));
      setScore(score + 1);
    } else {
      setScore(0);
      emptyDeck();
      fillDeck();
    }
  }

  return (
    <div className="mainBox">
      <h1 className="mainBox-title">Memory Card</h1>
      <Scoreboard score={score} />
      <Gameboard clickFunc={playCard} score={score} />
      <ShowMessage message={message} clickFunc={clearMessage} />
      <Greyout message={message} />
    </div>
  );
}

export default App;
