import React, { forwardRef } from 'react';

import isMobileDevice from '../utils/is-mobile';

const Connect = forwardRef((_, ref) => {
  return (
    <div className="relative min-h-screen overflow-y-scroll no-scrollbar mt-screen-1/4" ref={ref.containerRef}>
      <div className="relative h-full min-h-500px">
        <div className="w-full" ref={ref.contentRef}>
          <div className="w-full nft-level-message-bar sticky top-0">
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
            <embed className={"hidden md:block md:w-120 lg:w-140 xl:w-160"+(isMobileDevice() ? "": "")} src="/assets/text_connect_hop.svg"/>
            <div className={"grid grid-rows-2 grid-cols-3 justify-items-center gap-y-9 md:grid-rows-1 md:grid-cols-6 justify-between items-center mt-10 mb-15 md:mt-20 md:mb-20 min-w-80 sm:min-w-120 md:min-w-180 landscape:px-0"+(isMobileDevice() ? "" : "")}>
              <a style={{height:'max-content'}} className="tooltip" href="https://discord.gg/7S55rjvxm3" rel="external">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_discord.svg"/>
                <span className="tooltiptext">DISCORD</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://www.instagram.com/brainchildnft/">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_instagram.svg"/>
                <span className="tooltiptext">INSTAGRAM</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://twitter.com/BrainchildNFT">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_twitter.svg"/>
                <span className="tooltiptext">TWITTER</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://t.me/joinchat/KxQp5cc1K35lM2Jl">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_telegram_announcement.svg"/>
                <span className="tooltiptext">TELEGRAM ANNOUNCEMENT</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://t.me/joinchat/kSE3qhHOpMRkY2E1">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_telegram_chat.svg"/>
                <span className="tooltiptext">TELEGRAM CHAT</span>
              </a>
              <a style={{height:'max-content'}} className="tooltip" href="https://www.reddit.com/r/brainchildNFT/">
                <embed className={"w-8 pointer-events-none "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_telegram.svg"/>
                <span className="tooltiptext">REDDIT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Connect;