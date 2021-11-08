import React, { useEffect, useState, useRef } from 'react';
import useDraggableScroll from './DraggableScroll';
import Splitting from 'splitting';

const Roadmap = () => {
  const [timeString, setTimeString] = useState(new Date());
  useEffect(() => {
    Splitting({ by: 'items', matching: 'span' });
    
  }, [timeString]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date();
      setTimeString(time);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  const day = timeString.getDate();
  const hour = timeString.getHours();
  const minute = timeString.getMinutes();
  const second = timeString.getSeconds();

  return (
    <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image4.svg)'}} >
      <div className="relative h-screen flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar" ref={ref} onMouseDown={onMouseDown} style={{cursor: 'url(/assets/image_cursor_drag.svg), auto'}}>
        <div className="flex py-24 m-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 min-w-full" style={{height:'40px', backgroundColor:'#FF8797'}}>a</div>
          <div className="relative w-full">
            <embed className="pointer-events-none m-auto" src="/assets/image_roadmap_timeline.svg"/>
            <h1 className="absolute left-1/2 top-full transform -translate-y-1/2 translate-x-1/4" data-splitting>
              <div className="h-full w-full bg-cover rounded-full" style={{backgroundImage: 'url(/assets/image_ethereum_clock.gif)', clipPath: 'circle(49%)'}}>
                <div className="h-full w-full animate-spin-slow">
                  <span className="item">{day}d</span>
                  <span className="item">{hour}h</span>
                  <span className="item">{minute}m</span>
                  <span className="item">{second}s</span>
                  <span className="item">&emsp;</span>
                  <span className="item">{day}d</span>
                  <span className="item">{hour}h</span>
                  <span className="item">{minute}m</span>
                  <span className="item">{second}s</span>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;