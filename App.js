import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
const jsxHeading = (
<h1 className="head">Namaste from JSX</h1>
);

//React Component type:
// 1. Class Based Component - OLD way
// 2. Funtional component - NEW way


// Functional Component (rturn a react eleement)

const num = 6;

const Title = () => (
    <h1 className="head">Namaste from Title</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1>Namaste {jsxHeading}  React from {num} Functional Component </h1>
    </div>
);

// const HeadingComponent2 = () => (
//     <h1 className="heading">Namaste React from Functional Component </h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); //render react element 
root.render(<HeadingComponent/>); // render functional component
