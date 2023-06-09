import React, { useLayoutEffect } from 'react';
import '.././styles/Policy.css'

const Policy = () => {

useLayoutEffect(() => {
  window.scrollTo(0,0)
})

  return (
    <main>
      <section className='policy-section'>
        <h2 className='policy-heading'>Adilia’s integritetspolicy</h2>
        <p style={{fontSize: '1.1rem'}}>Vi värnar om din integritet och därför är vi måna om att skydda de personuppgifter vi har om dig. All behandling av dina personuppgifter sker i enlighet med dataskyddsförordningen (GDPR) och vår policy beskriver vilka rättigheter du har och hur du gör dem gällande.</p>

        <h4 className='policy-heading'>Vad är en personuppgift?</h4>
        <p>Med personuppgifter menas all slags information som direkt eller indirekt kan kopplas till en person. Exempel på personuppgifter är: namn, adress, telefonnummer och personnummer. Även krypterade uppgifter och olika slags elektroniska identiteter (t.ex. IP-nummer) är personuppgifter om de kan kopplas till en person. Några vanliga exempel är: att samla in personuppgifter, att registrera och organisera dem i ett kundregister när du kontaktar oss för att få en offert, att lagra dem i t.ex. IT-system, att föra över dem till någon annan och att radera dem.</p>

        {/* <h4 className='policy-heading'>Varför samlar vi in uppgifter?</h4> */}

        <h4 className='policy-heading'>Hantera offertförfrågan</h4>
        <p>När du kontaktar oss för att få en offert sparar vi dina kontaktuppgifter för att kunna svara på din förfrågan. Vi vidarebefordrar även ritningsunderlag till våra underleverantörer där ditt namn förekommer.</p>

        <h4 className='policy-heading'>Hantera beställning</h4>
        <p>Utöver att dina uppgifter används för hantera din beställning kan uppgifterna användas för att informera dig om vad som är på gång och för att svara på frågor som du ställer till oss.</p>

        <h4 className='policy-heading'>Vem samlas personuppgifterna in från?</h4>
        <p>Personuppgifterna samlas in direkt från dig i samband med att du kontaktar oss. Personuppgifterna kan även samlas in från statens personadressregister för att se till att vi har rätt uppgifter till dig, t.ex. om du flyttar.</p>

        <h4 className='policy-heading'>Vem delas personuppgifterna med</h4>
        <p>Dina personuppgifter delas med olika samarbetspartners som t.ex. underleverantörer av tjänster och med våra revisorer, vår och din bank och leverantörer av våra IT-system som vi behöver för vår verksamhet.</p>

        <h4 className='policy-heading'>Rättslig grund till hantering av personuppgifter</h4>
        <p>Dina personuppgifter sparas under tiden du har en beställning med garantitid och för vår bokföring. Vi sparar dina personuppgifter under garantitid, så att du kan kontakta oss om något är fel.</p>

        <p>Vi sparar dina uppgifter som behövs för vår bokföring (exempelvis alla beställningar, fakturor och betalningar) och skatteunderlag. Enligt lag måste dessa uppgifter sparas i sju år. För att inte behandla personuppgifter i onödan och utan anledning raderar vi regelbundet de personuppgifter
        som inte längre behövs. Uppgifterna raderas efter ovanstående kriterier.</p>

        <h4 className='policy-heading'>När dina personuppgifter behandlas av oss har du följande rättigheter</h4>
        <p>Du har rätt att få veta vilka personuppgifter som vi behandlar om dig och kan be oss om en kopia av dessa.</p>
        <p>Du har rätt att få felaktiga personuppgifter om dig rättade.</p>
        <p>Du har rätt att be oss radera dina personuppgifter (t.ex. om vi inte har anledning att behandla dem eller om du inte längre samtycker). Även om du ber oss radera dina personuppgifter kan vi ibland behöva spara vissa personuppgifter, t.ex. när lagen kräver att vi gör det eller om behandlingen krävs för att kunna försvara eller göra gällande våra rättsliga intressen.</p>
        <p>Du har rätt att invända mot viss behandling av dina personuppgifter och begära att behandlingen av dina personuppgifter begränsas, exempelvis i väntan på att felaktiga uppgifter kontrolleras och eventuellt korrigeras. Notera att en begränsning eller radering av dina personuppgifter kan innebära att vi inte har möjlighet att fullfölja våra åtaganden gentemot dig.</p>
        <p>Du har rätt att få ut dina personuppgifter i ett maskinläsbart format och överföra dem till en annan personuppgiftsansvarig, så kallad dataportabilitet. Detta gäller bara personuppgifter som du själv har gett oss, som behandlas automatiskt av oss och som vi behandlar för att hålla vad vi lovat i avtalet med dig eller för att du samtyckt.</p>
        <p>Du har rätt att när som helst ångra ditt samtycke för behandling som vi gör för att du godkänt den.</p>
        <p>Det är viktigt att veta att, om du ångrar ett samtycke, gäller det bara framåt och inte för behandling som redan gjorts.</p>

        <h4 className='policy-heading'>Våra skyldigheter</h4>
        <p>Våra skyldigheter är att vara ansvarig för hur dina personuppgifter behandlas och bestämma för vilka ändamål uppgifterna ska användas till.</p>

        <h4 className='policy-heading'>Kontaktuppgifter om du har frågor eller vill utöva dina rättigheter</h4>
        <p>Om du har frågor om hur vi behandlar dina personuppgifter eller om du vill använda de rättigheter du har när vi behandlar dina personuppgifter är du välkommen att kontakta per e-post: <a href='mailto:info@adilia.se'>info@adilia.se</a></p>

        <h4 className='policy-heading'>Säkerhetsåtgärder</h4>
        <p>Dina personuppgifter behandlas enligt lagen och på ett säkert sätt. Rutiner finns för att skydda dina personuppgifter och värna din integritet. Till exempel behandlar vi bara sådana personuppgifter som vi verkligen behöver och är noga med att radera personuppgifter när de inte behövs längre. Kontinuerligt uppdateras de system som används för att behandla personuppgifter så att de är tillräckligt säkra t.ex. genom anti-virusprogram, brandväggar och system för att upptäcka personuppgifter i olika IT-system.</p>
        <p>Vi är personuppgiftsansvariga gentemot våra kunder.</p>
        <p>Vi kräver således och kontrollerar även att våra samarbetspartners behandlar dina personuppgifter på ett säkert sätt och enligt lag.</p>

      </section>
    </main>
  )
}

export default Policy