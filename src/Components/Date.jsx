import React from "react";

const date = new Date();
const time = date.getHours;
console.log(time);
const customStyle = {
  color: ""
};

var message;
if (time < 12) {
  message = "good morning";
  customStyle.color = "red";
} else if (time < 18) {
  message = "good Afternoon";
  customStyle.color = "blue";
} else if (time < 21) {
  message = "good evening";
  customStyle.color = "green";
} else {
  message = "good night";
  customStyle.color = "yellow";
}

function Date() {
  return message;
}

export default Date;
