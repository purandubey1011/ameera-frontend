import React from 'react';
import Hero from './Hero';
import Footer from '../Footer.jsx';
import AboutAmeera from './AboutAmeera.jsx';
import Review from './Review.jsx';
import Features from './Features';
import TasteOfAmeera from './TasteOfAmeera.jsx';
import Testimonials from './Testimonials.jsx';
import Bookyourtable from './Bookyourtable.jsx';
import Images from './Images.jsx'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutAmeera/>
      <Review/>
      <Features/>
      <TasteOfAmeera/>
      <Testimonials/>
      <Bookyourtable/>
      <Images/>
      <Footer/>
    </div>
  );
};

export default Home;
