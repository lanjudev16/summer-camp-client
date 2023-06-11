import React, { useState } from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleClass from "./SingleClass";

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classData = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/dashboard/admin/manageClass");
    return res.data;
  });

  return (
    <div data-theme="night" className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Class Image</th>
            <th>Class name</th>
            <th>Instructor name</th>
            <th>Instructor email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, index) =><SingleClass classItem={classItem} index={index} key={index}></SingleClass> )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
