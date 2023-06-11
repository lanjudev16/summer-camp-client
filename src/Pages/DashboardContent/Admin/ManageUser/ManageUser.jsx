import React from 'react';
import useAxiosSecure from '../../../../hook/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure]=useAxiosSecure()
    axiosSecure.get('/dashboard/admin/manageUser').then(result=>{
        console.log(result)
    })
    return (
        <div>
            
        </div>
    );
};

export default ManageUser;