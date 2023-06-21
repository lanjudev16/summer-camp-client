import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery,useQueryClient  } from "@tanstack/react-query";
import MySIngleBooking from "./MySIngleBooking";
const MyBookingClass = () => {
  const { user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  //delete
  const handleDeleteBooking=(id)=>{
    axiosSecure.delete(`/bookingDelete/${id}`);
  }
  // state
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/isBooking/${user?.email}`).then(res=>res.json()).then(data=>{
      setData(data)
    })
  },[handleDeleteBooking])
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
           {data?.map((bookingClass,index) =><MySIngleBooking handleDeleteBooking={handleDeleteBooking} bookingClass={bookingClass} key={index} index={index}></MySIngleBooking>)} 
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingClass;
