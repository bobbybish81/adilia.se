import React, { useLayoutEffect } from 'react';
import Intro from '../components/Intro'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials';

const Home = () => {

  useLayoutEffect(() => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
  })

  return (
    <main>
      <Intro/>
      <AboutUs/>
      <Services/>
      <Testimonials/>
    </main>
  )
}

export default Home