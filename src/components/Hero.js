import React, { forwardRef } from 'react';

const Hero = forwardRef((_, ref) => {
  return (
      <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} >
        <div className="relative h-screen">
          <div className="relative h-full">
            <div className="absolute bottom-0 w-full" ref={ref}>
              <div className="relative flex items-center justify-center h-1/2 min-h-screen-1/2 py-6 px-10 sm:py-16 sm:px-0" style={{backgroundColor: '#22262A'}}>
                <embed className="max-w-full hidden md:block" src="/assets/text_hero_cryptoverse.svg"/>
                <embed className="max-w-full md:hidden" src="/assets/text_hero_cryptoverse_mobile.svg"/>
              </div>
              <div className="w-full nft-level-message-bar">
                <span className="inline-block animate-scroll-left3">
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
                <span className="inline-block animate-scroll-left1">
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
                <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
});

export default Hero;