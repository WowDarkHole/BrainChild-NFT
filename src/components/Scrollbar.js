import React from 'react';

const Scrollbar = ({className}) => {
  const parentClass = "rounded-full px-3 py-8 " + className;
  return (
    <div className={parentClass} style={{backgroundColor: '#22262A'}}>
      <embed className="mb-10 mx-auto" src="/assets/text_hero_scroll.svg"/>
      <div className="relative h-44 w-px bg-gray-500 mb-10 mx-auto">
        <embed className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/scroll_thumb.svg"/>
      </div>
      <embed className="animate-bounce mx-auto" src="/assets/scroll_arrow.svg"/>
    </div>
  )
}

export default Scrollbar;