import React from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SinglePopularClass from "./SinglePopularClass";
import { useEffect } from "react";
import useAuth from "../../../hook/useAuth";

const PopularSection = () => {
  const { loading } = useAuth;
  const [axiosSecure] = useAxiosSecure();
  const { data: popularClass } = useQuery({
    queryKey: ["popularClass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/popularClass");
      return res.data;
    },
  });
  console.log(popularClass);
  return (
    <div className="lg:w-[1140px] mx-auto">
      <div className="lg:py-5 lg:px-[36px] ">
        <h3 className="text-[36px]  mb-2 text-[#4C696D] font-bold text-center">
        Online Courses
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 lg:gap-5">
        {popularClass
          ?.sort((a, b) => b.totalEnroll - a.totalEnroll)
          .map((singleClass, index) => (
            <SinglePopularClass
              singleClass={singleClass}
              key={index}
            ></SinglePopularClass>
          ))}
      </div>
    </div>
  );
};

export default PopularSection;
