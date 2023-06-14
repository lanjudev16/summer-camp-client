import React from "react";

const SingleInstructor = ({instructor}) => {
  return (
    <div className="card w-full  bg-[#141937] shadow-xl my-5">
      <figure className="px-10 pt-10">
        <img
          src={instructor.image}

          alt="Instructor"
          className="rounded-xl w-full object-cover h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{instructor.name}</h2>
        <p className="text-white">{instructor.email}</p>
        <div className="card-actions">
          <button className="btn btn-danger">{!instructor.UserRole?"Student":instructor.UserRole} </button>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
