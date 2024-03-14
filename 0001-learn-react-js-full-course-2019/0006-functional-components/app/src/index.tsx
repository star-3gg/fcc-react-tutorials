import React from "react";
import ReactDOM from "react-dom";

// INFO: Use Constructor convention of capital camel-case for all react components
// This is a very strong convention in react
//
function MyApp() {
  // INFO: It is always a good idea to wrap the returned JSX in parntheses
  // INFO: Another convention is to put every element on its own line.
  // This way it reads a lot more like HTML
  return (
    <ul>
      <li>Anything</li>
      <li>you</li>
      <li>want</li>
    </ul>
  );
}

// An instance of this component can now be returned to the virtual dom
ReactDOM.render(<MyApp />, document.getElementById("root"));
