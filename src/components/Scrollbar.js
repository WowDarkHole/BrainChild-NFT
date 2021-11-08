import React from 'react';

const Scrollbar = ({slide}) => {

  const texts = [
    'Scroll',
    'Concept',
    'Roadmap',
    'Connect',
  ];

  const images = [
    '/assets/text_hero_scroll.svg',
    '/assets/text_concept.svg',
    '/assets/text_roadmap.svg',
    '/assets/text_connect.svg',
  ];

  const arrowClass = "animate-bounce mx-auto transition-all absolute duration-700 " + (slide > 0 ? "opacity-0 -bottom-16": "opacity-100 bottom-0");
  const barClass = "relative h-full transition-all duration-700 " + (slide > 0 ? "pb-0": "pb-16");

  return (
    <>
      <div className="rounded-full px-3 py-8 fixed bottom-20 left-16 hidden sm:block" style={{backgroundColor: '#22262A', width: '47px'}}>
        <div className={barClass}>
          <div className="mb-5 mx-auto flex items-center transition-all duration-700 " style={{minHeight: '5rem'}}>
            <embed src={images[slide]}/>
          </div>
          <div className="relative h-44 w-px bg-gray-500 mx-auto">
            <embed className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-700" style={{top: 3*slide+'rem'}} src="/assets/scroll_thumb.svg"/>
          </div>
          <embed className={arrowClass} src="/assets/scroll_arrow.svg"/>
        </div>
      </div>
      <div className="fixed top-4 left-4 w-20 sm:hidden">
        <embed className="w-full" src="/assets/image_scroll_button_bg.svg"/>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: '700'}}>{texts[slide]}</span>
      </div>
    </>
  )
}

export default Scrollbar;