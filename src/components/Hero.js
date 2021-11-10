import React, { forwardRef } from 'react';

const Hero = forwardRef((_, ref) => {
  return (
    <div className="relative h-screen" ref={ref.containerRef}>
      <div className="relative h-full min-h-400px">
        <div className="absolute bottom-0 w-full pointer-events-none" ref={ref.contentRef}>
          <div className="relative flex items-center justify-center h-1/2 pb-0 pt-12 px-0 landscape:px-16 sm:pt-12 sm:pb-0 sm:px-28" style={{backgroundColor: '#22262A', minHeight: '60vh'}}>
            <embed className="max-w-full portrait:hidden" src="/assets/text_hero_cryptoverse.svg"/>
            <embed className="max-w-full landscape:hidden" src="/assets/text_hero_cryptoverse_mobile.svg"/>
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
  )
});

export default Hero;