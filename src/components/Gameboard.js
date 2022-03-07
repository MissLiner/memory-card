import React from "react";
import AntiguaAndBarbuda from "../resources/AntiguaAndBarbuda.png";
import Argentina from "../resources/Argentina.png";
import "../App.css"

const Gameboard = (props) => {
  const flagsInfo = [
    {image: AntiguaAndBarbuda, text: "Antigua & Barbuda"},
    {image: Argentina, text: "Argentina"},
  ];
  const renderedFlags =
    flagsInfo.map((flag) =>
        <div className="cardBox">
          <img src={flag.image} alt={flag.text + " image"}></img>
          <div>{flag.text}</div>
        </div>
    )


  return(
    <div id="cardsBox">
      {renderedFlags}
    </div>
  )
}
export default Gameboard;