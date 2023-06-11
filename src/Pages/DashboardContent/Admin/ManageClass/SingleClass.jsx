import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleClass = ({ classItem, index }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  console.log(classItem.status);
  const handleApprovedButtonClick = (id) => {
    fetch(`http://localhost:5000/dashboard/admin/manageClass/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update");
        }
      });
    setIsButtonDisabled(true);
  };

  const handleDenied = (id) => {
    fetch(`http://localhost:5000/dashboard/admin/manageClass/denied/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update");
        }
      });
    setIsButtonDisabled(true);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classItem?.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{classItem?.ClassName}</td>
      <td>{classItem?.InstructorName}</td>
      <td>{classItem?.InstructorEmail}</td>
      <td>{classItem?.AvailableSeats}</td>
      <td>{classItem?.Price}</td>
      <td className="text-center">
        <Link to={`/dashboard/admin/feedback/${classItem._id}`} >
          <button className="btn btn-warning mb-5">Send FeedBack</button>
        </Link>
        {classItem.status === "approved" ? (
          <button disabled={true} className="btn btn-warning mb-5">
            approved
          </button>
        ) : (
          <>
            {classItem.status === "denied" ? (
              <>
                {" "}
                <button disabled={true} className="btn btn-warning mb-5">
                  approved
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => handleApprovedButtonClick(classItem._id)}
                  disabled={isButtonDisabled}
                  className="btn btn-warning mb-5"
                >
                  approved
                </button>
              </>
            )}
          </>
        )}
        <br />
        {classItem.status === "approved" ? (
          <>
            <button disabled={true} className="btn btn-success ">
              denied
            </button>
          </>
        ) : (
          <>
            {classItem.status === "denied" ? (
              <>
                {" "}
                <button
                  onClick={() => handleDenied(classItem._id)}
                  disabled={true}
                  className="btn btn-success "
                >
                  denied
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => handleDenied(classItem._id)}
                  disabled={isButtonDisabled}
                  className="btn btn-success "
                >
                  denied
                </button>
              </>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default SingleClass;
