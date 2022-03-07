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
    <div className="scoreboard">
      <div className="scoreDiv currentScore">
        <div className="scoreSubdiv">Current Score:</div>
        <div className="scoreSubdiv">{score}</div>
      </div>
      <div className="scoreDiv bestScore">
        <div className="scoreSubdiv">High Score:</div>
        <div className="scoreSubdiv">{highScore}</div>
      </div>
    </div>
  )
}
export default Scoreboard;
