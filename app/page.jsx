"use client";
import React from 'react';
import Header from '@/components/header';
import Carousel from '@/components/carousel';
import AboutUs from '@/components/aboutus';
import Gallery from '@/components/gallery';
import Fees from '@/components/fees';
import Contact from '@/components/contact';


const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <AboutUs />
      <Gallery />
      <Fees />
      <Contact />
      
    </div>
  );
};

export default HomePage;