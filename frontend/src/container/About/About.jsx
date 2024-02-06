import {React, useState, useEffect} from 'react'
import "./About.scss"
import {motion} from "framer-motion";
import {images} from "../../constants"

const abouts =[
  {title: "front-end ", desc: "I am good at front-end", img: images.about01},
  {title: "backend-end ", desc: "I am good at backend-end", img: images.about02},
  {title: "solution-architecture ", desc: "I am good at solution-architecture", img: images.about03},
  {title: "Mern-Stack", desc: "I am good at Web-Design", img: images.about04}
]

const About = () => {
  return (
  
      <>
      <h2 className='head-text'>
        <span> Elevate Business </span>
        Through
        <br/>
        <span> Exceptional Design </span>
      </h2>
      <motion.div className='myself'
        whileHover={{ scale: 0.98 }}
        transition={{duration: 0.5, type: "tween"}}
        whileInView={{opacity: 1}}
        style={{ cursor: 'pointer' }}
      >
        <h2>About My self</h2>
        <p>
        Greetings! I'm <span>Bhargav Manavadariya</span>, an IT engineer with a Bachelor's in 
          <span> Electronics and Communication </span>from DDIT, India, currently pursuing 
          my Master's in <span>Electrical and Computer Engineering </span> at Concordia University. 
          Passionate about <span>web development </span> & <span>cloud computing</span>, 
          I thrive on innovation and problem-solving. Experienced in troubleshooting and 
          fostering collaboration, I bring technical proficiency, analytical acumen, and 
          effective communication to every project. Dedicated to advancing technology 
          solutions and promoting a culture of innovation in the dynamic world of IT.
        </p>
      </motion.div>
    
      <div className='app__profiles'>
        {
          abouts.map((about, index) =>(
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
            style={{ cursor: 'pointer' }}
            className='app__profile-item'
            key ={about.title + index}
            >
              <img src = {about.img} alt ={about.title}/>
              <h2 className='bold-text' style ={{marginTop:20}}>{about.title}</h2>
              <p className='"p-text' style={{marginTop:10}}> {about.desc} </p>
            </motion.div>
          ))
        }
      </div>
      </>
 
 
  )
}

export default About
