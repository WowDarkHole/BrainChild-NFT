import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';


const Landing = () => {
  return (
    <>
      <embed className="app-bg" src="/assets/resource_landing_image3.jpg"/>
      <div className="App">
        <div>
          <Hero/>
          <Concept/>
          <Roadmap/>
          <Connect/>
        </div>
      </div>
    </>
  );
}

export default Landing;
