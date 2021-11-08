import React from 'react';

import Card from './Card';

const Concept = () => {

  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image4.svg)'}} >
      <div className="relative h-screen flex items-center justify-center overflow-y-scroll sm:overflow-y-hidden">
        <div className="flex px-8 md:px-32 py-16 sm:pt-32 sm:pb-24">
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
}

export default Concept;