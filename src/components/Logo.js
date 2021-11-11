import React from 'react';

const Logo = React.forwardRef(({className, scroll}, ref) => {

  let slide = 0;

  if (scroll < 5) {
    slide = 0;
  } else if (scroll < ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight) {
    slide = 1;
  } else if(scroll < ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight+ref.containerRefs[2].current?.scrollHeight){
    slide = 2;
  } else {
    slide = 3;
  }
  
  const parentClass = "absolute transform -translate-x-1/2 pointer-events-none transition-all duration-700 -translate-y-1/2 " + className;

  const parentStyle = {top: '70px'};
  const containerStyle= {width: '11rem', height: '11rem'}
  if(window.innerWidth > 1024) containerStyle.width = containerStyle.height = '16rem';

  if(scroll < 5) {
    parentStyle.top = ref.containerRefs[0].current?.scrollHeight - ref.contentRefs[0].current?.scrollHeight;
  } else if (scroll < ref.containerRefs[0].current?.scrollHeight) {
    const fromPos = ref.containerRefs[0].current?.scrollHeight - ref.contentRefs[0].current?.scrollHeight;
    if(ref.containerRefs[0].current?.scrollHeight > 0) {
      const percent = 1;//scroll/ref.containerRefs[0].current?.scrollHeight;
      parentStyle.top = fromPos-(fromPos-70)*percent;

      let value = (11-6*percent)+'rem';
      if(window.innerWidth > 1024) value = (16-11*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else if (scroll > ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight+ref.containerRefs[2].current?.scrollHeight-10) {
    console.log(ref.containerRefs[0].current?.scrollHeight+ref.containerRefs[1].current?.scrollHeight+ref.containerRefs[2].current?.scrollHeight+ref.containerRefs[3].current?.scrollHeight-10);
    const toPos = ref.contentRefs[3].current?.scrollHeight;
    if(ref.containerRefs[3].current?.scrollHeight > 0) {
      const percent = 1;//(scroll-ref.containerRefs[0].current?.scrollHeight-ref.containerRefs[1].current?.scrollHeight)/ref.containerRefs[2].current?.scrollHeight;
      parentStyle.top = 70-(70-toPos)*percent;

      let value = (5+6*percent)+'rem';
      if(window.innerWidth > 1024) value = (5+11*percent)+'rem';
      containerStyle.width = containerStyle.height = value;
    }
  } else {
    parentStyle.top = '70px';
    containerStyle.width = containerStyle.height = '5rem';
  }

  const containerClass = "relative flex items-center justify-center "
     + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-44 h-44 landscape-sm:w-44 landscape-sm:h-44 md:w-64 md:h-64");
  const logoClass = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-700 "
   + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-24 h-24 landscape-sm:w-24 landscape-sm:h-24 md:w-28 md:h-28");
  return (
    <div className={parentClass} style={parentStyle}>
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