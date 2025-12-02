import React, { use } from 'react';

const dataPromise = fetch('/tipsData.json')
.then(res=>res.json())


const CareTips = () => {
  const data = use(dataPromise)
  // console.log(data);
  return (
    <div className="w-11/12 mx-auto py-2 space-y-3">
      {data.map(care => (
        <div
          className="collapse collapse-arrow bg-base-100 border border-base-300 bg-gradient-to-r from-amber-100 via-orange-50 to-rose-100 hover:shadow-md transition-all duration-300"
          key={care.id}
        >
          <input type="radio" name="my-accordion-2" defaultChecked={care.id==1} />
          <div className="collapse-title font-semibold">{care.title}</div>
          <div className="collapse-content text-[18px]">{care.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CareTips;