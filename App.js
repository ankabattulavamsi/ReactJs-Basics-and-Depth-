import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi i'm Vamsi"),
    React.createElement("h2", {}, "im Ankabattula"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "im h1 tag"),
    React.createElement("h2", {}, "im h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
