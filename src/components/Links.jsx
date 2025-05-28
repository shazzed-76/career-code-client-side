import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Links = () => {
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
        {user ? (
          <button className="block lg:hidden">Log out</button>
        ) : (
          <>
            <li>
              <NavLink to="auth/register" className="block lg:hidden">Register</NavLink>
            </li>
            <li>
              <NavLink to="auth/sign-in" className="block lg:hidden">Sign in</NavLink>
            </li>
          </>
        )}
      </>
    );
};

export default Links;