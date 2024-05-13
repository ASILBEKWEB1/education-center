import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { App } from "./App";
import './App.css'
import Pricing from "./Components/Pricing";
import Courses from "./Components/Courses";
import Blog from "./Components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<LinearProgress/>,
    children: [
      {
        path: "/pricing",
        element:<Pricing/>
      },
      {
        path:"/courses",
        element:<Courses/>
      },
      {
        path:'/blog',
        element:<Blog/>
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);