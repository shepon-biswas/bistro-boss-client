// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Category = () => {
  return (
    <>
      <div className="my-14">
        <Swiper
          slidesPerView={4}
          // spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/r2Wxsvz/slide1.jpg" alt="slider image" />
            <h4 className="uppercase text-2xl text-white font-bold text-center -mt-16 ">Salad</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/FBW2213/slide2.jpg" alt="slider image" />
            <h4 className="uppercase text-2xl text-white font-bold text-center -mt-16 ">Soup</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/SRRkHFk/slide3.jpg" alt="slider image" />
            <h4 className="uppercase text-2xl text-white font-bold text-center -mt-16 ">dessert</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/VB7mPHg/slide4.jpg" alt="slider image" />
            <h4 className="uppercase text-2xl text-white font-bold text-center -mt-16 ">drinks</h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/r2Wxsvz/slide1.jpg" alt="slider image" />
            <h4 className="uppercase text-2xl text-white font-bold text-center -mt-16 ">Salad</h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;
