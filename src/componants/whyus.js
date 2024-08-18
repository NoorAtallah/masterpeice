
import './whyus.css'; 
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
const WhyUs = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className="why-us " >
      <div className="title">
        <h1>Why Us?</h1>
        <div className="row">
          <div className="col">
            <div className="shape down">
              <i className="fa fa-user-doctor bkg1"></i>
              <div className="inner-shape bkg1">
                <div className="content">
                  <h2>Certified <br /> veterinarian</h2>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col">
            <div className="shape up">
              <i className="fa fa-money-bill bkg2"></i>
              <div className="inner-shape bkg2">
                <div className="content">
                  <h2>Reasonable <br /> Cost</h2>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col">
            <div className="shape down">
              <i className="fa fa-shield-halved bkg3"></i>
              <div className="inner-shape bkg3">
                <div className="content">
                  <h2>Privacy and <br /> security</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
