import React from 'react';

const Logo = React.forwardRef(({className, slide}, ref) => {
  const container = ref.current?.getBoundingClientRect();
  const parentClass = "absolute transform -translate-x-1/2 " + className + (slide > 0 && slide < 3 ? "" : " -translate-y-1/2");

  const parentStyle = {top: '20px'};
  if(slide === 0) parentStyle.top = window.innerHeight - container.height;
  if(slide === 3) parentStyle.top = container.height;

  const containerClass = "relative flex items-center justify-center transition-all duration-700 " + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-48 sm:w-64 h-48 sm:h-64");
  const logoClass = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-700 " + (slide > 0 && slide < 3 ? "w-20 h-20" : "w-24 h-24 sm:w-28 sm:h-28");
  return (
    <div className={parentClass} style={parentStyle}>
      <div className={containerClass}>
        <div className="p-2 sm:p-4 rounded-full" style={{backgroundColor: '#22262A'}}>
          <img className="animate-spin-slow w-full h-full" src="/assets/text_hero_brainchild.png" alt=""/>
        </div>
        <embed className={logoClass}  style={{backgroundColor: '#22262A'}} src="/assets/logo_brain.svg" alt=""/>
      </div>
    </div>
  )
});

export default Logo;