import React from "react";

const fName = "hello";
const lName = "hii";
const num = 7;

function Lists() {
  return (
    <div>
      <h1>
        Hi, {fName} {lName}
      </h1>
      <ul>
        <li> part 1</li>
        <li> part 2</li>
        <li> part 3</li>
      </ul>
      <p>your lucky number is {num}</p>
    </div>
  );
}

export default Lists;
