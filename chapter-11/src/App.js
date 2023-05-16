import React from "react";
import { useRoutes } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from "./pages";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/events", element: <Events /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return element;
}

export default App;