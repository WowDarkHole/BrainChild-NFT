import React from 'react';

const Logo = ({className}) => {
  const parentClass = "absolute transform -translate-x-1/2 -translate-y-1/2 "+className;

  return (
    <div className={parentClass}>
      <div className="relative w-40 sm:w-64 h-40 sm:h-64 p-4 rounded-full" style={{backgroundColor: '#22262A'}}>
        <img className="animate-spin-slow w-full h-full" src="/assets/text_hero_brainchild.png" />
        <img className="absolute w-1/4 h-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/logo_brain.png" />
      </div>
    </div>
  )
}

export default Logo;