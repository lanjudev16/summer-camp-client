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
import PrivateRoute from "./PrivateRoute";
import ManageClass from "../Pages/DashboardContent/Admin/ManageClass/ManageClass";
import ManageUser from "../Pages/DashboardContent/Admin/ManageUser/ManageUser";
import FeedBack from "../Pages/DashboardContent/Admin/ManageClass/FeedBack";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import MyBookingClass from "../Pages/DashboardContent/Student/MyBookingClass/MyBookingClass";
import Payment from "../Pages/DashboardContent/Student/MyBookingClass/Payment";
import MyEnrollClass from "../Pages/DashboardContent/Student/MyEnrollClass/MyEnrollClass";
import ErrorPage from "../Pages/ErrorPage";
import MyClasses from "../Pages/Instructor/MyClasses/MyClasses";

  export const router = createBrowserRouter([
    
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/instructor",
          element:<Instructor></Instructor>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        }
      ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"/dashboard",
                element:<PrivateRoute><DashboardContent></DashboardContent></PrivateRoute>
            },
            {
              path:"/dashboard/instructor/addClass",
              element:<PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
              path:'/dashboard/admin/ManageClass',
              element:<PrivateRoute><ManageClass></ManageClass></PrivateRoute>
            },
            {
              path:'/dashboard/admin/ManageUser',
              element:<PrivateRoute><ManageUser></ManageUser></PrivateRoute>
            },
            {
              path:"/dashboard/admin/feedback/:id",
              element:<PrivateRoute><FeedBack></FeedBack></PrivateRoute>
            },
            {
              path:"/dashboard/student/booking/",
              element:<PrivateRoute><MyBookingClass></MyBookingClass></PrivateRoute>
            },
            {
              path:"/dashboard/student/Payment/:id",
              element:<Payment></Payment>
            },
            {
              path:"/dashboard/student/myEnrollClass",
              element:<PrivateRoute><MyEnrollClass></MyEnrollClass></PrivateRoute>
            },
            {
              path:"/dashboard/student/instructorAllClasses",
              element:<MyClasses></MyClasses>
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
    {
      path:"*",
      element:<ErrorPage></ErrorPage>
    }
  ]);