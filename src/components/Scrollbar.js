import React, { forwardRef, useEffect, useState } from 'react';

import VerticalSlider from './VerticalScroll';
import { usePrevious } from './usePrevious';
import isMobileDevice from '../utils/is-mobile';

const Scrollbar = forwardRef(({scroll, halfHeight, onScroll}, ref) => {

  const texts = [
    'Scroll',
    'Concept',
    'Roadmap',
    'Connect',
  ];

  const arrowClass = "animate-bounce mx-auto absolute px-1.5 w-full -top-20 transition-all duration-700 ";
  const barClass = "relative h-full transition-all duration-1000 ";

  const arrowStyle= {opacity: 0};
  let slide = 0;

  if(scroll < 5) {
    arrowStyle.opacity = 1;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight) {
    if(ref.containerRefs[0].current?.clientHeight > 0) {
      const percent = 1;//scroll/ref.containerRefs[0].current?.clientHeight;
      arrowStyle.opacity = 1-percent;
    }
    slide = 0;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+halfHeight) {
    if(ref.containerRefs[3].current?.clientHeight > 0) {
      const percent = (scroll-ref.containerRefs[0].current?.clientHeight-ref.containerRefs[1].current?.clientHeight)/ref.containerRefs[2].current?.clientHeight;
      arrowStyle.opacity = percent;
    }
    slide = 1;
  } else if(scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+3*halfHeight-20){
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

  const maxScroll = ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+3*halfHeight;

  const [scrollValue, setScrollValue] = useState(100);

  const handleChange = (event, value) => {
    setScrollValue(value);
    const value1 = Math.min((100-scrollValue)*maxScroll/100, maxScroll);
    onScroll(value1);
  }

  useEffect(() => {
    let value = (1-scroll/maxScroll)*100;
    if(isNaN(value)) value = 100;
    setScrollValue(value);
  }, [scroll, onScroll, maxScroll])

  useEffect(() => {
    // const value = Math.min((100-scrollValue)*maxScroll/100, maxScroll);
    // onScroll(value);
  }, [scrollValue, onScroll, maxScroll]);

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
          <div className="relative h-36 mx-auto">
            <VerticalSlider
              orientation="vertical"
              value={scrollValue}
              onChange={handleChange}
              track={false}
            />
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