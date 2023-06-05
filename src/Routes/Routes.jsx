import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import DashboardContent from "../Pages/DashboardContent/DashboardContent/DashboardContent";

  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/",
                element:<DashboardContent></DashboardContent>
            }
        ]
    }
  ]);