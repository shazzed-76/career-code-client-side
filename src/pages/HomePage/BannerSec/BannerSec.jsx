import React from 'react';
import bannerImage from '../../../assets/image/illustration/banner-img.svg'

const BannerSec = () => {
    return (
      <div className="hero bg-base-200 py-10 px-5">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-10">
          <div className="flex-1 place-items-end">
            <img className="w-full max-w-lg" src={bannerImage} />
          </div>
          <div className="flex-1 text-left md:text-center lg:text-left">
            <h1 className="text-5xl font-bold capitalize text-secondary">
              get the <span className="text-primary">right job</span>
              <br />
              you deserve
            </h1>
            <p className="py-6 text-lg">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <div className='bg-base-100 p-2 flex gap-2 rounded-lg'>
              <input
                type="text"
                placeholder="Search"
                className="input border-none input-xl w-full focus:outline-0 focus:border-0 focus:shadow-none bg-transparent"
              />
              <button className='btn btn-xl btn-primary text-white text-xl'>Search</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BannerSec;