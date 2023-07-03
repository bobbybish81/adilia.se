import React from 'react';
import clients from '../utils/clients';
import '../styles/Testimonials.css';

const Testimonials = () => {

  return (
      <section className='testimonials-section' id='testimonials'>
        <div className='testimonials-container'>
        <h1>Möt några av våra kunder</h1>
          <div className='testimonials'>
            <article className='testimonial-article'>
              <h5>Zlatan Ibrahomovic</h5>
              <h6>International Superstar</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis! Porro perferendis modi magni, quos exercitationem veniam quo, aspernatur quasi blanditiis quibusdam obcaecati alias sunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis!</p>
            </article>
            <article className='testimonial-article'>
              <h5>Christiano Ronaldo</h5>
              <h6>Cry baby with inflated ego</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis! Porro perferendis modi magni, quos exercitationem veniam quo, aspernatur quasi blanditiis quibusdam obcaecati alias sunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis!</p>
            </article>
            <article className='testimonial-article'>
              <h5>Lionel Messi</h5>
              <h6>The GOAT</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis! Porro perferendis modi magni, quos exercitationem veniam quo, aspernatur quasi blanditiis quibusdam obcaecati alias sunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa sed assumenda, accusantium amet debitis!</p>
            </article>
          </div>
          <h3 className='client-logo-header'>Du är i bra sällskap</h3>
          <div className='client-logos'>
            {clients.map((client, index) => (
              <div>
                <a
                  href={`https://${client}.se/`}
                  target='_blank'
                  rel='noreferrer'>
                  <img
                    key={index}
                    className='client-logo-img'
                    src={require(`../assets/customers/${client}.webp`)}
                    alt='service to appear'/>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonials