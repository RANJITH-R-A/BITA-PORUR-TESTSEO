import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';



export default function Contact() {
  const urllocation5 = useLocation();
  const canonicalUrl5 = "https://lightred.netlify.app" + urllocation5.pathname;
  return (
    <>
     <Helmet>
      <title>contact</title>
      <link rel="canonical" href={canonicalUrl5} />
    </Helmet>
      <section>
          <h1>Contact Page</h1>
      </section>


    </>
  );
}
