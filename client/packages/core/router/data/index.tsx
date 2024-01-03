import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menupage } from "@zocom/menupage";
import { Myorderpage } from "@zocom/myorderpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menupage />,
  },
  {
    path: "/cart",
    element: <Myorderpage />,
  },
  // {
  //     path: "/confirmation",
  //     element: <Confirmation />
  // },
  // {
  //     path: "/receipt",
  //     element: <Receipt />
  // },
  // {
  //     path: "/staff/overview",
  //     element: <Overview />
  // },
  {
    path: "*",
    element: <h3>Page Not Found</h3>,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
