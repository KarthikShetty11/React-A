// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React from "react";
import Lists from "./Lists";
import Datee from "./Datee";
import Content from "./Content";
import { add, subtract, multiply, divide } from "./Calc";
import Card from "./Card";

function App() {
  return (
    <div>
      <ul>
        <li>Addition : {add(5, 6)}</li>
        <li>Subtration : {subtract(9, 5)}</li>
        <li>Multiplication : {multiply(2, 4)}</li>
        <li>Division : {divide(6, 3)}</li>
      </ul>

      <Datee />

      <Card
        name="ferrari"
        img="https://www.supercars.net/blog/wp-content/uploads/2020/07/wallpaperflare.com_wallpaper-10-3.jpg"
        year="2018"
      />

      <Card
        name="bugatti"
        img="https://www.supercars.net/blog/wp-content/uploads/2020/07/2017-Bugatti-Chiron-019-1600.jpg"
        year="2019"
      />
      <Card
        name="ferrari"
        img="https://www.supercars.net/blog/wp-content/uploads/2020/07/wallpaperflare.com_wallpaper-10-3.jpg"
        year="2018"
      />
      <Lists />
      <Content />
    </div>
  );
}
export default App;
