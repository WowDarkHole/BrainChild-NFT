import React from 'react';

import Scrollbar from './Scrollbar';
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
        <Scrollbar className="absolute bottom-20 left-16 hidden sm:block"/>
        <embed className="absolute top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
      </div>
    </div>
  );
}

export default Concept;