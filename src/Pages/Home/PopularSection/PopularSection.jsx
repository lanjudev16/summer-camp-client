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
    <div className=" mx-9">
        <h2 className="font-extrabold text-3xl text-center">Popular class</h2>
      <div className="grid lg:grid-cols-3 gap-5">
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
