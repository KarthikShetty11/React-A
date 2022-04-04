// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";

const name = "Karthik";
const currentDate = new Date();
const year = currentDate.getFullYear();
const customStyle = {
  color: "grey",
  fontSize: "1rem"
};

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      Hi, {name}
    </h1>
    <p style={{ color: "red" }}>Created by {name}</p>
    <p style={customStyle}>Copyright {year} </p>
    <div>
      <img
        className="img"
        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf4f8db9-3d2a-46de-a264-2bb944c682cc/revolution-6-next-nature-road-running-shoes-NC0P7k.png"
        alt="shoeImage"
      ></img>
      <img
        className="img"
        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8be7530-e1c8-4069-a469-3af53ba55009/downshifter-11-road-running-shoes-ggx1m6.png"
        alt="shoeImage"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);

// const fName = "Karthik";
// const lName = "Shetty";
// const num = 7;

// ReactDOM.render(
//   <div>
//     <h1>
//       Hi, {fName} {lName}
//     </h1>
//     <ul>
//       <li> part 1</li>
//       <li> part 2</li>
//       <li> part 3</li>
//     </ul>
//     <p>your lucky number is {num}</p>
//   </div>,
//   document.getElementById("root")
// );
