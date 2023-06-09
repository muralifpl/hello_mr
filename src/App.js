import './styles/App.css'
import React, { useEffect, useState } from 'react'
import Nav from './NavBar'
import Hero from './HeroPage'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './contact'
function App() {

const [dev,setDev]=useState(0);


    setInterval(() => {
      setDev(1);
    }, 2500);


return (

<> 
   {
    dev===0?<>
    <div className='quotes'>
    <div className='text-center py-5 quotes_text'>
   <div> The only thing necessary for the triumph of evil is for good men to do nothing
   </div>
   <span className='float-end'>- Edmund Burke</span>
    </div>
    
    </div>
    </>:
   
<>
  
  <Nav />
   
   <div>
   <Hero /> 
   </div>
   <div className=''>
   <Skills /></div>
   <div className=''>
    <Projects /> 
   </div>
   <div className=''>
    <Contact /> 
   </div>
  </>
}
   </>
  )
}
export default App;