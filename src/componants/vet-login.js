import React from 'react';
import './vet-login.css';
import { Link } from 'react-router-dom';

const VetSignup = () => {
  return (
    <div className="vet-container justify-center">
      <a href="./">
       
      </a>
      <form className="vet-form">
        <h3 className='text-brown text-left'>Vet Job Form</h3>
        <div className="inputForm">
          <i className="fa-regular fa-user"></i>
          <input placeholder="Enter your Full Name" className="input" type="text" />
        </div>
        <div className="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input placeholder="Enter your Email" className="input" type="text" />
        </div>
       
        <div className="flex-row">
          <div></div>
        
        
        
        </div>
        <button className="button-submit">Submit</button>
        
        <p className="p note">Note: After submiting, there will be hiring process.</p>
      </form>
    </div>
  );
}

export default VetSignup;