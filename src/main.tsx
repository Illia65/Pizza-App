import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";
// import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import { Layout } from "./Layout/Layout.Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";
// import { Product } from "./pages/Product/Product.tsx";

const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/menu",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>, // обработчик ошибки если роутер не правельный
        loader: async ({ params }) => {
          return defer({
            data:axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
          });
          // await new Promise<void>((resolve) => {
          //   setTimeout(() => {
          //     resolve();
          //   }, 1000);
          // });
          // const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          // return data;
        },
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
