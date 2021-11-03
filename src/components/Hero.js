import React from 'react';

import Logo from './Logo';
import Scrollbar from './Scrollbar';

const Hero = () => {
  return (
    <div className="app-bg" style={{backgroundImage: 'url(/assets/resource_landing_image3.jpg)'}}>
      <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} >
        <div className="relative h-screen sm:min-h-192">
          <div className="relative h-full">
            <div className="absolute bottom-0 w-full">
              <div className="relative flex items-center justify-center h-1/2 min-h-screen-1/2 py-6 px-10 sm:py-16 sm:px-0" style={{backgroundColor: '#22262A'}}>
                <Logo className="top-0 left-1/2"/>
                <embed className="max-w-full hidden md:block" src="/assets/text_hero_cryptoverse.svg"/>
                <embed className="max-w-full md:hidden" src="/assets/text_hero_cryptoverse_mobile.svg"/>
              </div>
              <div className="w-full nft-level-message-bar">
                <span className="inline-block animate-scroll-left3">
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
                <span className="inline-block animate-scroll-left1">
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
                <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
                  &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse &emsp;NFTs that are not just limited to the cryptoverse
                </span>
              </div>
            </div>
          </div>
          <Scrollbar className="absolute bottom-20 left-16 hidden sm:block"/>
          <embed className="absolute top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
        </div>
        </div>
      </div>
  )
}

export default Hero;