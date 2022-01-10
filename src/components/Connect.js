import React, { forwardRef } from "react";

import isMobileDevice from "../utils/is-mobile";

const Connect = forwardRef((_, ref) => {
  return (
    <div className="min-h-screen mt-screen-1/4" ref={ref.containerRef}>
      <div className="h-full pb-48">
        <div className="w-full" ref={ref.contentRef}>
          <div className="w-full z-10 nft-level-message-bar sticky top-0">
            <span className="inline-block animate-scroll-left3">
              &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              &emsp;Join us behind the scenes &emsp;Join us behind the
              scenes&emsp;Join us behind the scenes &emsp;Join us behind the
              scenes &emsp;Join us behind the scenes &emsp;Join us behind the
              scenes &emsp;Join us behind the scenes
            </span>
            <span className="inline-block animate-scroll-left1">
              &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              &emsp;Join us behind the scenes &emsp;Join us behind the
              scenes&emsp;Join us behind the scenes &emsp;Join us behind the
              scenes &emsp;Join us behind the scenes &emsp;Join us behind the
              scenes &emsp;Join us behind the scenes
            </span>
            <span
              className="inline-block animate-scroll-left2"
              style={{ animationDelay: "20s" }}
            >
              &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              &emsp;Join us behind the scenes&emsp;Join us behind the scenes
              &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              &emsp;Join us behind the scenes &emsp;Join us behind the scenes
              &emsp;Join us behind the scenes
            </span>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center h-1/2 min-h-screen-2/5 w-full pb-36 pt-8 " +
              (isMobileDevice()
                ? "px-5"
                : "sm:pb-28 sm:pt-20 px-10 sm:px-10 lg:px-30")
            }
            style={{ backgroundColor: "#22262A" }}
          >
            {/* <embed className={"w-72 sm:w-96 "+(isMobileDevice() ? "md:hidden": "md:hidden")} src="/assets/text_connect_hop_mobile.svg"/>
            <embed className={"hidden md:block md:w-120 lg:w-140 xl:w-160"+(isMobileDevice() ? "": "")} src="/assets/text_connect_hop.svg"/> */}
            <p className="max-w-3xl text-center leading-tight sm:leading-tight md:leading-tight hero-title text-4xl sm:text-5xl md:text-7xl tracking-wide">
              Hop in on the fun!
            </p>
            <div
              className={
                "grid grid-cols-1 grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 justify-items-center gap-y-9 gap-x-0 2xl:gap-x-12 lg:grid-rows-1 lg:grid-cols-4 justify-between items-center mt-10 mb-15 md:mt-20 md:mb-20 min-w-80 sm:min-w-180 md:min-w-240 landscape:px-0" +
                (isMobileDevice() ? "" : "")
              }
            >
              <a
                className="no-underline border-0 custom-tooltip"
                href="https://discord.gg/7S55rjvxm3"
                rel="external"
              >
                <embed
                  className={
                    "h-7 pointer-events-none inline " +
                    (isMobileDevice() ? "" : "sm:w-12")
                  }
                  src="/assets/image_connect_discord.svg"
                />
                <span className="gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Discord
                </span>
                <span className="tooltiptext">7S55rjvxm3</span>
              </a>
              <a
                className="no-underline border-0 custom-tooltip"
                href="https://www.instagram.com/brainchildnft/"
              >
                <span className="inline sm:hidden mx-2 gradient-text font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Instagram
                </span>
                <embed
                  className={
                    "h-7 pointer-events-none inline " +
                    (isMobileDevice() ? "" : "sm:w-12")
                  }
                  src="/assets/image_connect_instagram.svg"
                />
                <span className="hidden sm:inline mx-2 gradient-text font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Instagram
                </span>
                <span className="tooltiptext">@brainchildnft</span>
              </a>
              <a
                className="no-underline border-0 custom-tooltip"
                href="https://twitter.com/BrainchildNFT"
              >
                <embed
                  className={
                    "h-7 pointer-events-none inline " +
                    (isMobileDevice() ? "" : "sm:w-12")
                  }
                  src="/assets/image_connect_twitter.svg"
                />
                <span className="gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Twitter
                </span>
                <span className="tooltiptext">@BrainchildNFT</span>
              </a>
              {/* <a className="no-underline border-0 custom-tooltip" href="https://t.me/joinchat/KxQp5cc1K35lM2Jl">
                <span className="inline sm:hidden gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">Telegram</span>
                <embed className={"h-7 pointer-events-none inline "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_telegram.svg"/>
                <span className="hidden sm:inline gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">Telegram</span>
                <span className="tooltiptext">joinchat/KxQp5cc1K35lM2Jl</span>
              </a>
              <a className="no-underline border-0 custom-tooltip" href="https://www.reddit.com/r/brainchildNFT/">
                <embed className={"h-7 pointer-events-none inline "+(isMobileDevice() ? "": "sm:w-12")} src="/assets/image_connect_reddit.svg"/>
                <span className="gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">Reddit</span>
                <span className="tooltiptext">r/brainchildNFT</span>
              </a> */}
              <a
                className="no-underline border-0 custom-tooltip"
                href="https://docs.google.com/document/d/e/2PACX-1vSFQQYJ06nu371dWY_Yu9PgS4onGKnWCiTDjZ899f3z77ih3eoNkdnbJvmYK2uHvg/pub"
              >
                <span className="inline sm:hidden gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Whitepaper
                </span>
                <embed
                  className={
                    "h-7 pointer-events-none inline " +
                    (isMobileDevice() ? "" : "sm:w-12")
                  }
                  src="/assets/image_connect_whitepaper.svg"
                />
                <span className="hidden sm:inline gradient-text mx-2 font-cormorant font-bold text-2xl leading-tight align-bottom italic">
                  Whitepaper
                </span>
                <span className="tooltiptext">Whitepaper</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Connect;
