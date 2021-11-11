import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';
import FullPage from '../components/FullPage';


const Landing = () => {
  window.devicePixelRatio = 1.1;
  return (
    <>
      <embed className="app-bg" src="/assets/resource_landing_image3.jpg"/>
      <div className="App">
        <FullPage>
          <Hero/>
          <Concept/>
          <Roadmap/>
          <Connect/>
        </FullPage>
      </div>
    </>
  );
}

export default Landing;
