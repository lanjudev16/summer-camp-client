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
  const { data: topInstructor, refetch } = useQuery({
    queryKey: ["topInstructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/topInstructor`);
      return res.data;
    },
  });
  console.log(topInstructor);
  return (
    <div>
      <div className="lg:py-10 lg:px-[36px] px-3 my-5">
        <h3 className="lg:text-4xl text-xl mb-2 text-[#4C696D] font-bold text-center">
          Top Instructor
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 lg:mx-9 mx-3 gap-5">
        {topInstructor?.slice(0, 6)?.map((popularInstructor, index) => (
          <SinglePopularInstructor
            key={index}
            popularInstructor={popularInstructor}
          ></SinglePopularInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
