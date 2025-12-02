import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ServiceDetails = () => {
  const [service, setService] = useState(null)
  const [name, setName] = useState('')
  const[email,setEmail]=useState('')
  const { id } = useParams()
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
    }, []);

  useEffect(() => {
    fetch('/pet.json')
      .then(res => res.json())
      .then(data => { const findData = data.find(data => data.serviceId === parseInt(id))
        setService(findData );
  })
  }, [id])

  if(!service) return <p>Loading....</p>
  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  const bookHandle = (e) => {
    e.preventDefault()
    toast.success('Serviced Book Successfully')
    setName('')
    setEmail('')
  }


  return (
    <div className=" bg-base-200">
      <title>{serviceName}</title>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <img
              src={image}
              className="w-[98%] md:h-[400px] h-[200px]  lg:object-cover rounded-lg shadow-2xl"
              data-aos="fade-right"
            />
          </div>
          <div className="flex-1" data-aos="fade-left">
            <h1 className="text-5xl font-bold">{serviceName}</h1>
            <p className="py-6 text-[20px]">{description}</p>
            <div>
              <p className="text-[17px]">ProvideName: {providerName}</p>
              <p className="text-[17px]">ProvideEmail: {providerEmail}</p>
            </div>
            <div className="flex gap-10 py-2">
              <p className="text-[20px] font-bold">$ {price}</p>
              <p className="text-[20px] font-bold flex items-center">
                <FaStar /> {rating}
              </p>
            </div>
            <div className="py-2">
              <p className="text-[18px] font-bold">
                Available: {slotsAvailable}
              </p>
              <p className="text-[18px] font-bold ">category: {category}</p>
            </div>
          </div>
        </div>
      </div>

      <form className="py-3" onSubmit={bookHandle} data-aos="fade-up">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl ">Book Service</h2>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                required
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label className="label">Email</label>
              <input
                type="email"
                required
                className="input"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button className="btn btn-warning text-black mt-4">
                Book Now
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceDetails;