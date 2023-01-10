import React from 'react'
import { Navbar} from 'react-bootstrap';
import pro from"../../Images/pro.jpg"
import "./Header.css"
import {FiSearch}from"react-icons/fi"
export default function Header() {
  return (
    
    <Navbar bg="dark"  className= 'justify-content-between'>
    <div className='container'>
  <a href="#home" className='logo'>nokoSocial</a>

    <div className='w-50 position-relative imgfi  '>
    <FiSearch className='header_icon'/>
    <input type="text"  placeholder="search for creators,inspiration,and projects" className=" w-75 ml-4" />
    </div>
<div className='two d-flex'>
    <button className='btn-prm mr-3'>create</button>
      <img src={pro} style={{borderRadius:"50%",width:"40px",height:"40px"}}/>
      
    </div>
 </div>
</Navbar>
    
  )
}
