import React from "react";
import ActiveLink from "./ActiveLink";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const TopNav = () => {
  const { user, logOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-transparent container mx-auto">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/career">Career</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>

          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/career">Career</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
          <div className="w-14  rounded-full">
            <img
              src={
                user
                  ? user?.photoURL
                  : "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=is&k=20&c=3g5FPg9un7Ktq2_TUpKqpnTL9WpSvNB0SzN9RrXSUog="
              }
            />
          </div>
        </label>
        {user ? (
          <button onClick={logOutUser} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopNav;
