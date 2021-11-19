import React, { forwardRef } from 'react';

const Hero = forwardRef((_, ref) => {
  return (
    <div className="relative h-screen" ref={ref.containerRef}>
      <div className="relative h-full" style={{minHeight: 'max(450px, 100vh)'}}>
        <div className="absolute bottom-0 w-full pointer-events-none" ref={ref.contentRef}>
          <div className="relative flex items-center justify-center h-1/2 pb-0 pt-12 px-0 landscape:px-16 sm:pt-12 sm:pb-0 sm:px-28" style={{backgroundColor: '#22262A', minHeight: '60vh'}}>
            {/* <embed className="max-w-full portrait:hidden" src="/assets/text_hero_cryptoverse.svg"/> */}
            <div>
              <p className="max-w-3xl leading-normal sm:leading-normal md:leading-normal hero-title text-3xl sm:text-4xl md:text-6xl">Experience NFTs Beyond The Cryptoverse</p>
              <p className="max-w-xs md:max-w-xl px-12 sm:px-6 md:px-0 mx-auto hero-desc text-xl sm:text-2xl md:text-3xl mt-5 md:mt-10 tracking-widest">PERPETUALLY REDEEMABLE NFTS</p>
            </div>
            {/* <embed className="max-w-full landscape:hidden" src="/assets/text_hero_cryptoverse_mobile.svg"/> */}
          </div>
          <div className="w-full nft-level-message-bar sticky bottom-0">
            <span className="inline-block animate-scroll-left3">
              &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury. &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury.
            </span>
            <span className="inline-block animate-scroll-left1">
              &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury. &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury.
            </span>
            <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
              &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury. &emsp;Elevate your experience across physical, digital and crypto space. &emsp;Set yourself apart from traditional luxury watch, furniture and wearables. &emsp;Immerse yourself in the new age of luxury.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Hero;