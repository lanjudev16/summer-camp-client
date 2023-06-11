import React from "react";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useParams } from "react-router-dom";

const FeedBack = () => {
    const [axiosSecure]=useAxiosSecure()
    const params=useParams()
    const id = params.id
    const handleSubmit=(event)=>{
        event.preventDefault()
        const feedback=event.target.feedback.value
        // fetch('http://localhost:5000/dashboard/admin/feedback', {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(feedback)
        // })
        axiosSecure.put(`/dashboard/admin/feedback/${id}`,{feedback}).then(result=>{
            console.log(result)
        })
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <textarea  name="feedback" className="mt-[10px] w-full textarea textarea-bordered h-24"  placeholder="Write your feed back"></textarea>
        <input  className="btn btn-danger" type="submit" value="Send FeedBack" />
      </form>
    </div>
  );
};

export default FeedBack;
