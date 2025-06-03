import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Links = ({ handleLogOut }) => {
  const { user } = useAuth();

  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/application/my">My Application</NavLink>
      </li>
      <li>
        <NavLink to="/add-jobs">Add Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/my-jobs">My Posted Jobs</NavLink>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogOut} className="block lg:hidden text-left">
            Log out
          </button>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="auth/register" className="block lg:hidden">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="auth/sign-in" className="block lg:hidden">
              Sign in
            </NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;