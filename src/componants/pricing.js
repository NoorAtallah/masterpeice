import React from 'react';
import './pricing.css';
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-container ">
        <h1>Choose your Subscription</h1>
        <br /> <br />
        <div className="subscription-plans ">
          <div className="plan transition-transform duration-200 hover:scale-105">
            <h2>Monthly subscription</h2>
            
            <ul>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Instant calls with veterinary doctors
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Text conversations with a vet
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Share files with the veterinarian
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Unlimited text questions
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                15 medical consultations
              </li>
            </ul>
            <br />
            <p className="price font-bold">9.27 JD</p>
            <Link to='/login'>
              <button className='pricing_btn'>Subscribe Now</button>
              </Link>
          </div>
          <div className="plan transition-transform duration-200 hover:scale-105 ">
            <h2>Weekly subscription</h2>
            <ul>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Instant calls with veterinary doctors
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Text conversations with a vet
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Share files with the veterinarian
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                Unlimited text questions
              </li>
              <li>
                <i className="fa-solid fa-check" style={{ color: '#00d1bd' }}></i>
                3 medical consultations
              </li>
            </ul>
            <br />
            <p className="price font-bold">2.84 JD</p>
            <Link to='/login'>
              <button className='pricing_btn'>Subscribe Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
