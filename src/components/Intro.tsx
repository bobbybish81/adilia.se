import React from 'react';
import Slider from './Slider';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <section className='intro-section'>
      <article className='intro-article'>
        <h1>Vi finns här för dig</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci a alias minima aperiam ea perspiciatis sint id tempora ad est perferendis vel, non dolores sapiente nihil ab veniam eos reiciendis!</p>
      <Slider/>
      </article>
    </section>
  )
}

export default Intro