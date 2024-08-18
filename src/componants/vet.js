import React from 'react';
import './vet.css';
import vet from '../images/vet/vet.png'
import { Link } from 'react-router-dom';

const Vet = () => {
    
        return (
            
          <div className="vet">
            <div className="text-container transition-transform duration-200 hover:scale-105">
              <h2>Are you a veterinarian?</h2>
              <p>Join the elite of Arab veterinarians and be part of an online medical community to share your experience with veterinarians and patients.</p>
              <Link to='/vet-login'>
              <button className="button">Register as a vet now!</button>
              </Link>
            </div>
            <div className="image-container">
            
              <img src={vet} alt="Veterinarian" />
              
            </div>
          </div>
        );
      };
      
      export default Vet;