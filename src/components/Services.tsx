import React from 'react';
import services from '../utils/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const serviceLogos = [
  faHandshake,
  faChartLine,
];

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
                <div>
                  <FontAwesomeIcon className='services-icon' icon={serviceLogos[index]} />
                </div>
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