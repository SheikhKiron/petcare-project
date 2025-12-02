
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const SwiperHero=()=> {
  return (
    <div className='w-11/12 mx-auto'>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper rounded-sm">
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1295279059/photo/man-with-dog-walking-in-snow-against-old-village-in-beautiful-nature.jpg?s=612x612&w=0&k=20&c=-VwxRBkfUBJ4clXfCtEHfLqFcUwTwusxkp6OYgI9CT0="
            alt=""
            className="relative"
          />
          <h2 className="absolute font-bold text-4xl text-gray-900">
            {' '}
            Owner & Dog in Snow
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.diamondpet.com/wp-content/uploads/2018/12/brown-white-dog-wearing-winter-coat-running-through-snow-071023.jpg"
            alt=""
            className="relative"
          />
          <h2 className="absolute font-bold text-4xl text-blue-700">
            {' '}
            Dog in Cozy Winter Coat
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            alt=""
            className="relative"
          />
          <h2 className="absolute font-bold text-4xl text-orange-700">
            {' '}
            Cat Wrapped in Blanket
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://t3.ftcdn.net/jpg/05/31/09/74/360_F_531097423_y1scBnLigyQpMNjLmleTWRh96WmULQo8.jpg"
            alt=""
            className="relative"
          />
          <h2 className="absolute font-bold text-4xl text-blue-700">
            {' '}
            Pet Grooming & Care
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imgix.theurbanlist.com/content/article/dog-winter-fashion.jpg?format=auto,compress&w=728%20728w"
            alt=""
            className="relative"
          />
          <h2 className="absolute font-bold text-4xl text-blue-700">
            {' '}
            Stylish Dog Winter Outfit
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperHero;