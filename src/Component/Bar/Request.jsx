import React from 'react'
import eleven from"../../Images/eleven.jpg"
import "./Bar.css"
export default function Request({img,text,pra}) {
  return (
    <div className='Reqfun mb-3 '>
      <div className='image'>
      <img src={img}/>
      <div className='pra pt-4'>
      <h6>{text}
      <p>{pra}</p>
      </h6>
      </div>
      </div>
      <div className='button'>
      <button style={{background:"blue",borderRadius:"15px",padding:"10px", border:"0",color:"white" ,marginRight:"20px"}}>Comfirm</button>
      <button style={{background:"gray",borderRadius:"15px",padding:"10px", border:"0",color:"white"}}>Delete</button>
      
      </div>
      </div>

  )
}
