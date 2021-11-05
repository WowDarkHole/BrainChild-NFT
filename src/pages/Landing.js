import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';
import Scrollbar from '../components/Scrollbar';


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
          <Scrollbar className="absolute bottom-20 left-16 hidden sm:block"/>
          <embed className="absolute top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
        </div>
      </div>
    </>
  );
}

export default Landing;
