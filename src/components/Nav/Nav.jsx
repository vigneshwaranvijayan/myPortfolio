import React, {useState} from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {MdMilitaryTech} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {FcCallback} from 'react-icons/fc'
const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav>
      <a href='/' onClick={()=>setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><BiHomeAlt/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href='#technical' onClick={()=>setActiveNav('#technical')} className={activeNav === '#technical' ? 'active' : ''}><MdMilitaryTech/></a>
      <a href='#service' onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcCallback/></a>
    </nav>
  )
}

export default Nav