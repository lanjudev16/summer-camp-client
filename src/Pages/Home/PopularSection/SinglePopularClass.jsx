import React from "react";
import { Fade } from "react-awesome-reveal";

const SinglePopularClass = ({ singleClass }) => {
  return (
    <Fade >
      
      <div>
        <div className="card w-full bg-[#ddf8f3]  shadow-xl my-5">
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
              <h2 className="card-title text-[#4c696d] font-medium">
                {singleClass.ClassName}
              </h2>
              <h2 className="card-title text-[#4c696d] font-medium">
                Price :{singleClass.Price}
              </h2>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[#4c696d] font-medium text-left">
                Instructor Name: {singleClass.InstructorName}
              </p>
              <p className="text-[#4c696d] font-medium text-right">
                Available Seats {singleClass.AvailableSeats}
              </p>
            </div>
            <div className="card-actions">
              <button className="btn bg-[#4c696d] mt-5">Select</button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SinglePopularClass;
