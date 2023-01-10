import React from 'react'

import"./Bar.css"
export default function Barfun({img,name,message}) {
  return (
    <div className=' d-flex mt-2'>
      <img src={img}/>
      <div className="twopart ml-2">
      <h6>{name}
      <p>{message} </p>
      </h6>
      </div>
    </div>
  )
}
