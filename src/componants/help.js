import React from 'react';
import './help.css';
import help from '../images/help/77.PNG'
import help_2 from '../images/help/2.png'
import { Link } from 'react-router-dom';
const Help = () => {
  return (
    <section className="help">
    <div className="container_1">
      <div className="title_2">
        <h1>Expert vet Help at Your Fingertips</h1>
      </div>
      <div className="subtitle">
        <p>
          Get timely advice from our licensed veterinary team and leave with a personalized consult report.
          <br />
          Virtual consults are a supplement to clinic visits.
        </p>
      </div>
      <div className="services">
        <div className="service transition-transform duration-200 hover:scale-105">
          <img src={help} alt="Live Vet Chat" />
          <div className="service-content">
            <div className="service-title">Live chat for instant advice</div>
            <div className="service-description">
              Number of sessions. Exchange messages, pictures, and videos with an online vet or vet tech.
            </div>
            <Link to='/login'>
              <button className="connect-button-chat">Chat Now</button>
            </Link>
          </div>
        </div>
        <div className="service transition-transform duration-200 hover:scale-105">
          <img src={help_2} alt="Video Call" />
          <div className="service-content">
            <div className="service-title">Video call for scheduled help</div>
            <div className="service-description">
              Have a face-to-face conversation with an online vet or vet tech.
            </div>
            <Link to='/login'>
              <button className="connect-button">Schedule Call</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <svg class="animate-bounce w-6 h-6 ...">
 
</svg> */}
  </section>
  );
};

export default Help;