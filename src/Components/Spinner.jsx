import React from 'react';
import ScaleLoader from './../../node_modules/react-spinners/esm/ScaleLoader';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-315.71px)]">
      <ScaleLoader color='orange' />
    </div>
  );
};

export default Spinner;