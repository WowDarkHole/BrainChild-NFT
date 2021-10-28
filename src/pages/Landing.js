import React from 'react';
import AnotherLevel from '../components/AnotherLevel';

const Landing = () => {
  return (
    <div className="App">
      <div className="app-bg" style={{backgroundImage: 'url(/assets/resource_landing_image3.jpg)'}}>
        <div className="app-main" style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} >
          <AnotherLevel />
        </div>
      </div>
    </div>
  );
}

export default Landing;
