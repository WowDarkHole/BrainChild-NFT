import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';
import FullPage from '../components/FullPage';
import Slide from '../components/Slide';


const Landing = () => {
  return (
    <>
      <embed className="app-bg" src="/assets/resource_landing_image3.jpg"/>
      <div className="App">
        <FullPage>
          <Slide>
            <Hero/>
          </Slide>
          <Slide>
            <Concept/>
          </Slide>
          <Slide>
           <Roadmap/>
          </Slide>
          <Slide>
            <Connect/>
          </Slide>
        </FullPage>
      </div>
    </>
  );
}

export default Landing;
