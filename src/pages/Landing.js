import React from 'react';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Roadmap from '../components/Roadmap';

const Landing = () => {
  return (
    <div className="App">
      <Hero />
      <Concept />
      <Roadmap />
    </div>
  );
}

export default Landing;
