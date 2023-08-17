import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {

  return (
      <section className='testimonials-section' id='testimonials'>
        <div className='testimonials-container'>
        <h1>Möt några av våra kunder</h1>
          <div className='testimonials'>
            <article className='testimonial-article'>
              <h5>Dilan S</h5>
              <h6>Kalkylator</h6>
              <p>"Adilia var väldigt tydliga med hur de kunde leverera och de höll vad de lovade. Vi fick ett bra kompetenslyft genom vårat samarbete som fortsätter än idag."</p>
            </article>
            <article className='testimonial-article'>
              <h5>Alex P</h5>
              <h6>VD</h6>
              <p>"Vi valde att samarbeta med Adilia för att vi ville växa. De gav oss nya projekt och ingångar som vi annars inte hade haft. Därför väljer vi att jobba vidare med dem."</p>
            </article>
            <article className='testimonial-article'>
              <h5>David F</h5>
              <h6>Projektledar</h6>
              <p>"En enkel investering att göra då den fortsätter ge oss avkastning långt över kostnaden. Ett professionellt bemötande och tydliga riktlinjer gör Adilia till en av våra viktigaste samarbetsparters."</p>
            </article>
          </div>
        </div>
      </section>
  )
}

export default Testimonials