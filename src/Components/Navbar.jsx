import React, { use } from 'react';
import logo from '../assets/logo.PNG';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {
        toast.success('SignOut Successfully');
      })
      .catch(err => {
        //  console.log(err.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar py-3.5">
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
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link>
          <img src={logo} alt="" className="md:w-[60px] w-[50px]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px]">{links}</ul>
      </div>
      <div className="navbar-end">
        {user /* && user.emailVerified*/ ? (
          <div>
            <div className="">
              {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
              {/* For TSX uncomment the commented types below */}
              <button
                popoverTarget="popover-1"
                style={
                  { anchorName: '--anchor-1' } /* as React.CSSProperties */
                }
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-[60px] rounded-full"
                />
              </button>

              <ul
                className="dropdown dropdown-end menu w-36 md:w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: '--anchor-1' } /* as React.CSSProperties */
                }
              >
                <li>
                  <h2 className="text-[15px] md:text-[18px] font-bold text-center">
                    {user.displayName}
                  </h2>
                </li>
                <li>
                  {' '}
                  <button
                    onClick={signOut}
                    className="btn btn-warning text-black"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="btn btn-success text-black">
              Login
            </Link>
            <Link to="/register" className="btn btn-warning text-black">
              register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
