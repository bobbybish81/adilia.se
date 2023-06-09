import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <main>
      <section className='contact-section'>
        <div className='contact-container'>
          <h1>Kontakt Oss</h1>
          <h4 className='mobile-h4'>Vi hjälper dig gärna</h4>
          <p className='mobile-message'>Vårt team hjälper dig med alla frågor eller kommentarer relaterade till din serviceförfrågan. Ringa oss eller fyll i formuläret så skickar Adilia ett snabbt svar.</p>
          <article className='contact'>
            <ContactForm/>
            <div>
              <h4 className='desktop-message'>Vi hjälper dig gärna</h4>
              <p className='desktop-message'>Vårt team hjälper dig med alla frågor eller kommentarer relaterade till din serviceförfrågan. Ringa oss eller fyll i formuläret så skickar Adilia ett snabbt svar.</p>
              <br></br>
              <h5 className='contact-info'>Kontaktinformation</h5>
              <div className='contact-details'>
                <p>Kontakt: Tariq Kermoury</p>
                <a href='tel:+46729146915'><FiPhone className='contact-logo'/>072-914 69 15</a>
                <a href='mailto:tariq@adilia.se'><MdOutlineEmail className='contact-logo'/>tariq@adilia.se</a>
                <Map/>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Contact;