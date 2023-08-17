import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className='aboutus-section' id='aboutus'>
      <div className='aboutus-container'>
        <h1>Om Oss</h1>
        <div className='aboutus'>
          <article className='aboutus-text'>
            <p>Välkommen till <b>ADILIA!</b> Vi är ett dedikerat team baserat i Stockholm, specialiserat på affärsutveckling, marknadsföring och strategi. Med vår expertis och skräddarsydda tillvägagångssätt strävar vi efter att hjälpa företag inom olika branscher att maximera sin tid och öka sin omsättning.</p>
            <p>Vi erbjuder kvalificerad hjälp att hjälpa dig bygga en stark kundstock. Detta göt vi genom att sätta dig i kontakt med nya, unika kunder som önskar din hjälp. Genom diverse garantier kan vi ge dig den bästa hjälpen som marknaden har att erbjuda.</p>
            <p>Vi tillhandahåller även expertis som kan hjälpa dig att ta dig an större projekt och öka din konvertering bland nya kunder. Helt enkelt mer pengar in i kassan på ett strukturerat sätt som kan upprepas.</p>
          </article>
          {/* <article className='aboutus-info'>
            <img
              className='aboutus-img'
              src={require('../assets/aboutus-img.webp')}
              alt='aboutUs img to appear'/>
            <div className='aboutus-quote'>
              <p>{`"Vårt mål är att vara din pålitliga partner i Stockholm, tillhandahålla experttjänster för att lyfta ditt företag och hjälpa dig att nå framgång genom att låsa upp ditt företags fulla potential och överträffa dina förväntningar"`}</p>
              <h6>CEO, Tariq Kermoury</h6>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  )
}

export default AboutUs