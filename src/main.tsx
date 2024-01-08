import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import { Layout } from "./Layout/Layout.Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
// import { Product } from "./pages/Product/Product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element:<Product/>
      },
    
    
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
//подключение роутинга
