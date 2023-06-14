import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaAssistiveListeningSystems,
  FaBars,
  FaBeer,
  FaBell,
  FaBook,
  FaChartBar,
  FaCloudSunRain,
  FaCog,
  FaDelicious,
  FaDollarSign,
  FaHome,
  FaInbox,
  FaInstalod,
  FaList,
  FaPhone,
  FaPhoneVolume,
  FaPlus,
  FaRegStopCircle,
  FaSoundcloud,
  FaTextHeight,
  FaUser,
} from "react-icons/fa";
import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["users", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user.email}`);
      return res.data;
    },
  });
  let isAdmin;
  let isStudent;
  let isInstructor;
  if (data?.UserRole === "admin") {
    isAdmin = true;
  } else if (data?.UserRole === "instructor") {
    isInstructor = true;
  } else {
    isStudent = true;
  }
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#25293C]">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <FaBars></FaBars>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#2F3349] scroll-container">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <div>
            <Link to="/">
              <h2 className="text-[#A2A6C1] text-2xl mb-5 ">
                <span className="text-[#7367F0]">Clean</span>simple
              </h2>
            </Link>
          </div>
          {isInstructor ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/instructor/addClass"
                  className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]"
                >
                  <FaPlus></FaPlus> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]">
                  <FaBook> </FaBook> My Class
                </NavLink>
              </li>
            </>
          ) : isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/admin/ManageClass"
                  className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]"
                >
                  <FaBook></FaBook> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/admin/ManageUser"
                  className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]"
                >
                  <FaUser></FaUser> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            isStudent && (
              <>
                <NavLink
                  to={`/dashboard/student/booking`}
                  className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]"
                >
                  <div className="flex items-center"><FaPlus></FaPlus><span>Selected Classes</span></div>
                </NavLink>
                <NavLink
                  to="/dashboard/student/myEnrollClass"
                  className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]"
                >
                  <div className="flex items-center"><FaPlus></FaPlus><span>Enrolled Classes</span></div>
                </NavLink>
              </>
            )
          )}
          <div className="divider bg-[#484D6E] h-[1px] "></div>
          <h2 className="text-[#A2A6C1]  p-3 bg-transparent  text-lg">
            Insights
          </h2>
          <li>
            <NavLink className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]">
              <FaInbox></FaInbox> Inbox
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#A2A6C1]  p-3 bg-transparent  text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]">
              <FaCog></FaCog> Settings
            </NavLink>
          </li>
          <li>
            <NavLink className="text-[#A2A6C1]  p-3 bg-transparent  text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]">
              <FaBell></FaBell> Notification
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
