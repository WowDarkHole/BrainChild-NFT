import React from 'react';

const Logo = React.forwardRef(({className, scroll, onClick, halfHeight, scrollbarWidth}, ref) => {

  let slide = 0;

  if (scroll < 5) {
    slide = 0;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+halfHeight) {
    slide = 1;
  } else if(scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+3*halfHeight-20){
    slide = 2;
  } else {
    slide = 3;
  }

  const parentClass = "absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 transition-all duration-700 -translate-y-1/2 " + className;

  const parentStyle = {top: '50px', '--tw-translate-x': 'calc(-50% - '+scrollbarWidth/2+'px)'};
  const containerStyle= {width: '11rem', height: '11rem'}
  if(window.innerWidth > 1024) containerStyle.width = containerStyle.height = '16rem';

  if(scroll < 5) {
    parentStyle.top = ref.containerRefs[0].current?.clientHeight - ref.contentRefs[0].current?.clientHeight;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight) {
    const fromPos = ref.containerRefs[0].current?.clientHeight - ref.contentRefs[0].current?.clientHeight;
    if(ref.containerRefs[0].current?.clientHeight > 0) {
      const percent = 1;//scroll/ref.containerRefs[0].current?.clientHeight;
      parentStyle.top = fromPos-(fromPos-50)*percent;

      let value = (11-7*percent)+'rem';
      if(window.innerWidth > 1024) value = (16-12*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else if (scroll > ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+3*halfHeight-20) {
    const toPos = window.innerHeight+ref.contentRefs[3].current?.clientHeight-ref.containerRefs[3].current?.clientHeight;
    if(ref.containerRefs[3].current?.clientHeight > 0) {
      const percent = 1;//(scroll-ref.containerRefs[0].current?.clientHeight-ref.containerRefs[1].current?.clientHeight)/ref.containerRefs[2].current?.clientHeight;
      parentStyle.top = 50-(50-toPos)*percent;

      let value = (4+7*percent)+'rem';
      if(window.innerWidth > 1024) value = (4+12*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else {
    parentStyle.top = '50px';
    containerStyle.width = containerStyle.height = '4rem';
  }

  if(!parentStyle.top) parentStyle.top = 0;

  const containerClass = "relative flex items-center justify-center transition-all duration-700 "
     + (slide > 0 && slide < 3 ? "w-16 h-16" : "w-44 h-44 landscape-sm:w-44 landscape-sm:h-44 md:w-64 md:h-64");
  const logoClass = "absolute top-1/2 left-1/2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-700 "
   + (slide > 0 && slide < 3 ? "w-16 h-16" : "w-24 h-24 landscape-sm:w-24 landscape-sm:h-24 md:w-28 md:h-28");
  
  return (
    <div className={parentClass} style={parentStyle} onClick={onClick}>
      <div className={containerClass} style={containerStyle}>
        <div className="p-1 sm:p-2 rounded-full" style={{backgroundColor: '#22262A'}}>
          <img className="animate-spin-slow w-full h-full" src="/assets/text_hero_brainchild.png" alt=""/>
        </div>
        <embed className={logoClass}  style={{backgroundColor: '#22262A'}} src="/assets/logo_brain.svg" alt=""/>
      </div>
    </div>
  )
});

export default Logo;