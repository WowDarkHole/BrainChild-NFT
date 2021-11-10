import React, { forwardRef } from 'react';

import Card from './Card';

const Concept = forwardRef((_, ref) => {

  return (
    <div className="relative min-h-screen items-center flex justify-center" ref={ref.containerRef}>
      <div className="flex px-8 md:px-32 pb-16 pt-32 md:pt-36 sm:pb-20" style={{height: 'max-content'}} ref={ref.contentRef}>
        <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-8">
          <Card type="redeem"/> 
          <Card type="enhance"/>
          <Card type="participate"/> 
          <Card type="vote"/> 
        </div>
      </div>
    </div>
  );
});

export default Concept;