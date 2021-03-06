import React, { forwardRef } from 'react';

const EthClock = forwardRef((_, ref) => {

  return (
    <div className="relative min-h-screen flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar mt-screen-1/4 select-none" ref={ref.containerRef}>
      <div className="p-0 sm:p-24 w-full container mx-auto" ref={ref.contentRef}>
        <div className="relative w-60 h-60 flex items-center sm:w-160 sm:h-160 m-auto">
          <img className="w-full" src="/assets/image_ethclock_clock.png" alt="ethereum clock"/>
          <embed className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-48 sm:w-120" src="/assets/text_ethclock.svg" />
          <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-22 h-22 sm:w-40 sm:h-40">
            <div className="relative rounded-full mt-1 ml-1 sm:mt-4 sm:ml-4" style={{clipPath: 'circle(49%)'}}>
              <video className="w-full" id="vid" controls={false} autoPlay={true} loop={true} name="media" playsInline={true} muted={true}>
                <source src="/assets/image_ethereum_clock.webm" type="video/webm"/>
                <source src="/assets/image_ethereum_clock.mp4" type="video/mp4"/>
              </video>
              <div className="h-full w-full p-1 absolute top-0 left-0 animate-spin-slow">
                <embed className="h-full w-full" src="/assets/launch_time.svg"/>
              </div>
            </div>
          </h1>
        </div>
        <p className="background-blur p-8 sm:p-24 mt-10 leading-tight sm:leading-tight font-cormorant font-semibold text-2xl sm:text-4xl italic">
          Ethclock is our proof-of-concept NFT, a collection of 5000 NFTs that are perpetually redeemable and gamified. We aim to have a fair launch mechanism, a raffle without gas war and limited to one mint per wallet address.
          <span className="absolute -bottom-6 sm:bottom-0 right-0 sm:-right-8 rounded-2xl text-xl sm:text-3xl p-3 transform -rotate-12" style={{background: 'linear-gradient(90.86deg, #FFC6CE 26.22%, #64D6EE 97.07%)'}}>Mint price is 0.12 ETH</span>
        </p>
        <div className="background-blur p-8 sm:p-24 mt-14">
          <h2 className="font-sora font-bold text-2xl sm:text-4xl">
            HOW TO GET IT?
          </h2>
          <p className="font-cormorant font-semibold leading-tight sm:leading-tight text-2xl sm:text-4xl italic mt-10">
            We aim to avoid a gas war via a raffle, promote inclusiveness by collecting signatures within 24h period (timezone agnosticism), and allowing only upto 3 mint per wallet to prevent whale-hoarding. Our process is heavily inspired by Paradigm???s influential research. In the spirit of 420s and 69s, the closest magic number we got to is 4206.9 which translates to 4207 for the Fairmint Raffle. 697 will be reserved for community building, give-aways, events and promotion. However, the actual number will be lower as we enhance Ethclocks to higher levels for our give-away events.
          </p>
          <a className="block font-sora text-gray-darkest font-medium underline text-xl mt-10" href="https://docs.google.com/document/d/e/2PACX-1vSFQQYJ06nu371dWY_Yu9PgS4onGKnWCiTDjZ899f3z77ih3eoNkdnbJvmYK2uHvg/pub">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
});

export default EthClock;