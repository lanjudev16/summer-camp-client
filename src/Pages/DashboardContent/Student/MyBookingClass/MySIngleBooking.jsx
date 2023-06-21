import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MySIngleBooking = ({bookingClass,index,handleDeleteBooking}) => {
    

    const [axiosSecure]=useAxiosSecure()
    const {data:paymentSuccessData,refetch}=useQuery({
        queryKey:['paymentSuccessData'],
        queryFn:async()=>{
            const res=await axiosSecure(`/dashboard/student/payment/${bookingClass._id}`)
            return res.data
        }
    })

    return (
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
            <button className="btn btn-ghost btn-xs" onClick={()=>handleDeleteBooking(bookingClass._id)}>Delete</button>
          </th>
          <th>
            <Link  to={`/dashboard/student/Payment/${bookingClass._id}`}><button className="btn btn-ghost btn-xs">Pay</button></Link>
          </th>
        </tr>
      </>
    );
};

export default MySIngleBooking;