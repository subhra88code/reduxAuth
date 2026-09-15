import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import Shop from "../pages/Shop";
import About from "../pages/About";

const AppRoutes = () => {
  let dispatch = useDispatch();
  const hydrateUser = () => {
    let loggedInUser = localStorage.getItem("logedInUser");
    if (!loggedInUser) {
      toast.error("unauthorized user");
      return;
    }
    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <AppLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: 'shop',
              element: <Shop/>
            },
            {
              path: 'about',
              element: <About/>
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
