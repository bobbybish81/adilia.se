import React from 'react';
import clients from '../utils/clients';

const Slider = () => {

  return (
    <section className='slider-container'>
      <div className='slider'>
        <div className='slide-track'>
          {clients.map((client, index) => 
            <div className='slide'>
              <a
                href={`https://${client}.se/`}
                target='_blank'
                rel='noreferrer'>
                <img
                  className='slide-img'
                  src={require(`../assets/customers/${client}.webp`)}
                  alt={'client to appear'} />
              </a>
            </div>
          )}
          {clients.map((client, index) => 
            <div className='slide'>
              <a
                href={`https://${client}.se/`}
                target='_blank'
                rel='noreferrer'>
                <img
                  className='slide-img'
                  src={require(`../assets/customers/${client}.webp`)}
                  alt={'client to appear'} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;