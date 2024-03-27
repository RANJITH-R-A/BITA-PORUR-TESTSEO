import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';
import homeimg from '../../public/all-images/md_bgimg01.jpeg'

const Home = () => {
  const urllocation1 = useLocation();
  const canonicalUrl1 = "https://lightcluod.netlify.app" + urllocation1.pathname;
  return (
    <>
      <Helmet>
        <title>home</title>
      <meta name="description" content="home page need page information" />
        <link rel="canonical" href={canonicalUrl1} />
        <meta property="og:title" content="Light Cluod" />
        <meta property="og:description" content="home page need page information." />
        <meta property="og:image" content={canonicalUrl1+homeimg} />
        <meta property="og:url" content={canonicalUrl1} />
      </Helmet>
      <section >
        <h1>Home Page</h1>
      </section>
    </>
  )
}

export default Home