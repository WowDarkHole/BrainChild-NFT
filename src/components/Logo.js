import React, { useState, useEffect } from 'react';
import { usePrevious } from './usePrevious';

const Logo = React.forwardRef(({className, slide}, ref) => {
  const container = ref.containerRef.current;
  const content = ref.contentRef.current;

  const previousSlide = usePrevious(slide);
  // console.log(previousSlide, slide);
  const parentClass = "absolute transform -translate-x-1/2 transition-all duration-1000 " + className + (slide > 0 && slide < 3 ? "" : " -translate-y-1/2")+(slide === previousSlide ? "" : "");

  const parentStyle = {top: '20px'};
  if(slide === 0) parentStyle.top = container?.scrollHeight - (container?.scrollTop || 0) - (content?.scrollHeight || 0);
  if(slide === 3) parentStyle.top = (content?.scrollHeight || 0) - (container?.scrollTop || 0);

  const [flag, setFlag] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setFlag(flag+1);
    }, 10)
  }, [flag])

  const containerClass = "relative flex items-center justify-center transition-all duration-1000 " + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-44 h-44 landscape-sm:w-44 landscape-sm:h-44 md:w-64 md:h-64");
  const logoClass = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-1000 " + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-24 h-24 landscape-sm:w-24 landscape-sm:h-24 md:w-28 md:h-28");
  return (
    <div className={parentClass} style={parentStyle}>
      <div className={containerClass}>
        <div className="p-1 sm:p-2 rounded-full" style={{backgroundColor: '#22262A'}}>
          <img className="animate-spin-slow w-full h-full" src="/assets/text_hero_brainchild.png" alt=""/>
        </div>
        <embed className={logoClass}  style={{backgroundColor: '#22262A'}} src="/assets/logo_brain.svg" alt=""/>
      </div>
    </div>
  )
});

export default Logo;