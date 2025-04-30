"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Carousel from '@/components/carousel';
import AboutUs from '@/components/aboutus';
import Gallery from '@/components/gallery';
import Fees from '@/components/fees';
import Contact from '@/components/contact';
import LoadingPage from '@/components/loadingPage';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFadeIn(true); // Trigger fade-in animation
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className={`fade-in`} style={{ overflowX: 'hidden' }}>
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