import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Facilities from "./Components/Facilities/Facilities"
import Announcements from "./Components/Announcements/Announcements"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div>
        <Hero/>
        <div className="container">
          <Navbar/>
          <Title subTitle="Our Program" Title="What We Offer" className='about-img'/>
          <Programs/>
          <About/>
          <Title subTitle="Gallery" Title="Facilities/Campus" className='about-img'/>
          <Facilities/>
          <Title subTitle="Announcements" Title="Whats new?" className='about-img'/>
          <Announcements/>
          <Title subTitle="Contact us" Title="Get in Touch" className='about-img'/>
          <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
