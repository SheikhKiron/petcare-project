import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
const PetCard = ({ pet }) => {
  const { serviceName, image, rating, price, serviceId } = pet;
  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-[200px] object-cover"
        />
      </figure>
      <div className="card-body flex justify-center flex-col flex-1">
        <div className="flex-1 space-y-3">
          <h2 className="card-title">{serviceName}</h2>
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-semibold">$ {price}</p>
            <p className="text-[16px] font-semibold flex items-center">
              <FaStar /> {rating}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/service-details/${serviceId}`}
            className="btn btn-warning text-black w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;