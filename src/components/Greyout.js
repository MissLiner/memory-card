import React from "react";

const Greyout = (props) => {
  const { message } = props;

  if(message !== "none") {
    return(
      <div className="filter"></div>
    )
  } else {
    return null;
  }
}
export default Greyout;