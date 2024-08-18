"use client";

import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';

import hero from '../images/hero/Untitled design33.png';
import hero_2 from '../images/hero/Untitled design.png'
import hero_4 from '../images/hero/1.png'

export function Hero() {
  return (
    <div className="h-screen">
      <Carousel  className="h-full mb-10">
        <div className="relative flex h-full items-center justify-center dark:text-white">
          <img src={hero} alt="hero" />
          <div className="absolute text-black text-center">
            <h1 className="text-4xl font-bold">Best Friends for Your Paw Chums</h1>
            <p className="mt-2 text-center font-semibold">Your Trusted Partner in Pet Care, Offering Tailored Services to Ensure the Health,</p>
            <p className="mt-2 text-center font-semibold">Happiness, and Well-Being of Your Beloved Furry Companions.</p>
            <Link to='/login'>
            <button className=" bg-brown mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-customGray hover:text-black ">Connect Now</button>
            </Link>
          </div>
        </div>
        <div className="relative flex h-full items-center justify-center dark:text-white bg-white">
        <img src={hero_4} alt="hero" />
        <div className="absolute text-black text-center">
        <Link to='/login'>
        <button className="bg-brown mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-brown hover:text-black" style={{marginTop:'250px'}}>Subscribe Now</button>
        </Link>
         </div>
        </div>
        <div className="relative flex h-full items-center justify-center dark:text-white bg-white">
        <img src={hero_2} alt="hero" />
        <div className="absolute text-black text-center">
        <h1 className="text-4xl font-bold">Expert Vet Consultations Anytime, Anywhere</h1>
        <p className="mt-2 text-center font-semibold">Get immediate advice from professional vets to ensure your pet’s health.</p>
        <p className="mt-2 text-center font-bold text-3xl underline decoration-green">Starting at 9.27 JD/month</p>
        <Link to='/login'>
        <button className="bg-brown mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-customGray hover:text-black">Subscribe Now</button>
        </Link>
         </div>
        </div>
        
             
      </Carousel>
    </div>
  );
}
