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
import { Products } from "./Pages/Product.jsx";
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
        path: "/products",
        children: [
          {
            path: ":productId",
            element: <Products />,
            loader: async ({ params }) => {
              try {
                const response = await fetch(
                  `http://localhost:5000/api/product/${params.productId}`
                );

                // Check if the response status is OK (200)
                if (response.ok) {
                  // Read the JSON content from the response body
                  const productData = await response.json();
                  return productData;
                } else {
                  console.error(
                    "Error fetching product data:",
                    response.statusText
                  );
                  // Handle the error appropriately, e.g., redirect to an error page
                  return null;
                }
              } catch (error) {
                console.error("Error fetching product data:", error);
                // Handle the error appropriately, e.g., redirect to an error page
                return null;
              }
            },
          },
        ],
      },
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
