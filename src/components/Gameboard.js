import React from "react";
import uniqid from "uniqid";
import AntiguaAndBarbuda from "../resources/AntiguaAndBarbuda.png";
import Argentina from "../resources/Argentina.png";
import Guadeloupe from "../resources/Guadeloupe.png";
import Japan from "../resources/Japan.png";
import Kazakhstan from "../resources/Kazakhstan.png";
import Kiribati from "../resources/Kiribati.png";
import Kyrgyzstan from "../resources/Kyrgyzstan.png";
import Macedonia from "../resources/Macedonia.png";
import Malawi from "../resources/Malawi.png";
import Malaysia from "../resources/Malaysia.png";
import Namibia from "../resources/Namibia.png";
import Nepal from "../resources/Nepal.png";
import Phillipines from "../resources/Phillipines.png";
import Rwanda from "../resources/Rwanda.png";
import Taiwan from "../resources/Taiwan.png";
import Uruguay from "../resources/Uruguay.png";
import "../App.css"

const Gameboard = (props) => {
  const flagsInfo = [
    {image: AntiguaAndBarbuda, text: "Antigua & Barbuda"},
    {image: Argentina, text: "Argentina"},
    {image: Guadeloupe, text: "Guadeloupe"},
    {image: Japan, text: "Japan"},
    {image: Kazakhstan, text: "Kazakhstan"},
    {image: Kiribati, text: "Kiribati"},
    {image: Kyrgyzstan, text: "Kyrgyzstan"},
    {image: Macedonia, text: "Macedonia"},
    {image: Malawi, text: "Malawi"},
    {image: Malaysia, text: "Malaysia"},
    {image: Namibia, text: "Namibia"},
    {image: Nepal, text: "Nepal"},
    {image: Phillipines, text: "Phillipines"},
    {image: Rwanda, text: "Rwanda"},
    {image: Taiwan, text: "Taiwan"},
    {image: Uruguay, text: "Uruguay"},
  ];
  const renderedFlags =
    flagsInfo.map((flag) => {
      const keyID = uniqid();
      return(
        <div className="cardBox" key={keyID}>
          <img src={flag.image} alt={flag.text + " image"}></img>
          <div>{flag.text}</div>
        </div>
      )
    }
  )

  return(
    <div className="cardsBox">
      {renderedFlags}
    </div>
  )
}
export default Gameboard;