import { useEffect, useState } from 'react';
import './App.css';
import { flagArray } from './components/flagArray';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import WinAlert from './components/WinAlert';

function App() {
  const [score, setScore] = useState(0);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    fillDeck();
  }, []);

  const emptyDeck = () => {
    const arrLength = deck.length;
    setDeck(deck.splice(0, arrLength));
  }
  const fillDeck = () => {
    const newCards = flagArray.map(flag => flag.name)
    setDeck(deck.concat(newCards));
  }

  const playCard = (e) => {
    const cardClicked = e.target.id;
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
    <div>
      <h1>Memory Card</h1>
      <Scoreboard score={score} />
      <Gameboard clickFunc={playCard} score={score} />
      <WinAlert score={score} />
    </div>
  );
}

export default App;
