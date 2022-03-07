import React, { useEffect, useState } from "react";
import "../App.css"

const Scoreboard = (props) => {
  const { score } = props;

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if(score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore])
  
  return(
    <div>
      <div>
        <div>Current Score:</div>
        <div>{score}</div>
      </div>
      <div>
        <div>High Score:</div>
        <div>{highScore}</div>
      </div>
    </div>
  )
}
export default Scoreboard;
