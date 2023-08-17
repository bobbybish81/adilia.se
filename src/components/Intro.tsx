import React from 'react';
import Slider from './Slider';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <section className='intro-section'>
      <article className='intro-article'>
        <h1>Vi finns här för dig</h1>
        <p>Vårt mål är att tillhandahålla vår partner med kvalitativa, unika kunder. Med hjälp av våra experttjänster lyfta ditt företag och hjälpa dig att nå framgång genom att låsa upp ditt företags fulla potential och öka dina affärsmöjligheter.</p>
        <Slider/>
      </article>
    </section>
  )
}

export default Intro