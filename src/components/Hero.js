import React, { forwardRef } from 'react';

const Hero = forwardRef((_, ref) => {
  return (
    <div className="relative h-screen" ref={ref.containerRef}>
      <div className="relative h-full" style={{minHeight: '100vh', height: ref.heroRef.current?.clientHeight}}>
        <div className="absolute pt-32 bottom-0 w-full pointer-events-none" ref={ref.heroRef}>
          <div ref={ref.contentRef}>
            <div className="relative flex items-center justify-center h-1/2 pb-0 pt-24 px-0 landscape:px-16 sm:pt-24 sm:pb-0 sm:px-28" style={{backgroundColor: '#22262A', minHeight: '60vh'}}>
              <div className="text-center">
                <p className="max-w-3xl leading-normal sm:leading-normal md:leading-normal hero-title text-3xl sm:text-4xl md:text-6xl">Experience NFTs Beyond The Cryptoverse</p>
                <p className="max-w-xs md:max-w-xl px-12 sm:px-6 md:px-0 mx-auto hero-desc text-xl sm:text-2xl md:text-3xl mt-5 md:mt-10 tracking-widest">PERPETUALLY REDEEMABLE NFTS</p>
              </div>
            </div>
            <div className="w-full nft-level-message-bar sticky bottom-0">
              <span className="inline-block animate-scroll-left3">
                &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon
              </span>
              <span className="inline-block animate-scroll-left1">
              &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon
              </span>
              <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
                &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon &emsp;coming soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Hero;