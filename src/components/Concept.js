import React, { forwardRef } from 'react';

import Card from './Card';

const Concept = forwardRef((_, ref) => {

  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image4.svg)'}} >
      <div className="relative h-screen flex justify-center overflow-y-scroll sm:overflow-y-hidden">
        <div className="flex px-8 md:px-32 pb-16 pt-32 md:pt-44 sm:pb-24" style={{height: 'max-content'}} ref={ref}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card type="redeem"/> 
            <Card type="enhance"/>
            <Card type="participate"/> 
            <Card type="vote"/> 
          </div>
        </div>
      </div>
    </div>
  );
});

export default Concept;