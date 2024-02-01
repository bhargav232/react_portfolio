import React, { useState } from 'react'
import "./Navbar.scss"
import {images} from "../../constants"
import {HiMenuAlt4, HiX} from "react-icons/hi"
import {easeInOut, motion} from "framer-motion"



const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src = {images.bhargav} alt = "logo" />
      </div>

      <ul className='app__navbar-links'>
      {["home", "about", "contact", "work", "skills"].map((item)=>(
        <li className = "app__flex p-text" key = {`link-${item}`}>
          <div/>
          <a href = {`#${item}`}>{item}</a>
        
        </li>
      ))}
    </ul>
    <div className='app__navbar-menu'>
      <HiMenuAlt4  onClick={()=>{
        setToogle(true);
      }}/>
      {
        toogle  &&(
          <motion.div whileInView={{x: [3]}}
          transition={{duration: 0.85,ease: easeInOut }}
          >
            <HiX  onClick={()=>{
              setToogle(false);
            }}/>
               <ul className='app__navbar-links'>
            {["home", "about", "contact", "work", "skills"].map((item)=>(
              <li key ={item}>

                <a href = {`#${item}`} onClick={()=>{
              setToogle(false)}} > {item} </a>
              </li>
            ))}
            </ul>
          </motion.div>
        )
      }
    </div>
    
    </nav>
    
  )
}

export default Navbar
