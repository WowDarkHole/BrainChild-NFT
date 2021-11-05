import React from 'react';

import Card from './Card';

const Concept = () => {

  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image4.svg)'}} >
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="flex px-8 md:px-32 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card type="participate"/> 
            <Card type="vote"/> 
            <Card type="redeem"/> 
            <Card type="enhance"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concept;