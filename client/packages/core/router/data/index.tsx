import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menupage } from "@zocom/menupage";
import { Myorderpage } from "@zocom/myorderpage";
import { Checkoutpage } from '@zocom/checkoutpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menupage />,
  },
  {
    path: "/cart",
    element: <Myorderpage />,
  },
  {
      path: "/checkout",
      element: <Checkoutpage />
  },
  // {
  //     path: "/receipt",
  //     element: <Receiptpage />
  // },
  // {
  //     path: "/staff/overview",
  //     element: <Overviewpage />
  // },
  {
    path: "*",
    element: <h3>Page Not Found</h3>,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
