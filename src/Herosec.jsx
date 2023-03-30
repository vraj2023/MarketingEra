import React from 'react'
import herosec from './herosec.css'
import {Typed} from 'typed.js'

const Herosec = () => {
  // var typeData = new Typed(".third", {
  //   strings: [
  //     "Full Stack Developer",
  //     "Web Developer",
  //     "UI-UX Designer",
  //     "Backend Developer",
  //     "Coder",
  //   ],
  //   loop: true,
  //   typeSpeed: 100,
  //   backSpeed: 80,
  //   backDelay: 1000,
  // });
  return (
    <div className="hero">
      <div className="welcome">
        <div className="up-wel">
          <div className='first line'>Welcome</div>
          <div className='second line'><span className='M'>M</span>arketing<span className='E'>E</span>ra</div>
          <div className='third line'></div>
        </div>
        <div className="low-wel">
            Ensuring the best return on investment for your <br/>
            bespoke SEO campaign requirement   
        </div>
        <div className='logsign'>
          <div className='login comm'><a href='#'>login</a></div>
          <div className='signup comm'><a href='#'>signup</a></div>
        </div>
      </div>
      <div className="pic">
        <img src="vecteezy_isometric-illustration-concept-digital-marketing-strategy_5638545-removebg.png"></img>
      </div>
    </div>
  )
}

export default Herosec
