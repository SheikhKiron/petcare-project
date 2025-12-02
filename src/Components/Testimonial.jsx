import React, { use, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
const dataPromise = fetch('/test.json')
  .then(res => res.json())
const Testimonial = () => {
  const data = use(dataPromise)
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);
  // console.log(data);
  return (
    <div className="mx-auto w-11/12">
      <Marquee
        pauseOnHover={false}
        pauseOnClick={false}
        play={!paused}
        ref={marqueeRef}
      >
        <div className="flex gap-6 py-5 ml-5">
          {data.map(test => (
            <div
              className="card bg-base-100 md:w-[500px] w-[340px]  shadow-md p-4 rounded-lg"
              key={test.id}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
            >
              <div className="flex items-center mb-3">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{test.name}</h3>
                  <p className="text-sm text-gray-500">Pet: {test.petName}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3">"{test.feedback}"</p>
              <div className="flex items-center">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;