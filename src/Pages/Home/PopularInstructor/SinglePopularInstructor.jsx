import React from "react";
import { Fade } from "react-awesome-reveal";

const SinglePopularInstructor = ({ popularInstructor }) => {
  return (
    <Fade>
      <div className="card w-full  bg-[#ddf8f3] shadow-xl my-5">
        <figure className="px-10 pt-10">
          <img
            src={popularInstructor.image}
            alt="Instructor"
            className="rounded-xl w-full object-cover h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#4c696d]">
            {popularInstructor.name}
          </h2>
          <p className="text-[#4c696d]">{popularInstructor.email}</p>
        </div>
      </div>
    </Fade>
  );
};

export default SinglePopularInstructor;
