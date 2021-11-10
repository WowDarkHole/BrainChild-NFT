import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';
import FullPage from '../components/FullPage';
import isMobileDevice from '../utils/is-mobile';


const Landing = () => {
  return (
    <>
      <embed className="app-bg" src="/assets/resource_landing_image3.jpg"/>
      <div className={"app-main "+(isMobileDevice() ? "" : "")} style={{backgroundImage: 'url(/assets/resource_landing_image1.svg)'}} ></div>
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
