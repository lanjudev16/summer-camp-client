import React, { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyBookingClass = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data,isError,isLoading,refetch}=useQuery({
        queryKey:['booking',user.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure(`/dashboard/student/booking/${user.email}`);
            return res.data
        }
    })
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default MyBookingClass;