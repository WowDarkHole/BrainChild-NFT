import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';
import Connect from '../components/Connect';
import Scrollbar from '../components/Scrollbar';
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
          <Scrollbar className="fixed bottom-20 left-16 hidden sm:block"/>
          <embed className="fixed top-4 left-4 w-16 sm:hidden" src="/assets/btn_hero_scroll.png"/>
        </FullPage>
      </div>
    </>
  );
}

export default Landing;
