import React from 'react';
import services from '../utils/services';
import '../styles/Services.css';

const Services = () => {

  return (
    <section className='services-section' id='services'>
      <div className='services-container'>
        <h1>Våra Tjänster</h1>
        <div className='services'>
          {services.map((service, index) => (
            <article
              className='services-article'
              key={index}>
              <img
                className='service-img'
                // src={require(`../assets/services/${service.title}.webp`)}
                src={require(`../assets/services/Renovering.webp`)}
                alt='service to appear'/>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services