import React from 'react';

const Logo = React.forwardRef(({className, scroll, onClick, halfHeight, scrollbarWidth}, ref) => {

  let slide = 0;

  if (scroll < 5) {
    slide = 0;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+halfHeight) {
    slide = 1;
  } else if(scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+3*halfHeight){
    slide = 2;
  } else if(scroll < ref.containerRefs[0].current?.clientHeight+ref.containerRefs[1].current?.clientHeight+ref.containerRefs[2].current?.clientHeight+ref.containerRefs[3].current?.clientHeight+4*halfHeight-20){
    slide = 3;
  } else if(scroll < ref.containerRefs[0].current?.clientHeight
                    +ref.containerRefs[1].current?.clientHeight
                    +ref.containerRefs[2].current?.clientHeight
                    +ref.containerRefs[3].current?.clientHeight
                    +ref.containerRefs[4].current?.clientHeight
                    +ref.containerRefs[5].current?.clientHeight
                    -window.innerHeight
                    +5*halfHeight-20){
    slide = 4;
  } else {
    slide = 5;
  }

  let parentClass = "absolute cursor-pointer transform -translate-x-1/2 transition-all duration-700 -translate-y-1/2 " + className + (slide === 0 || slide === 5 ? " pointer-events-none": " pointer-events-auto");

  const containerClass = "relative flex items-center justify-center transition-all duration-700 "
     + (slide > 0 && slide < 5 ? "w-16 h-16" : "w-44 h-44 md:w-64 md:h-64");
  const parentStyle = {top: '50px', '--tw-translate-x': 'calc(-50% - '+scrollbarWidth/2+'px)'};
  const containerStyle= {width: '11rem', height: '11rem'}
  if(window.innerWidth > 768) containerStyle.width = containerStyle.height = '16rem';
  if(scroll < 5) {
    parentStyle.top = ref.contentRefs[0].current?.getBoundingClientRect().top;
  } else if (scroll < ref.containerRefs[0].current?.clientHeight) {
    const fromPos = ref.contentRefs[0].current?.getBoundingClientRect().top;
    if(ref.containerRefs[0].current?.clientHeight > 0) {
      const percent = 1;//scroll/ref.containerRefs[0].current?.clientHeight;
      parentStyle.top = fromPos-(fromPos-50)*percent;

      let value = (11-7*percent)+'rem';
      if(window.innerWidth > 768) value = (16-12*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else if (scroll > ref.containerRefs[0].current?.clientHeight
                     +ref.containerRefs[1].current?.clientHeight
                     +ref.containerRefs[2].current?.clientHeight
                     +ref.containerRefs[3].current?.clientHeight
                     +ref.containerRefs[4].current?.clientHeight
                     +ref.containerRefs[5].current?.clientHeight
                     -window.innerHeight
                     +5*halfHeight-20
  ) {
    if(ref.containerRefs[5].current.getBoundingClientRect().top < -1){
      parentClass = parentClass.replace("transition-all", "");
      parentClass = parentClass.replace("duration-700", "");
    }
    const toPos = ref.contentRefs[5].current?.clientHeight+ref.containerRefs[5].current.getBoundingClientRect().top;
    if(ref.containerRefs[5].current?.clientHeight > 0) {
      const percent = 1;
      parentStyle.top = 50-(50-toPos)*percent;

      let value = (4+7*percent)+'rem';
      if(window.innerWidth > 768) value = (4+12*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else {
    parentStyle.top = '50px';
    containerStyle.width = containerStyle.height = '4rem';
  }

  if(!parentStyle.top) parentStyle.top = 0;

  const logoClass = "absolute top-1/2 left-1/2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-700 "
   + (slide > 0 && slide < 5 ? "w-16 h-16" : "w-24 h-24 md:w-28 md:h-28");
  
  return (
    <div className={parentClass} style={parentStyle} onClick={onClick}>
      <div className={containerClass} style={containerStyle}>
        <div className="p-0 sm:p-1 rounded-full" style={{backgroundColor: '#22262A'}}>
          <img className="animate-spin-slow w-full h-full" src="/assets/text_hero_brainchild.webp" onError={(evt) => {evt.currentTarget.src="/assets/text_hero_brainchild.png"}} alt=""/>
        </div>
        <embed className={logoClass}  style={{backgroundColor: '#22262A'}} src="/assets/logo_brain.svg" alt=""/>
      </div>
    </div>
  )
});

export default Logo;