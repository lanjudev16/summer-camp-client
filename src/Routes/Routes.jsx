import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";

  export const router = createBrowserRouter([
    {
        path:"/",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"admin",
                element:<div>Ami dash</div>
            }
        ]
    }
  ]);