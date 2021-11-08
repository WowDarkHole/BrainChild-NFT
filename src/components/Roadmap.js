import React, { useEffect, useState, useRef } from 'react';
import useDraggableScroll from './DraggableScroll';
import Splitting from 'splitting';
import moment from 'moment';

const Roadmap = () => {
  const timeLeft = moment.duration(
    moment('15/12/2021',"DD/MM/YYYY HH:mm:ss").diff(
      moment(new Date(),"DD/MM/YYYY HH:mm:ss")
    )
  );

  const [timeString, setTimeString] = useState(timeLeft);

  useEffect(() => {
    Splitting({ by: 'items', matching: 'span' });
    
  }, [timeString]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeLeft = moment.duration(
        moment('15/12/2021',"DD/MM/YYYY HH:mm:ss").diff(
          moment(new Date(),"DD/MM/YYYY HH:mm:ss")
        )
      );
      setTimeString(timeLeft);
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const formatNumber = (number) => {
    return ("0"+number).slice(-2);
  }

  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);
  
  const day = moment('15/12/2021',"DD/MM/YYYY HH:mm:ss").diff(
    moment(new Date(),"DD/MM/YYYY HH:mm:ss"),
    'days'
  );
  const hour = timeString.hours();
  const minute = timeString.minutes();
  const second = timeString.seconds();

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
                  <span className="item">{formatNumber(day)}d</span>
                  <span className="item">{formatNumber(hour)}h</span>
                  <span className="item">{formatNumber(minute)}m</span>
                  <span className="item">{formatNumber(second)}s</span>
                  <span className="item">&emsp;</span>
                  <span className="item">{formatNumber(day)}d</span>
                  <span className="item">{formatNumber(hour)}h</span>
                  <span className="item">{formatNumber(minute)}m</span>
                  <span className="item">{formatNumber(second)}s</span>
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