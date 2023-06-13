import React, { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
           {bookingData?.map((bookingClass,index) => (
            <>
              <tr >
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={bookingClass?.body?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {bookingClass?.body?.ClassName}
                </td>
                <td>{bookingClass?.body?.Price}</td>
                <td>{bookingClass?.body?.AvailableSeats}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
                <th>
                  <Link  to={`/dashboard/student/Payment/${bookingClass._id}`}><button className="btn btn-ghost btn-xs">Pay</button></Link>
                </th>
              </tr>
            </>
          ))} 
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingClass;
