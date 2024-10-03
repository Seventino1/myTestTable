import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/reset.css";
import "./styles/main.css";
import { MainPage } from "./pages/MainPage";
import { PlanPage } from "./pages/PlanPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "plan",
    element: <PlanPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gradient">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
