import React from "react";
import { AntiguaAndBarbuda } from "./AntiguaAndBarbuda.png";
import { Argentina } from "./Argentina.png";
import "./App.css"

const Gameboard = (props) => {
  const flagsInfo = [
    {image: AntiguaAndBarbuda, text: "Antigua & Barbuda"},
    {image: Argentina, text: "Argentina"},
  ];
  const renderFlags = () => {
    flagsInfo.forEach(flag => {
      return(
        <div>
          <img src={flag.image} alt={flag.text + "image"}></img>
          <div>{flag.text}</div>
        </div>
      )
    })
  }
  return(
    <div id="gameboard">
      {renderFlags}
    </div>
  )
}
export default Gameboard;