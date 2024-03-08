import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import MyTeam from '../components/MyTeam'
import Contact from '../components/Contact'
// import { ScrollControls } from '@react-three/drei'


const MyRoutes = () => {
  return (
    <>
    {/* <ScrollControls pages={3}> */}
    <BrowserRouter>
    {/* Header  */}
   <Header/>

    {/* Contant  */}
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/myteam" element={<MyTeam/>} />
        <Route path="/contactus" element={<Contact/>} />
    </Routes>

    {/* Footer  */}
    </BrowserRouter>
    {/* </ScrollControls> */}
    </>
  )
}

export default MyRoutes