import React from 'react';
import '../App.css';

const ShowMessage = (props) => {
  const { message, clickFunc } = props;
    const messages = {
    win1: ["WIN!", "You made it through the whole deck! Starting with a new deck, can you do it again?"],
    win2: ["WIN 2!", "You did it again! Can you run through the deck a THIRD time?!?"],
    win3: ["WIN 3!", "You're either a memory genius, or you're cheating! Either way, you're starting back at 0"],
    startGame: ["Welcome!",  "How to play the Sun Flag Memory Card game: Click on a card, get a point, just don't click the same card twice. Happy clicking!"],
    none: ["", ""]
  }
  if(message !== "none") {
    return(
      <div className="messageBox">
        <div className="messageTitle">{messages[message][0]}</div>
        <div className='messageText'>{messages[message][1]}</div>
        <button className="messageBtn" onClick={clickFunc}>Let's Play!</button>
      </div>
    )
  } else {
    return null;
  }
}
export default ShowMessage;