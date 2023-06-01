import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/OurMenu/Menu/Menu";
import ShopLocation from "../pages/ShopLocation/ShopLocation";
import Contact from "../pages/Contact/Contact";
import Order from "../pages/Order/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/menu",
          element: <Menu></Menu>
        },
        {
          path:"/shoplocation",
          element: <ShopLocation></ShopLocation>
        },
        {
          path:"/contact",
          element: <Contact></Contact>
        },
        {
          path:"/order",
          element: <Order></Order>
        }
      ]
    },
  ]);