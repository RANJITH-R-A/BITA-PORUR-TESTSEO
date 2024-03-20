import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router';

export default function MyTeam() {
  const urllocation4 = useLocation();
  const canonicalUrl4 = "https://lightcluod.netlify.app" + urllocation4.pathname;
  return (
    <>
     <Helmet>
      <title>myteam</title>
      <meta name="description" content="myteam page need page information" />
      <link rel="canonical" href={canonicalUrl4} />
    </Helmet>
    <section>
      <h1>My Team</h1>
    </section>
      </>
  )
}
