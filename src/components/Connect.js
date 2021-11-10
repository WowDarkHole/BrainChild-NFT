import React, { forwardRef } from 'react';

import isMobileDevice from '../utils/is-mobile';

const Connect = forwardRef((_, ref) => {
  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} >
      <div className="relative h-screen overflow-y-scroll no-scrollbar" ref={ref.containerRef}>
        <div className="relative h-full min-h-400px">
          <div className="absolute top-0 w-full pointer-events-none" ref={ref.contentRef}>
            <div className="w-full nft-level-message-bar">
              <span className="inline-block animate-scroll-left3">
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
              <span className="inline-block animate-scroll-left1">
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
              <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
            </div>
            <div className={"relative flex flex-col justify-center items-center h-1/2 min-h-screen-2/5 w-full pb-20 pt-8 "+(isMobileDevice() ? "px-5" : "sm:pb-24 sm:pt-20 px-10 sm:px-20 lg:px-30")} style={{backgroundColor: '#22262A'}}>
              <embed className="w-full landscape:hidden" src="/assets/text_connect_hop_mobile.svg"/>
              <div className="flex justify-between items-center w-full mt-10 md:mt-0 px-8 min-w-48">
                <a style={{height:'max-content'}} href="https://www.instagram.com/brainchildnft/" target="_blank" rel="noreferrer"><embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12 xl:w-16")} src="/assets/image_connect_instagram.svg"/></a>
                <a style={{height:'max-content'}} href="https://twitter.com/BrainchildNFT" target="_blank" rel="noreferrer"><embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12 xl:w-16")} src="/assets/image_connect_twitter.svg"/></a>
                <embed className="w-3/5 hidden landscape:block" src="/assets/text_connect_hop.svg"/>
                <a style={{height:'max-content'}} href="https://discord.gg/7S55rjvxm3" target="_blank" rel="noreferrer"><embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12 xl:w-16")} src="/assets/image_connect_discord.svg"/></a>
                <a style={{height:'max-content'}} href="https://t.me/joinchat/KxQp5cc1K35lM2Jl" target="_blank" rel="noreferrer"><embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12 xl:w-16")} src="/assets/image_connect_telegram.svg"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Connect;