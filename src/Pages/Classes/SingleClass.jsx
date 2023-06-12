import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SingleClass = ({ singleClass }) => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user.email}`);
      return res.data;
    },
  });
  let isAdmin;
  let isStudent;
  let isInstructor;
  if (data?.UserRole === "admin") {
    isAdmin = true;
  } else if (data?.UserRole === "instructor") {
    isInstructor = true;
  } else {
    isStudent = true;
  }

  return (
    <div>
      {singleClass.AvailableSeats == 0 ? (
        <>
          <div className="card w-full bg-[#a72e2e]  shadow-xl my-5">
            <figure className="px-10 pt-10">
              <img
                src={singleClass.image}
                alt="ClassName"
                className="rounded-xl min-w-full
          max-w-full min-h-[250px] max-h-[250px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex justify-between w-full">
                <h2 className="card-title text-white">
                  {singleClass.ClassName}
                </h2>
                <h2 className="card-title text-white">{singleClass.Price}</h2>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-white text-left">
                  {singleClass.InstructorName}
                </p>
                <p className="text-white text-right">
                  {singleClass.AvailableSeats}
                </p>
              </div>
              <div className="card-actions">
                {isAdmin ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : isInstructor ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : singleClass.AvailableSeats == 0 ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-danger">Select</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card w-full bg-[#141937]  shadow-xl my-5">
            <figure className="px-10 pt-10">
              <img
                src={singleClass.image}
                alt="ClassName"
                className="rounded-xl min-w-full
          max-w-full min-h-[250px] max-h-[250px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex justify-between w-full">
                <h2 className="card-title text-white">
                  {singleClass.ClassName}
                </h2>
                <h2 className="card-title text-white">{singleClass.Price}</h2>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-white text-left">
                  {singleClass.InstructorName}
                </p>
                <p className="text-white text-right">
                  {singleClass.AvailableSeats}
                </p>
              </div>
              <div className="card-actions">
                {isAdmin ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : isInstructor ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : singleClass.AvailableSeats == 0 ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-danger">Select</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleClass;
