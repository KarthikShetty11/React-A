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
import Date from "./Date";
import Content from "./Content";

function App() {
  return (
    <div>
      <Date />
      <Lists />
      <Content />
    </div>
  );
}
export default App;
