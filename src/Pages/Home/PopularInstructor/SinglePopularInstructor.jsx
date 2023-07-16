import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SinglePopularInstructor = ({ popularInstructor }) => {
  return (
    <Fade>
      <div className="card w-full bg-white   shadow-lg my-5 py-8 px-6">
          <img
            src={popularInstructor.image}
            alt="Instructor"
            className="rounded-xl  object-cover "
          />
        <div>
          <h2 className="text-[#413960] text-2xl mt-2 font-medium">
            {popularInstructor.name}
          </h2>
          <p className="text-[#4c696d]">{popularInstructor.email}</p>
        </div>
        <div className="flex items-center  gap-5 my-3 text-xl text-[#413960]"><FaFacebook></FaFacebook><FaTwitter></FaTwitter><FaLinkedin></FaLinkedin></div>
        <button className="text-xl w-full bg-[#21B573] text-white rounded-md px-5 py-2">Details</button>
      </div>
    </Fade>
  );
};

export default SinglePopularInstructor;
