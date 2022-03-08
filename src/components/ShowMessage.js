import React from 'react';

const ShowMessage = (props) => {
  const { message, clickFunc } = props;
    const messages = {
    win1: "You picked all the cards! Starting with a new deck, can you do it again?",
    win2: "You did it again! Can you run through the deck a THIRD time?!?",
    win3: "You're either a memory genius, or you're cheating! Either way, you're starting back at 0",
    startGame: "Welcome to the Sun Flag Memory Card game! You get one point for each card you click on, as long as you don't click the same card twice. Happy clicking!!",
    none: "",
  }
  return(
    <div>
      {messages[message]}
      <button onClick={clickFunc}>Let's Play!</button>
    </div>
  )
}
export default ShowMessage;