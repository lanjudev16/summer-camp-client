import { NavLink, Outlet } from "react-router-dom";
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
} from "react-icons/fa";
import "./Dashboard.css";
const Dashboard = () => {
  // is instructor
  const isInstructor = true;
  const isAdmin = false;
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
            <h2 className="text-[#A2A6C1] text-2xl ">
              <span className="text-[#7367F0]">Clean</span>simple
            </h2>
            <h4 className="text-[#A2A6C1] my-4">Admin panel</h4>
          </div>
          {isInstructor ? (
            <>
              <li>
                <NavLink to='/dashboard/instructor/addClass' className="text-[#A2A6C1]  p-3 bg-transparent text-lg hover:bg-[#6B62D0] hover:text-[#FFFFFF]">
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
            <>Admin</>
          ) : (
            <>Student</>
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
