import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'


const About = () => {
  return (
    <>
     <Helmet>
      <title>about</title>
      <meta name="description" content="about page need page information" />
      <link rel="canonical" href="http://localhost:5173/about" />
    </Helmet>
      <section>
        <h1>About Page</h1>
      </section>
    </>
  )
}

export default About


