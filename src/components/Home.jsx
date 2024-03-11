import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="home page need page informatio" />
      <link rel="canonical" href="http://localhost:5173/" />
    </Helmet>
      <section >
             <h1>Home Page</h1>
      </section>
    </>
  )
}

export default Home