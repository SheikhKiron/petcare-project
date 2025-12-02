import React, { useEffect } from 'react';
import SwiperHero from '../Components/Swiper/SwiperHero';
import usePets from '../hooks/usePets';
import PetCard from '../Components/PetCard';
import CareTips from '../Components/CareTips';
import Doctor from '../Components/Doctor';
import Spinner from '../Components/Spinner';
import { Link } from 'react-router';
import Testimonial from '../Components/Testimonial';
import AOS from 'aos'
import 'aos/dist/aos.css';    

const Home = () => {
  const{ pet,loading} = usePets()
  const pets = pet||[];
  const petShow = pets.slice(0, 4)
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once:true
    })
      
  },[])
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SwiperHero></SwiperHero>
          <h2 className="text-center py-5 text-2xl font-bold animate__animated animate__bounce">
            Popular Winter Care Services
          </h2>
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 w-11/12 mx-auto"
            data-aos="zoom-in-down"
          >
            {petShow.map(pet => (
              <PetCard pet={pet} key={pet.serviceId}></PetCard>
            ))}
          </div>
          <div className="text-center py-4">
            <Link to="/services" className="btn btn-warning text-black">
              View All
            </Link>
          </div>
          <div data-aos="zoom-in-down">
            <h2 className="text-center py-5 text-2xl font-bold">
              Winter Care Tips for Pets
            </h2>
            <CareTips></CareTips>
          </div>
          <div data-aos="zoom-in-down">
            <h2 className="text-center py-5 text-2xl font-bold">
              Meet Our Expert Vets
            </h2>
            <Doctor></Doctor>
          </div>
          <div data-aos="zoom-in-down">
            <h2 className="text-center py-5 text-2xl font-bold">
              What Our Customers Say
            </h2>
            <Testimonial></Testimonial>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;