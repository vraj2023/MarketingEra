import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Navbar from "./Navbar"
import Home from './Home';
import About from "./About"
import Services from './Services/Services';
import Footer from './Footer';
// import Contact from "./Contact"
const App = () => {
  return (
    <>
    <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path='/services' element={<Services/>}/>
        
        {/* <Route path='/Courses' element={<Courses/>}/> */}
        
        <Route path='/about' element={<About/>}/>
        
        <Route path='/services' element={<Services/>}/>

        {/* <Route path='/contact' element={<Contact/>}/> */}
       </Routes> 
       <Footer/>
    </>
  )
};

export default App