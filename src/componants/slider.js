import React, { useState } from 'react';
import './slider.css';
import cat from '../images/slider/cat.png';
import ham from '../images/slider/pngwing.com (16).png';
import horse from '../images/slider/horse.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: cat, alt: 'Cat', label: 'Big Pets' },
    { src: ham, alt: 'Hamster', label: 'Small Pets' },
    { src: horse, alt: 'Horse', label: 'Farm Animals' }
  ];

  

  return (
    <section class="slider_main mt-10">
    <div class="slider-container">
        <h2>Shop in one Place</h2>
        <p>Who are you shopping for today?</p>
        <div class="slider " id="slider">
            <div class="slide ">
                <img className='transition-transform duration-200 hover:scale-105' src={cat} alt="Cat"/>
                <a href="#"><p>Big Pets</p></a>
            </div>
            <div class="slide">
                <img className='transition-transform duration-200 hover:scale-105' src={ham} alt="Dog"/>
                <a href="#"><p>Small Pets</p></a>
            </div>
            <div class="slide">
                <img className='transition-transform duration-200 hover:scale-105' src={horse}alt="Horse"/>
                <a href="#"><p>Farm Animals</p></a>
            </div>
        </div>
    </div>
</section>
  );
};

export default Slider;
