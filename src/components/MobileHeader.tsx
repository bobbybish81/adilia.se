import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import '../styles/Header.css';

interface MobileHeaderProps {
  scrollToSection: (string:string) => void
}

const MobileHeader = ({ scrollToSection } : MobileHeaderProps) => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  };

  const menuStyles = {
    Active: {
      height: '25rem',
      borderBottom: '2px solid #3E6B94'
    },
    Inactive: {
      height: '0',
      borderBottom: 'none'
    }
  }

  return (
    <header
      className='mobile-header'
      style={{backgroundColor: '#180430'}}>
      <nav className='mobile-nav'>
        <Link to='/'>
          <img
            className='mobile-logo'
            src={require('../assets/logo.webp')}
            alt='logo to appear'/>
        </Link>
        {openMenu ? <IoClose className='menu-closebtn' onClick={menuToggle}/> :
        <IoMenu className='menu-openbtn' onClick={menuToggle}/>}
          <div className='mobile-menu' style={openMenu ? menuStyles.Active : menuStyles.Inactive}>
            <ul>
              <Link to='/' className='mobile-navlink' onClick={()=> scrollToSection('aboutus')}>
                <li onClick={menuToggle}><AiOutlineStar className='link-icon'/>OM OSS</li>
              </Link>
              <Link to='/' className='mobile-navlink' onClick={()=> scrollToSection('services')}>
                <li onClick={menuToggle}><AiOutlineStar className='link-icon'/>VÅRA TJÄNSTER</li>
              </Link>
              <Link to='/' className='mobile-navlink' onClick={()=> scrollToSection('testimonials')}>
                <li onClick={menuToggle}><AiOutlineStar className='link-icon'/>VITTNESMÅL</li>
              </Link>
              <Link to='/contact' className='mobile-navlink'>
                <li onClick={menuToggle}><AiOutlineStar className='link-icon'/>KONTAKTA OSS</li>
              </Link>
              <Link to='/integritetspolicy' className='mobile-navlink'>
                <li onClick={menuToggle}><AiOutlineStar className='link-icon'/>INTEGRITETSPOLICY</li>
              </Link>
            </ul>
          </div>
      </nav>
    </header> 
  )
}

export default MobileHeader