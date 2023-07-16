import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className='aboutus-section' id='aboutus'>
      <div className='aboutus-container'>
        <h1>Om Oss</h1>
        <div className='aboutus'>
          <article className='aboutus-text'>
            <p>Välkommen till <b>ADILIA!</b> Vi är ett dedikerat team baserat i Stockholm, specialiserat på affärsutveckling, marknadsföring och strategi. Med vår expertis och skräddarsydda tillvägagångssätt strävar vi efter att hjälpa företag inom olika branscher att maximera sin potential och uppnå sina mål.</p>
            <p>Vi erbjuder strategisk vägledning och stöd för att hjälpa dig bygga en stark och motiverad arbetsstyrka. Från rekrytering till bemanning, vi förstår vikten av att hitta rätt personer som överensstämmer med din organisations värderingar och mål. Vårt team är skickligt på att identifiera topptalanger, vilket säkerställer en sömlös anställningsprocess som tar med de bästa människorna till ditt team.</p>
            <p>Dessutom erbjuder vi en rad tjänster för att förbättra din affärsverksamhet. Oavsett om du behöver expertrådgivning för att navigera i komplexa utmaningar eller behöver hjälp med renoveringsprojekt, finns våra erfarna proffs här för att hjälpa dig.</p>
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