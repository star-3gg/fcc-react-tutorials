// Objective: Fill in the boilerplate React code required to render an
// unordered list (<ul>) to the page. The list should contain 3 list items
// (<li>) with anythin in them you want.
//
// HINTS:
// import the libraries you need first
// use one of the libraries to render some JSX to the page

// Solution Attempt 1
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <ul>
    <li>Anything</li>
    <li>you</li>
    <li>want</li>
  </ul>,
  document.getElementById("root"),
);
// Well done!

// Instructor Solution
// import React from "react";
// import ReactDOM from "react-dom";
//
// ReactDOM.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>,
//   document.getElementById("root"),
// );
