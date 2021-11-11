import React, { forwardRef, useEffect, useState } from 'react';

import { usePrevious } from './usePrevious';
import isMobileDevice from '../utils/is-mobile';

const Scrollbar = forwardRef(({scroll}, ref) => {

  const texts = [
    'Scroll',
    'Concept',
    'Roadmap',
    'Connect',
  ];

  const arrowClass = "animate-bounce mx-auto absolute px-1.5 w-full -top-20 ";
  const barClass = "relative h-full transition-all duration-1000 ";

  const arrowStyle= {opacity: 1};
  let slide = 0;

  if(scroll < 5) {
    arrowStyle.opacity = 1;
  } else if (scroll < ref.containerRefs[0].current?.scrollHeight) {
    if(ref.containerRefs[0].current?.scrollHeight > 0) {
      const percent = scroll/ref.containerRefs[0].current?.scrollHeight;
      arrowStyle.opacity = 1-percent;
    }
    slide = 0;
  } else if (scroll < ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight) {
    if(ref.containerRefs[3].current?.scrollHeight > 0) {
      const percent = (scroll-ref.containerRefs[0].current?.scrollHeight-ref.containerRefs[1].current?.scrollHeight)/ref.containerRefs[2].current?.scrollHeight;
      arrowStyle.opacity = percent;
    }
    slide = 1;
  } else if(scroll < ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight+ref.containerRefs[2].current?.scrollHeight){
    arrowStyle.opacity = 0;
    slide = 2;
  } else {
    slide = 3;
  }

  const [animationStart, setAnimationStart] = useState(0);
  const prevSlide = usePrevious(slide);

  useEffect(() => {
    if(prevSlide > slide) setAnimationStart(-1);
    else if(prevSlide < slide) setAnimationStart(1);

    setTimeout(() => {
      setAnimationStart(0);
    }, 700)
  }, [slide, prevSlide]);

  let prevTitle = slide-animationStart;
  if(prevTitle > 3) prevTitle = 3;
  if(prevTitle < 0) prevTitle = 0;

  return (
    <>
      <div className={"rounded-full px-1 py-8 fixed bottom-20 left-16 "+(isMobileDevice() ? "hidden lg:block" : "hidden md:block")} style={{backgroundColor: '#22262A', width: '47px'}}>
        <div className={barClass}>
          <div className="mb-5 mx-auto flex items-center transition-all duration-1000 transform rotate-180 overflow-hidden" style={{height: '6rem'}}>
            <div className={"scrollbar-title w-full duration-1000 "+(animationStart !== 0 ? "transition-all" : "transition-none")} style={(animationStart !== 0 ? {} : {marginLeft: '-2.45rem'})}>{texts[slide]}</div>
            <div className={"scrollbar-title w-full duration-1000 "+(animationStart !== 0 ? "transition-all": "transition-none")}>{texts[prevTitle]}</div>
          </div>
          <div className="relative h-36 w-px bg-gray-500 mx-auto">
            <embed className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000" style={{top: 2.4*slide+'rem'}} src="/assets/scroll_thumb.svg"/>
          </div>
          <embed className={arrowClass} style={arrowStyle} src="/assets/scroll_arrow.svg"/>
        </div>
      </div>
      <div className={"fixed top-4 left-4 w-20 "+(isMobileDevice() ? "block lg:hidden" : "block md:hidden")}>
        <embed className="w-full" src="/assets/image_scroll_button_bg.svg"/>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: '700'}}>{texts[slide]}</span>
      </div>
    </>
  )
});

export default Scrollbar;