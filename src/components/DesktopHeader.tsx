import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

interface DesktopHeaderProps {
  scrollToSection: (string:string) => void
}

const DesktopHeader = ({ scrollToSection } : DesktopHeaderProps) => {

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {path === '/' ?
      <header
        className='desktop-header'
        style={{backgroundColor: scrolling ? '#180430' : 'transparent'}}>
        <nav className='desktop-nav'>
          <Link to='/'>
            <img
              className='desktop-logo'
              src={require('../assets/logo.webp')}
              alt='logo to appear'/>
          </Link>
          <div className='d-flex justify-content-between align-items-center'>
            <Link to='/' className='desktop-navlink' onClick={()=> scrollToSection('aboutus')}>
              OM OSS
            </Link>
            <Link to='/' className='desktop-navlink' onClick={()=> scrollToSection('services')}>
              VÅRA TJÄNSTER
            </Link>
            <Link to='/' className='desktop-navlink' onClick={()=> scrollToSection('testimonials')}>
              VITTNESMÅL
            </Link>
          </div>
          <Link to='/contact'>
            <button className='contact-btn'>
              Kontakt Oss
            </button>
          </Link>
        </nav>
      </header> :
      <header
      className='desktop-header'
      style={{backgroundColor: '#180430'}}>
      <nav className='desktop-nav'>
        <Link to='/'>
          <img
            className='desktop-logo'
            src={require('../assets/logo.webp')}
            alt='logo to appear'/>
        </Link>
        <Link to='/' className='desktop-navlink'>
          GÅ TILL HEMSIDA
        </Link>
      </nav>
    </header>}
    </>
  )
}

export default DesktopHeader