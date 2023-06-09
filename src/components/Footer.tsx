import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

  return (
    <footer className='footer'>
      <div className='footer-links'>
        <a href='/integritetspolicy'><p>Integritetspolicy</p></a>
        <a href='tel:+46729146915'><p>Telefon: 072-914 69 15</p></a>
        <a href='mailto:info@adilia.se'><p>E-post: info@adilia.se</p></a>
        <p>Website developed by <a
            href='https://robertbishwebdeveloper.com'
            target='_blank'
            rel='noreferrer'>
            <b>Robert Bish</b>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer