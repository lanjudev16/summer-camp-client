import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import useAuth from "../../../../hook/useAuth";
import MySingleEnrollClass from "./MySingleEnrollClass";

const MyEnrollClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["enrollClass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/enrollClass/${user?.email}`);
      return res.data;
    },
  });
  console.log(data)
  return (
    <div>
      <div className="grid lg:grid-cols-3 mx-9 gap-5">
        {
            data?.map((singleClass,index)=><MySingleEnrollClass key={index} singleClassEnroll={singleClass}></MySingleEnrollClass>)
        }
      </div>
    </div>
  );
};

export default MyEnrollClass;
