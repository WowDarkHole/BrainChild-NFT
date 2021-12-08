import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import EthClock from '../components/EthClock';
import Faq from '../components/Faq';
import Connect from '../components/Connect';
import FullPage from '../components/FullPage';


const Landing = () => {
  window.devicePixelRatio = 1.1;
  return (
    <>
      <img className="app-bg" src="/assets/resource_landing_image3.webp" onError={(evt)=>{evt.currentTarget.src="/assets/resource_landing_image3.jpg"}} alt=""/>
      <div className="App">
        <FullPage>
          <Hero/>
          <Concept/>
          <Roadmap/>
          <EthClock/>
          <Faq/>
          <Connect/>
        </FullPage>
      </div>
    </>
  );
}

export default Landing;
