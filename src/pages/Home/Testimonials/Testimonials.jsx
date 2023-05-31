import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuora, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch(`/reviews.json`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
  return (
    <>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      {/* Testimonial Slider */}
      <div className="my-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          
          {
            reviews.map(review => <SwiperSlide
            key={review._id}
            >
                <div className="text-center flex flex-col items-center space-y-4 px-10">
                <Rating style={{ maxWidth: 150 }} value={review.rating} readOnly />
                    <span> <FaQuoteLeft className="w-52 h-36 opacity-70"></FaQuoteLeft></span>
                    <p>{review.details}</p>
                    <h4 className="font-bold text-2xl text-orange-500">{review.name}</h4>
                </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
