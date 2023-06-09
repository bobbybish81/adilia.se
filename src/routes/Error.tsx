import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Error.css';

const Error = () => {

  return (
    <section className='error-section'>
      <article>
        <h1>Sorry! Page Not found</h1>
        <Link to={'/'}>
          <p>GÅ TILL HEMSIDA</p>
        </Link>
      </article>
    </section>
  )
}

export default Error