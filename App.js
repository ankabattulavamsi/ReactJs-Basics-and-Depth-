import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hi Reactjs");

const headingjsx = <h1 id="heading">Hi this jsx element</h1>;

const elem = <h3>Hi this an element</h3>;

const TitleElem = () => <h4>i'm from title TitleElem</h4>;

const TitleComponent = () => <h2>i'm from title TitleComponent</h2>;

const TitleComponent2 = () => (
  <h2>i'm from title TitleComponent2 to access fun expression</h2>
);

//Component Composition
const HeadingComponent = () => {
  return (
    <div>
      {elem}
      <TitleComponent />
      <TitleElem></TitleElem>
      {TitleComponent2()}
      <h1 className="heading">Hello from JSX </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
