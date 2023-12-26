import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroSection } from "./Pages/HeroSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: ({ params }) => {
      return params;
    },
    element: <App />,
    children: [
      {
        path: '',
        element: <HeroSection />
      }
      , {
        path: '/account',
        element: <h1>Account</h1>
      }, {
        path: "/contact",
        element: <h1>Contact</h1>
      }, {
        path: '/shop',
        element: <h1>shop</h1>
      }]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
