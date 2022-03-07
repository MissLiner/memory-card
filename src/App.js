import { useState } from 'react';
import './App.css';
import { flagArray } from './components/flagArray';
import Gameboard from './components/Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [cardsInPlay, setCardsInPlay] = useState([]);
  // const [status, setStatus] = useState('start');

  const emptyCardsInPlay = () => {
    const arrLength = cardsInPlay.length;
    setCardsInPlay(cardsInPlay.splice(0, arrLength));
  }
  const resetCardsInPlay = () => {
    setCardsInPlay(cardsInPlay.concat(flagArray));
  }

  const playCard = (e) => {
    let isNew = false;
    const cardPlayed = e.target.id;
    for(let i=0; i < cardsInPlay.length; i++) {
      if(cardPlayed === cardsInPlay[i].text) {
        setCardsInPlay(cardsInPlay.splice(i, 1));
        setScore(score + 1);
        isNew = true;
        return;
      }
    }
    if(!isNew) {
      setScore(0);
      emptyCardsInPlay();
      resetCardsInPlay();
    }
  }

  return (
    <div>
      <h1>Memory Card</h1>
      <Gameboard clickFunc={playCard} score={score} />
    </div>
  );
}

export default App;
