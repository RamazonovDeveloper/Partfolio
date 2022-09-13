import React from "react";
import "./testimonials.css";

import avtr1 from "../../assets/ava1.webp";
import avtr2 from "../../assets/ava2.jpg";
import avtr3 from "../../assets/ava3.webp";

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rewiev from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar" />
          </div>
          <h5 className="clients__name">Ernest Achiever</h5>
          <small className="clients__rewiev">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            perferendis. Amet repudiandae, exercitationem assumenda eveniet illo
            hic tempore labore possimus! Distinctio tenetur incidunt voluptatem
            sit enim odio rerum assumenda repudiandae?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar" />
          </div>
          <h5 className="clients__name">Ernest Achiever</h5>
          <small className="clients__rewiev">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            perferendis. Amet repudiandae, exercitationem assumenda eveniet illo
            hic tempore labore possimus! Distinctio tenetur incidunt voluptatem
            sit enim odio rerum assumenda repudiandae?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={avtr1} alt="Avatar" />
          </div>
          <h5 className="clients__name">Ernest Achiever</h5>
          <small className="clients__rewiev">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            perferendis. Amet repudiandae, exercitationem assumenda eveniet illo
            hic tempore labore possimus! Distinctio tenetur incidunt voluptatem
            sit enim odio rerum assumenda repudiandae?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
