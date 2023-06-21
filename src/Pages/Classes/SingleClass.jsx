import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const SingleClass = ({ singleClass }) => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user?.email}`);
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
  //handle booking
  const handleBooking = (id) => {
    axiosSecure
      .post(`/isBooking?id=${id}&&email=${user?.email}`, singleClass)
      .then((data) => {
        if (data?.data?.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully booking complete',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };

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
                  Class Name: {singleClass.ClassName}
                </h2>
                <h2 className="card-title text-white">
                  Price: {singleClass.Price}
                </h2>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-white text-left">
                  Instructor Name: {singleClass.InstructorName}
                </p>
                <p className="text-white text-right">
                  Available Seats {singleClass.AvailableSeats}
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
                <h2 className="card-title text-white">
                  Price :{singleClass.Price}
                </h2>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-white text-left">
                  Instructor Name: {singleClass.InstructorName}
                </p>
                <p className="text-white text-right">
                  Available Seats {singleClass.AvailableSeats}
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
                ) : singleClass.AvailableSeats <= 0 ? (
                  <>
                    <button disabled={true} className="btn btn-danger">
                      Select
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        user
                          ? handleBooking(singleClass._id)
                          : Swal.fire({
                              title: "Login first ",
                              showClass: {
                                popup: "animate__animated animate__fadeInDown",
                              },
                              hideClass: {
                                popup: "animate__animated animate__fadeOutUp",
                              },
                            })
                      }
                      className="btn btn-danger mt-5"
                    >
                      Select course
                    </button>
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
