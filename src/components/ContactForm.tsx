import { useRef, useState, ChangeEvent } from 'react';
import services from '../utils/services';
// import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const ContactForm = () => {

  const form = useRef<HTMLFormElement>(null!);
  const [selectedValue, setSelectedValue] = useState('')

  // const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const service = process.env.REACT_APP_SERVICE || '';
  //   const template = process.env.REACT_APP_TEMPLATE || '';
  //   const publicKey = process.env.REACT_APP_PUBLICKEY || '';
  //   emailjs.sendForm(
  //     service,
  //     template,
  //     form.current,
  //     publicKey
  //     ).then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     alert('Message sent to robertbishwebdeveloper.com')
  //     navigate('/');
  // };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedValue(event.target.value);
  }

  return (
      <form 
        className='contact-form'
        // onSubmit={sendEmail}
        ref={form}>
        <h4>Kontaktformulär</h4>
        <input
          type='text'
          name='user_name'
          placeholder='Namn *'
          required/>
        <input
          type='text'
          name='telefon'
          placeholder='Telefon *'
          required/>
        <input
          type='email'
          name='user_email'
          placeholder='E-postadress *'
          required/>
        <label>Vad behöver du hjälp med?</label>
        <select
          style={{color: selectedValue === '' ? '#757575' : '#000'}}
          onChange={handleSelectChange}
          required>
          <option disabled value=''>Välj en tjänst</option>
          {services.map((service, index) => (
            <option
              key={index}
              value={service.title}>{service.title}</option>
          ))}
        </select>
        <textarea name='message' placeholder='Beskriv ert behov, förutsättningar & eventuellt adress'/>
        <button
          className='form-btn'
          type='submit'>
          SKICKA
        </button>
      </form>
  );
}

export default ContactForm;