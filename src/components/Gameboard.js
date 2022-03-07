import React from "react";
import uniqid from "uniqid";
import { flagArray } from "./flagArray";
import "../App.css"

const Gameboard = (props) => {
  const { clickFunc } = props;

  const shuffleArray = (array) => {
    const shuffledArray = array;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  }

  const renderFlags = () => {
    const shuffledFlags = shuffleArray(flagArray);
    return(
      shuffledFlags.map((flag) => {
        const keyID = uniqid();
        return(
          <div
            id={flag.text} 
            className="cardBox" 
            key={keyID}
            data-arrindex={flag.arrindex}
            onClick={clickFunc}>
            <img 
              className="flagImg" 
              src={flag.image} 
              alt={flag.text + " image"}>
            </img>
            <div>{flag.text}</div>
          </div>
        )
      })
    )
  }
    
  return(
    <div className="cardsBox">
      {renderFlags()}
    </div>
  )
}
export default Gameboard;