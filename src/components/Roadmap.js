import React, { useEffect } from 'react';
import Splitting from 'splitting';

import Scrollbar from './Scrollbar';

const Roadmap = () => {
  useEffect(() => {
    const results = Splitting({ by: 'items', matching: 'span' });
    console.log(results);
  });
  return (
    <div className="app-bg" style={{backgroundImage: 'url(/assets/resource_landing_image3.jpg)'}}>
      <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image4.svg)'}} >
        <div className="relative min-h-screen flex items-center">
          <div className="flex overflow-x-scroll py-32 min-w-full justify-center">
            <div className="relative min-w-full flex justify-center">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full" style={{height:'50px', backgroundColor:'#FF8797', zIndex: '-1'}}></div>
              <embed src="/assets/image_roadmap_timeline.svg"/>
              <h1 className="absolute left-1/2 top-full transform -translate-y-1/2 translate-x-1/4" data-splitting>
                <div className="h-full w-full bg-cover" style={{backgroundImage: 'url(/assets/image_roadmap_left.png)'}}>
                  <span className="item">53d</span>
                  <span className="item">08h</span>
                  <span className="item">32m</span>
                  <span className="item">12s</span>
                  <span className="item">&emsp;</span>
                  <span className="item">53d</span>
                  <span className="item">08h</span>
                  <span className="item">32m</span>
                  <span className="item">12s</span>
                </div>
              </h1>
            </div>
          </div>
          <Scrollbar className="absolute bottom-20 left-16 hidden sm:block"/>
          <embed className="absolute top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;