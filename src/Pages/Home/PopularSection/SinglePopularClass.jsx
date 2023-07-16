import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaCalendar, FaUser } from "react-icons/fa";

const SinglePopularClass = ({ singleClass }) => {
  return (
    <Fade>
      <div>
        <div className="card w-full bg-white   shadow-lg my-5 py-8 px-3">
          <img
            src={singleClass.image}
            alt="ClassName"
            className="rounded-xl px-3 object-cover"
          />
          <div className="px-3">
            <div>
              <h2 className="text-[#413960] text-2xl mt-2 font-medium">
                {singleClass.ClassName}
              </h2>
              <p className="text-base text-[#585859]">
                {singleClass.InstructorName}
              </p>
            </div>
            <button className="bg-[#21B573] px-5 my-3 py-2 rounded-full text-[12px] text-white">
              Buy Course
            </button>
            <div className="flex justify-between w-full">
              <p className="text-[#4c696d] font-medium text-right flex items-center gap-3">
                <FaCalendar></FaCalendar> {singleClass.date}
              </p>
              <p className="flex items-center gap-3">
                <FaUser></FaUser> {singleClass.AvailableSeats}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SinglePopularClass;
