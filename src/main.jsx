import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fontsource/inter";

import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Sell from "./pages/Sell.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import NotDevelopYet from "./components/NotDevelopYet.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotDevelopYet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
