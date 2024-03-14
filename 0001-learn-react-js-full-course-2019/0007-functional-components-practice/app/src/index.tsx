// Objectives
//  1. Set up the basic React code from scratch
//  2. Create a functional component called MyInfo that returns the following UI:
//    a. Am h1 with your name
//    b. A paragraph with a little blurb about yourself
//    c. An ordered list of the top 3 vacation spots you'd like to visit
//  3. Render an instance of that functional component to the browser
//  Extra challenge: learn on your own (Google) how you can add some style to your page.
//  (We will also cover this in an upcominglesson).

// Solution DIY
import ReactDOM from "react-dom";
import "./index.css";

function MyInfo() {
  return (
    <div>
      <h1>Your Name</h1>
      <p>Little blurb about yourself! :)</p>
      <ul>
        <li>Bali</li>
        <li>Morocco</li>
        <li>Lisbon</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
// Well done! :)

// Solution Instructor
// import ReactDOM from "react-dom";
// import "./index.css";
//
// function MyInfo() {
//   return (
//     <div>
//       <h1>Bob Ziroll</h1>
//       <p>This is a paragraph about me...</p>
//       <ul>
//         <li>Thailand</li>
//         <li>Japan</li>
//         <li>Nordic Countries</li>
//       </ul>
//     </div>
//   );
// }
//
// ReactDOM.render(<MyInfo />, document.getElementById("root"));
