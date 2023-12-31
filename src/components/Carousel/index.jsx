"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Banner1 from "../../../public/img/banner/1.jpg"
import Banner2 from "../../../public/img/banner/2.jpg"
import Banner3 from "../../../public/img/banner/3.jpg"
import Banner4 from "../../../public/img/banner/4.jpg"

import Image from "next/image"

const Carousel = () => {
  const splideOptions = {
    type: 'loop', // Untuk efek loop
    perPage: 1,   // Jumlah slide yang ditampilkan pada satu waktu
    autoplay: true,
    interval: 3000, // Waktu autoplay dalam milidetik (misalnya 3000ms = 3 detik)
    arrows: false, // Untuk menyembunyikan tombol panah
    pagination: false
  };

  return (
    <Splide options={splideOptions}>
      <SplideSlide>
        <Image src={Banner1} alt="Slide 1" className='rounded-md w-full h-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner2} alt="Slide 2" className='rounded-md w-full h-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner3} alt="Slide 3" className='rounded-md w-full h-full'/>
      </SplideSlide>
      <SplideSlide>
        <Image src={Banner4} alt="Slide 3" className='rounded-md w-full h-full'/>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
