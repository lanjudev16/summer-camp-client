import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const InstructorRoute = ({ children }) => {
    const { user:isInstructor, loading } = useContext(AuthContext);
    const location = useLocation();
    const [axiosSecure]=useAxiosSecure()
    const {data}=useQuery({
        queryKey:['isInstructor'],
        queryFn:async()=>{
            const res=await axiosSecure(`/isInstructor/${user?.email}`)
            return res.data
        }
    })
    console.log(isInstructor)
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;