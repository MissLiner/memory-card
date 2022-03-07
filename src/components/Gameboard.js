import React from "react";
import uniqid from "uniqid";
import { flagArray } from "./flagArray";
import "../App.css"

const Gameboard = (props) => {
  const { clickFunc, score } = props;

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
            className="cardBox" 
            key={keyID}
            data-name={flag.name} 
            onClick={clickFunc}>
            <img 
              data-name={flag.name} 
              className="flagImg" 
              src={flag.image} 
              alt={flag.text + " image"}>
            </img>
            <div className="flagText" data-name={flag.name} >{flag.text}</div>
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