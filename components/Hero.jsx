'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import banner_logo from '../public/banner.jpeg';
import { useEffect, useRef } from 'react';

const Hero = () => {
  //image animation

  const imageRef = useRef();
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add('scrolled');
      } else {
        imageElement.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finance <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-Powered financial management platfrom that helps you track,
          analyze and optimize your spending with real time insights
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src={banner_logo}
              height={720}
              width={1280}
              alt="hero banner"
              className="rounded-lg shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
