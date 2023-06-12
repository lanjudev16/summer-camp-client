import React from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleUser from "./SingleUser";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const ManageUser = () => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users`);
      return res.data;
    },
  });
  return (
    
      <div className="overflow-x-auto "data-theme="dark">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <SingleUser
                index={index}
                user={user}
                refetch={refetch}
                key={user._id}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>

  );
};

export default ManageUser;
