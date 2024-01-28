import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CourseDetailsPage from "./components/Courses/CourseDetailsPage.jsx";
import CourseMain from "./components/Courses/CourseMain.jsx";
import Home from "./components/Home/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <CourseMain />,
      },
      {
        path: "/courseDetails",
        element: <CourseDetailsPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
