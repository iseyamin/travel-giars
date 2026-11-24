import React from 'react';
import heroIng from './hero.jpg'

const Hero = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url('${heroIng}')`
    
  }}
>
  <div className="hero-overlay "></div>
 
    <div className="hero-content w-full justify-start text-neutral-content text-left">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn btn-primary rounded-3xl border-none bg-gray-200 text-black shadow-none">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;