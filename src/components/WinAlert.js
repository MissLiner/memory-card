import { useEffect } from "react";

const WinAlert = (props) => {
  const { score } = props;

  useEffect(() => {
    if(score === 16) {
      alert("You made it through the whole deck! Can you do it again? New picks will continue to add to your score");
    } else if(score === 32) {
      alert("WOW!! You did it again! Can you get through a third deck?");
    } else if(score === 48) {
      alert("Either you've got a photographic memory, or you're cheating! We've run out of decks, starting you back at 0");
    }
  }, [score])
}
export default WinAlert;