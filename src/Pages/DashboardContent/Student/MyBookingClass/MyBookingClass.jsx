import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MySIngleBooking from "./MySIngleBooking";

const MyBookingClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  //booking
  const { data: bookingData, refetch: bookingRefetch } = useQuery({
    queryKey: ["booking", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/isBooking/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto w-full "data-theme="dark">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              No.
            </th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Delete</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
           {bookingData?.map((bookingClass,index) =><MySIngleBooking bookingClass={bookingClass} key={index} index={index}></MySIngleBooking>)} 
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingClass;
