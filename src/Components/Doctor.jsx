import React, { use } from 'react';
const dataPromise = fetch('/doctor.json')
.then(res=>res.json())

const Doctor = () => {
  const data=use(dataPromise)
  return (
    <div className="w-11/12 mx-auto">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-4'>
        {data.map(data => (
          <div className="card bg-base-100 shadow-sm" key={data.id}>
            <figure>
              <img src={data.image} alt="Shoes" className='w-full h-[300px] object-cover hover:scale-110 ease-in-out transition duration-100'/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;