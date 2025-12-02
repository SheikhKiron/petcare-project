import React from 'react';
import err from '../assets/error-404.png'
import { Link } from 'react-router';
const Error = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <img src={err} alt="" />

        <div className='text-center mt-6'>
          <Link to="/" className="btn btn-warning text-black">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;