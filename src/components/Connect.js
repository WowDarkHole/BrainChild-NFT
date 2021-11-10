import React, { forwardRef } from 'react';

import isMobileDevice from '../utils/is-mobile';

const Connect = forwardRef((_, ref) => {
  return (
    <div className="relative h-screen overflow-y-scroll no-scrollbar" ref={ref.containerRef}>
      <div className="relative h-full min-h-400px">
        <div className="absolute top-0 w-full" ref={ref.contentRef}>
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
          <div className={"relative flex flex-col justify-center items-center h-1/2 min-h-screen-2/5 w-full pb-24 pt-8 "+(isMobileDevice() ? "px-5" : "sm:pb-28 sm:pt-20 px-10 sm:px-20 lg:px-30")} style={{backgroundColor: '#22262A'}}>
            <embed className={"w-72 sm:w-96 "+(isMobileDevice() ? "md:hidden": "md:hidden")} src="/assets/text_connect_hop_mobile.svg"/>
            <div className={"flex justify-between items-center mt-10 md:mt-0 max-w-full min-w-60 sm:min-w-80 xl:min-w-280 lg:min-w-200 md:min-w-180 landscape:px-0"+(isMobileDevice() ? "" : "")}>
              <a style={{height:'max-content'}} className="tooltip" href="https://www.instagram.com/brainchildnft/" target="_blank" rel="noreferrer">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-10")} src="/assets/image_connect_instagram.svg"/>
                <span className="tooltiptext">INSTAGRAM</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://twitter.com/BrainchildNFT" target="_blank" rel="noreferrer">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-10")} src="/assets/image_connect_twitter.svg"/>
                <span className="tooltiptext">TWITTER</span>
              </a>
              <embed className={"hidden md:block md:w-120 lg:w-140 xl:w-160"+(isMobileDevice() ? "": "")} src="/assets/text_connect_hop.svg"/>
              <a style={{height:'max-content'}} className="tooltip" href="https://discord.gg/7S55rjvxm3" target="_blank" rel="noreferrer">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-10")} src="/assets/image_connect_discord.svg"/>
                <span className="tooltiptext">DISCORD</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://t.me/joinchat/KxQp5cc1K35lM2Jl" target="_blank" rel="noreferrer">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-10")} src="/assets/image_connect_telegram.svg"/>
                <span className="tooltiptext">TELEGRAM</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Connect;