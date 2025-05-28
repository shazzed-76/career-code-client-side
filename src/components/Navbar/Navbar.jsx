import React from 'react';
import './Navbar.css'
import logo from '../../assets/image/logo.png'
import Links from '../Links';
import UserProfile from '../UserProfile/UserProfile';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();


    return (
      <div className="navbar bg-base-100 px-5 md:px-30 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Links />
            </ul>
          </div>
          <a className="flex gap-1 items-center">
            <img className="max-w-[40px]" src={logo} alt="company image" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              career<span className="text-secondary">Code</span>
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Links />
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <UserProfile />
              <button>Log out</button>
            </>
          ) : (
            <>
              <button className="btn underline text-sm border-none bg-transparent font-semibold shadow-none">
                Register
              </button>
              <button className="btn btn-secondary text-sm">
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    );
};

export default Navbar;