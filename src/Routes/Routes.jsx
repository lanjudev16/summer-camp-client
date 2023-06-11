import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import DashboardContent from "../Pages/DashboardContent/DashboardContent/DashboardContent";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddClass from "../Pages/DashboardContent/Instructor/AddClass/AddClass";

  export const router = createBrowserRouter([
    
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },
    {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"/dashboard",
                element:<DashboardContent></DashboardContent>
            },
            {
              path:"/dashboard/instructor/addClass",
              element:<AddClass></AddClass>
            }
        ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/signup",
      element:<SignUp></SignUp>
    },
  ]);