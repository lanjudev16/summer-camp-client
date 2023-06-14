import React from 'react';

const SinglePopularInstructor = ({popularInstructor}) => {
    return (
        <div className="card w-full  bg-[#141937] shadow-xl my-5">
        <figure className="px-10 pt-10">
          <img
            src={popularInstructor.image}
  
            alt="Instructor"
            className="rounded-xl w-full object-cover h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{popularInstructor.name}</h2>
          <p className="text-white">{popularInstructor.email}</p>
        </div>
      </div>
    );
};

export default SinglePopularInstructor;