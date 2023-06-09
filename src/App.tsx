import React from 'react';
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Policy from './routes/Policy';
import Error from './routes/Error';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <MobileHeader scrollToSection={scrollToSection}/>
      <DesktopHeader scrollToSection={scrollToSection}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/integritetspolicy' element={<Policy/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
