import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hook/useAuth';
import SingleMyClasses from './SingleMyClasses';

const MyClasses = () => {
    const {user,loading}=useAuth()
    const [axiosSecure]=useAxiosSecure()
    const {data:InstructorAllClasses}=useQuery({
        queryKey:['instructorAllClass'],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure(`/instructorAllClasses/${user?.email}`)
            return res.data
        }
    })
    console.log(InstructorAllClasses)
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-5 '>
                {
                    InstructorAllClasses?.map((singleClass,index)=><SingleMyClasses key={index} singleClass={singleClass}></SingleMyClasses>)
                }
            </div>
        </div>
    );
};

export default MyClasses;