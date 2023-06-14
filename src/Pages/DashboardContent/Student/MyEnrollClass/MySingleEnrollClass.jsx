import React from 'react';

const MySingleEnrollClass = ({singleClassEnroll}) => {
    const singleClass=singleClassEnroll.paymentData.body
    return (
        <div className="card w-full bg-[#141937]  shadow-xl my-5">
          <figure className="px-10 pt-10">
            <img
              src={singleClass?.image}
              alt="ClassName"
              className="rounded-xl min-w-full
          max-w-full min-h-[250px] max-h-[250px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <div className="flex justify-between w-full">
              <h2 className="card-title text-white">{singleClass.ClassName}</h2>
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
              <button className="btn btn-danger mt-5">Select</button>
            </div>
          </div>
        </div>
    );
};

export default MySingleEnrollClass;