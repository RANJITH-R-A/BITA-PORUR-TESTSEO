import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';



const About = () => {
  const urllocation2 = useLocation();
  <meta name="description" content="aboutpageneedpageinformation" />
  const canonicalUrl2 = "https://lightcluod.netlify.app" + urllocation2.pathname;
  return (
    <>
     <Helmet>
      <title>about</title>
      <meta name="description" content="about page need page information" />
      <link rel="canonical" href={canonicalUrl2} />
    </Helmet>
      <section>
        <h1>About Page</h1>
      </section>
    </>
  )
}

export default About


