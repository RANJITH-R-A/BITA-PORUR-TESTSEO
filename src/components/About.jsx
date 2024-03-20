import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'


const About = () => {
  const urllocation = useLocation();
  const canonicalUrl = "https://lighthearted-cajeta-4feab8.netlify.app" + urllocation.pathname;
  return (
    <>
     <Helmet>
      <title>about</title>
      <meta name="description" content="about page need page information" />
      <link rel="canonical" href={canonicalUrl} />
      {/* <link rel="canonical" href="/about" /> */}
    </Helmet>
      <section>
        <h1>About Page</h1>
      </section>
    </>
  )
}

export default About


