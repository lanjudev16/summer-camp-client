import React, { useContext } from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useState } from "react";

const SingleUser = ({ index, user,refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const [isDisableAdmin, setDisableAdmin] = useState(false);
  const [isDisableInstructor, setDisableInstructor] = useState(false);
  const handleAdmin = (id) => {
    axiosSecure.put(`/dashboard/admin/userRole/admin/${id}`).then((res) => {
        
      if (res.data.modifiedCount > 0) {
        alert("Data update");
        setDisableAdmin(isDisableAdmin?false:true);
        refetch()
      }
    });
    
  };
  const handleInstructor = (id) => {
    axiosSecure
      .put(`/dashboard/admin/userRole/instructor/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          alert("Data update");
          setDisableInstructor(isDisableInstructor?false:true);
          refetch()
        }
      });
      
  };

  return (
    <tr>
      <th className="text-xl">{index + 1}</th>
      <td className="text-xl">{user.name}</td>
      <td className="text-xl">{user.email}</td>
      {user.UserRole === "admin" ? (
        <td className="text-xl">
          <button
            disabled={true}
            onClick={() => handleAdmin(user._id)}
            className="btn btn-info"
          >
            Make Admin
          </button>
        </td>
      ) : (
        <>
          <td className="text-xl">
            <button
              disabled={isDisableAdmin}
              onClick={() => handleAdmin(user._id)}
              className="btn btn-info"
            >
              Make Admin
            </button>
          </td>
        </>
      )}
      {user.UserRole === "instructor" ? (
        <>
          <td className="text-xl">
            <button
              disabled={true}
              onClick={() => handleInstructor(user._id)}
              className="btn btn-success"
            >
              Make Instructor
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="text-xl">
            <button
              disabled={isDisableInstructor}
              onClick={() => handleInstructor(user._id)}
              className="btn btn-success"
            >
              Make Instructor
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default SingleUser;
