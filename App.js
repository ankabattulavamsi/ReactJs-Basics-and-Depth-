import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hi Reactjs");

const root = ReactDOM.createRoot(document.getElementById("root"));

const headingjsx = <h1 id="heading">Hi this jsx element</h1>;

console.log(headingjsx);

root.render(headingjsx);
