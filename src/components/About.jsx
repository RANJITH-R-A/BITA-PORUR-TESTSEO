import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';
import homeimg from '../../public/all-images/md_bgimg01.jpeg'




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
      <meta property="og:title" content="Light Cluod" />
        <meta property="og:description" content="About page need page information." />
        <meta property="og:image" content={"https://lightcluod.netlify.app"+homeimg} />
        <meta property="og:url" content="https://lightcluod.netlify.app" />
    </Helmet>
      <section>
        <h1>About Page</h1>
        {/* <img src={homeimg} alt="img" /> */}
      </section>
    </>
  )
}

export default About


