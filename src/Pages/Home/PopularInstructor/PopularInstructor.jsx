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
      <div className="py-10 px-[36px] ">
        <h3 className="text-4xl mb-2 text-[#4C696D] font-bold">
          Top Instructor
        </h3>
        <h4 className="text-xl font-light text-[#0C0C0C]">
          Discover the range of services provided by FliqaIndia
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 mx-9 gap-5">
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
