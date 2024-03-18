import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import MyTeam from '../components/MyTeam'
import Contact from '../components/Contact'
import Footer from './Footer'


const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
   <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/myteam" element={<MyTeam/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes