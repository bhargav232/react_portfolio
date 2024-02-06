import React from 'react'
import "./Header.scss"
import {motion} from "framer-motion"
import {images} from "../../constants"

const scaleVaraints = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div id ="home"  className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration: 0.8}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head- text'>Bhargav</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
              <p className='p-text'>Web Developer</p>
              
              <p className='p-text'>Cloud Enthusiast</p>
            </div>
        </div>
      </motion.div>

    {/* motion div for profile picture */}
      <motion.div 
      whileInView={{opacity:[0,1]}}
      transition={{duration: 0.8, delayChildren:0.8}}
      className='app__header-img'
      >
      <img className='image-profile' src= {images.bkm_profile} alt="profile_bg"/>
    
        {/* motion div for circle behind profile pic */}


      
     <motion.img
      whileInView={{scale: [0,1]}}
      transition={{duration: 1, ease: "easeInOut"}}
      src ={images.circle}
      alt = "profile_circle"
      className = "overlay_circle"
      />
       
      </motion.div>

    
  {/* motion div for different technologies in circle */}
      <motion.div 
      className = "app__header-circles"
      variants={scaleVaraints}
      whileInView={scaleVaraints.whileInView}
      >
          {[images.react, images.javascript, images.sass].map((circle, key) => (
        <div className='app__flex' key={`circle${key}`}>
            <img src={circle} alt="circle"/>
        </div>
         ))}

      </motion.div>
     
    </div>
  )
}

export default Header
