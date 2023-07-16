import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const apiKey="c24367afd773f4bf2005789f38730cc9"
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${apiKey}`

  const onSubmit = data => {
        
    const formData = new FormData();
    console.log(data)
    formData.append('image', data.classImage[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {ClassName,Price,InstructorName,AvailableSeats,InstructorEmail,classImage,status} = data;
            const newItem = {ClassName, Price: parseFloat(Price), InstructorName, InstructorEmail,AvailableSeats,status, image:imgURL}
            console.log(newItem)
            axiosSecure.post('/dashboard/instructor/addClass', newItem)
            .then(data => {
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added  successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })

};

  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("ClassName", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              {...register("InstructorName", { required: true })}
              placeholder="Instructor Name"
              className="input input-bordered w-full disabled"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Available seats</span>
            </label>
            <input
              type="number"
              {...register("AvailableSeats", { required: true })}
              placeholder="Available Seats"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("Price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            value={user?.email}
            {...register("InstructorEmail", { required: true })}
            className="input input-bordered w-full disabled"
            placeholder="Instructor Email"
          ></input>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("classImage", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            {...register("status")}
            className="file-input file-input-bordered w-full disabled ps-5"
            value="pending"
          />
        </div>
        <input className="btn btn-sm mt-4 " type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
