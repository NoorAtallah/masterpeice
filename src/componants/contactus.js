import React from 'react';
import backgroundImage from '../images/contactus/1.png';

const ContactUs = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="contact-container p-8 bg-white rounded-lg shadow-lg w-full max-w-lg">
        <form className="space-y-6">
          <div className="flex items-center">
            <h1 className="font-bold text-2xl text-left w-36">Contact Us</h1>
          </div>
          <div className="flex items-center">
            <label className="text-black w-36 text-sm font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-2 py-2 w-full border-b-2 focus:border-[#8E7B70] outline-none text-sm bg-white"
            />
          </div>
          <div className="flex items-center">
            <label className="text-black w-36 text-sm font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 w-full border-b-2 focus:border-[#8E7B70] outline-none text-sm bg-white"
            />
          </div>
          <div className="flex items-center">
            <label className="text-black w-36 text-sm font-bold">Phone No.</label>
            <input
              type="number"
              placeholder="Enter your phone no"
              className="px-2 py-2 w-full border-b-2 focus:border-[#8E7B70] outline-none text-sm bg-white"
            />
          </div>
          <div className="flex items-center">
            <label className="text-black w-36 text-sm font-bold">City</label>
            <input
              type="text"
              placeholder="Enter your City"
              className="px-2 py-2 w-full border-b-2 focus:border-[#8E7B70] outline-none text-sm bg-white"
            />
          </div>
          <button
            type="button"
            className="!mt-8 px-6 py-2 w-full bg-[#d9ccc5] hover:bg-[#8E7B70] text-sm text-white mx-auto block rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
