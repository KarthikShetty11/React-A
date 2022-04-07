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

function App() {
  return (
    <div>
      <ul>
        <li>{add(5, 6)}</li>
        <li>{subtract(9, 5)}</li>
        <li>{multiply(2, 4)}</li>
        <li>{divide(6, 3)}</li>
      </ul>

      <Datee />
      <Lists />
      <Content />
    </div>
  );
}
export default App;
