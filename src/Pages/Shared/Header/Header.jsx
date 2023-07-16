import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaSun } from "react-icons/fa";

const Header = ({handleTheme}) => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)
  const navigate=useNavigate()
  const handleLogOut=()=>{
    logOut().then(result=>{
      if(result){
        navigate('/',{replace:true})
      }
    })
  }
  return (
    <div className="bg-[#F0FFF0]">
    <div className="lg:w-[1140px] mx-auto bg-[#F0FFF0]">
      <div className="navbar bg-transparent justify-between ">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 w-full"
            >
              <li className="hover:bg-red">
                <NavLink to="/instructor">Instructor</NavLink>
              </li>
              <li>
                <Link>Class</Link>
              </li>
            </ul>
          </div>
          <span>
            <img src="E-school.png" className="h-[59px] w-[200px] " alt="" />
          </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-5 items-center text-[#000000] ">
            <li className="hover:text-[rgb(37,180,123)] rounded text-base font-medium uppercase">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[rgb(37,180,123)] rounded text-base font-medium uppercase">
            <NavLink to="/instructor">Instructor</NavLink>
            </li>
            <li className="hover:text-[rgb(37,180,123)] rounded text-base font-medium uppercase">
            <NavLink to="/classes">Class</NavLink>
            </li>
            {user ? (
              <>
                <li className="hover:text-[rgb(37,180,123)] rounded text-base font-medium uppercase">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:text-[rgb(37,180,123)] rounded text-base font-medium uppercase">
                  <Link to="/dashboard"><img className="h-[50px] min-w-[50px] rounded-[100%]" src={user?.photoURL} alt="" /></Link>
                </li>
                <li onClick={handleLogOut} className="hover:text-white py-2 px-8 bg-[#21B573] text-white rounded-full text-base font-medium uppercase">
                  <Link to="/login">Logout</Link>
                </li>

              </>
            ) : (
              <>
                {" "}
                <li className="hover:text-white py-3 px-10 bg-[#21B573] text-white rounded-full text-base font-medium uppercase">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
