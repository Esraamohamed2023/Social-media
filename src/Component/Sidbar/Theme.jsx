import React from 'react'
import"./Theme.css"
export default function Theme() {
  return (
    <div className='Theme'>
    <div className="cust">
    <h3>Customize Your view</h3>
    <p>Manage your font size,Color and background. </p>
    </div>
    <div className='font-size'>
    <h4>Font Size</h4>
    <div>
    <h6>Aa</h6>
    <div className="choose-size">
    <span className="font-size-1"></span>
    <span className="font-size-1 activ"></span>
    <span className="font-size-1"></span>
    <span className="font-size-1"></span>
    <span className="font-size-1"></span>
    </div>
    <h4>Aa</h4>
    </div>
    </div>

    <h4>Color</h4>
    <div className="color">
    
    <span className="color-1 activ"></span>
    <span className="color-1"></span>
    <span className="color-1"></span>
    <span className="color-1"></span>
    <span className="color-1"></span>
    
    </div>
    <h4>Background</h4>
    <div className="background">
    
    <div className="choose-bg ">
    <div className='bg-1 activ'>
    <span></span>
    <div for="bg-1">Light</div>
    </div>
    <div className='bg-2'>
    <span></span>
    <div for="bg-2">Dim</div>
    </div>
    <div className='bg-3'>
    <span></span>
    <div for="bg-3">Light out</div>
    </div>
    </div>


    </div>
    </div>
    
   

   
    
    

  )
}
