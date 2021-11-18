import React, { forwardRef, useState } from 'react';
import useDraggableScroll from './DraggableScroll';

const Roadmap = forwardRef((_, ref) => {
  const { onMouseDown } = useDraggableScroll(ref.containerRef, {direction: 'horizontal'});

  const [isHover, setIsHover] = useState(false);

  const onMouseMove = (evt) => {
    var element = document.getElementById('svgsource').getSVGDocument().getElementById('phase2');
    var elementRect = element.getBoundingClientRect();
    var rect = evt.target.getBoundingClientRect();
    var x = rect.right - evt.clientX;
    var y = evt.clientY - rect.top;
    
    if(x < elementRect.width && y < Math.abs(y-rect.width/2) < elementRect.height/2) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar mt-screen-1/4" ref={ref.containerRef} onMouseDown={onMouseDown}>
      <div className="flex py-24 m-auto w-full" ref={ref.contentRef}>
        <div className="relative w-full" id="scroll2" style={{minWidth: '1024px'}}>
          <div onMouseMove={onMouseMove} onMouseOut={() => setIsHover(false)}>
            <embed className="pointer-events-none m-auto w-full" src="/assets/image_roadmap_timeline.svg" id="svgsource"/>
          </div>
          <h1 className="absolute left-1/2 top-full transform -translate-y-1/2 translate-x-3/4">
            <div className="h-full w-full bg-cover rounded-full" style={{backgroundImage: 'url(/assets/image_ethereum_clock.gif)', clipPath: 'circle(49%)'}}>
              <div className="h-full w-full p-1 animate-spin-slow">
                <embed className="h-full w-full" src="/assets/launch_time.svg"/>
              </div>
            </div>
          </h1>
          { isHover &&
            <div className="absolute right-2 top-1/2 transform translate-y-8 p-3 w-64" style={{backgroundColor: '#22262A'}}>
              <div className="roadmap-toolip">
                Private channels and events (TBD)
              </div>
              <div className="roadmap-toolip mt-3">
                Voting for future drop concept (TBD)
              </div>
              <div className="roadmap-toolip mt-3">
                Governance token (TBD)
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
});

export default Roadmap;