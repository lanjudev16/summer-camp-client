import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

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
    <div>
      <div className="navbar bg-base-100 lg:w-[1140px] mx-auto">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 p-2 w-52"
            >
              <li className="hover:bg-red">
                <Link>Instructor</Link>
              </li>
              <li>
                <Link>Class</Link>
              </li>
            </ul>
          </div>
          <span>
            <img src="logo.png" className="h-[55px] w-[114px]" alt="" />
          </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-5">
            <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
              <Link>Instructor</Link>
            </li>
            <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
              <Link>Class</Link>
            </li>
            {user ? (
              <>
                <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
                  <Link to="/dashboard"><img className="h-[25px] w-[25px] rounded-[100%]" src={user?.photoURL} alt="" /></Link>
                </li>
                <li onClick={handleLogOut} className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
                  <Link to="/login">Logout</Link>
                </li>
                <li  className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
                  <button onClick={handleTheme}>toggle</button>
                </li>

              </>
            ) : (
              <>
                {" "}
                <li className="hover:text-[rgb(37,180,123)] rounded text-xl font-medium uppercase">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
