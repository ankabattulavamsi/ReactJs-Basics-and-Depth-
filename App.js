import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const App = () => {
  return (
    <div class=" ">
      <div class="sticky z-10 top-0">
        <Header />
      </div>
      <div class=" ">
        <Body />
      </div>
    </div>
  );
};

const routes = createBrowserRouter([{ path: "/", element: <App /> }]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routes} />);
