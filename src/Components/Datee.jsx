import React from "react";

function Datee() {
  const date = new Date();
  const time = date.getHours();

  const customStylee = {
    color: ""
  };

  let message;

  if (time < 12) {
    message = "good morning";
    customStylee.color = "red";
  } else if (time < 18) {
    message = "good Afternoon";
    customStylee.color = "blue";
  } else if (time < 21) {
    message = "good evening";
    customStylee.color = "green";
  } else {
    message = "good night";
    customStylee.color = "yellow";
  }
  return (
    <h1 style={customStylee}>
      {" "}
      {message} {time} O'clock
    </h1>
  );
}

export default Datee;
