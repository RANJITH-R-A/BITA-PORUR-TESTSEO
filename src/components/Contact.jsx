import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';



export default function Contact() {
  const urllocation5 = useLocation();
  const canonicalUrl5 = "https://lightcluod.netlify.app" + urllocation5.pathname;
  return (
    <>
     <Helmet>
      <title>contact</title>
      <meta name="description" content="contact page need page information" />
      <link rel="canonical" href={canonicalUrl5} />
    </Helmet>


      <section>
          <h1>Contact Page</h1>
      </section>


    </>
  );
}
