import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAuth from "../../../hook/useAuth";
import PopularSection from "../PopularSection/PopularSection";
import SinglePopularClass from "../PopularSection/SinglePopularClass";
import SinglePopularInstructor from "./SinglePopularInstructor";
const PopularInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data:topInstructor, refetch } = useQuery({
      queryKey: ["topInstructor"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/topInstructor`);
        return res.data;
      },
    });
    console.log(topInstructor)
    return (
        <div>
            <h2 className="text-3xl font-extrabold text-center">Top Instructor</h2>
            <div className="grid lg:grid-cols-3 mx-9 gap-5">
                {
                    topInstructor.slice(0,6)?.map((popularInstructor,index)=><SinglePopularInstructor key={index} popularInstructor={popularInstructor}>

                    </SinglePopularInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;