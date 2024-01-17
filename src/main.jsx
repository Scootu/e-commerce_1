import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroSection } from "./Pages/HeroSection.jsx";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { Cart } from "./Pages/Cart.jsx";
import { Product } from "./Pages/Product.jsx";
// register Swiper custom elements
register();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        loader: async () => {
          return await fetch("productData.json");
        },
        element: <HeroSection />,
      },
      {
        path: "/account",
        element: <h1>Account</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/shop",
        element: <h1>shop</h1>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:'/product',
        element:<Product />,
        
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
