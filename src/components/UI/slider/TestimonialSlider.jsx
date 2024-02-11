import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "I can't express enough how impressed I am with the food
           delivery service. The meals arrived on time, piping hot,
            and packed with flavor. It's like having a taste of Ethiopia right at my doorstep! Highly recommended"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mahder Goytom</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "As a busy professional, I rely on quick and reliable food delivery services. This one exceeded my expectations. The ordering process was simple, 
          the food arrived promptly, and the quality was outstanding. I'm hooked!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ashebir Zergaw</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I've tried several food delivery services, but none compare to this one. The variety of Ethiopian dishes available is impressive, and the portions are generous. Plus, the delivery drivers are always friendly and professional.
           It's my go-to choice for a delicious and hassle-free meal."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Yisak Solomon</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
