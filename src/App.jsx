import React, { useEffect } from 'react'
import Intro from './component/Intro'
import Contact_section from './component/Contact_section'
import Thought from './component/Thought'
import Project from './component/Project'
import Appoiment from './component/Appoiment'
import Footer from './component/Footer'
import Aos from "aos"
import "aos/dist/aos.css"
// import Form from './component/Form'


const App = () => {
  useEffect(() => {
    Aos.init();
  
   
  }, [])
  
  return (
    <>
    <div className="container">
      {/* <Form/> */}
    <Intro/>
    <Contact_section/>
    <Project/>
    <Thought/>
   
    <Appoiment/>
    <Footer/>
    </div>
    </>
  )
}

export default App