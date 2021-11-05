import React from 'react';

import Logo from './Logo';
import Scrollbar from './Scrollbar';

const Connect = () => {
  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} >
      <div className="relative h-screen sm:min-h-192">
        <div className="relative h-full">
          <div className="absolute top-0 w-full">
            <div className="w-full nft-level-message-bar">
              <span className="inline-block animate-scroll-left3">
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
              <span className="inline-block animate-scroll-left1">
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
              <span className="inline-block animate-scroll-left2" style={{animationDelay:'20s'}}>
                &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes&emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              </span>
            </div>
            <div className="relative flex flex-col justify-center items-center h-1/2 min-h-screen-2/5 w-full pb-20 pt-8 sm:pb-40 sm:pt-20 px-10 sm:px-20 lg:px-30" style={{backgroundColor: '#22262A'}}>
              <embed className="w-full md:hidden" src="/assets/text_connect_hop_mobile.svg"/>
              <div className="flex justify-between w-full mt-10 md:mt-0 px-8 min-w-48">
                <embed className="w-8 sm:w-12 xl:w-16" src="/assets/image_connect_instagram.svg"/>
                <embed className="w-8 sm:w-12 xl:w-16" src="/assets/image_connect_twitter.svg"/>
                <embed className="w-3/5 hidden md:block" src="/assets/text_connect_hop.svg"/>
                <embed className="w-8 sm:w-12 xl:w-16" src="/assets/image_connect_discord.svg"/>
                <embed className="w-8 sm:w-12 xl:w-16" src="/assets/image_connect_telegram.svg"/>
              </div>
            </div>
            <Logo className="top-ful left-1/2"/>
          </div>
        </div>
        <Scrollbar className="absolute bottom-20 left-16 hidden sm:block"/>
        <embed className="absolute top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
      </div>
    </div>
  )
}

export default Connect;