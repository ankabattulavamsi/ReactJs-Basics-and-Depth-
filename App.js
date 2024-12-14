import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import RestaurantDetails from "./src/components/RestaurantDetails";

const App = () => {
  return (
    <div class=" ">
      <div class="sticky z-10 top-0">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
