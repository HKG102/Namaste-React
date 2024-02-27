import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Hi this is Heading.");
console.log(heading);
// JSX (transpiled before it reaches the JS Engine) - PARCEL transpiled it, using package Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste from JSX</h1>;
console.log(jsxHeading);// both heading and jsxHeading are same.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);