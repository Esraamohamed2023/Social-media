import React,{useState} from 'react'
import"./Posters.css"
import{FiShare2}from"react-icons/fi"
import{FaRegCommentDots}from"react-icons/fa"
import{AiFillHeart}from"react-icons/ai"
import{BsFillBookmarkFill}from"react-icons/bs"

export default function Posters({img1,name,data,img2,img3,img4,img5,number,like,comment}) {
    
        const [isActive, setIsActive] = useState(false);
        const handleClick = () => {
           
            setIsActive(current => !current);
        }
  return (
    <div className='poster'>
      <div className='posters_first'>
<div className='imgdes'>
      <img src={img1}/>
      <div className='first_des'>
      <h6>{name}
      <p>{data}</p></h6>
      </div>
      </div>
      <div className="spn">
      <span></span>
      <span></span>
      <span></span>
      </div>
      </div>
      <div className="only_img">
      <img src={img2}/>
      </div>
      <div className="icons">
      <div>
      <AiFillHeart className='mr-2'  onClick={handleClick} style={{color:isActive?"red":""}}/>
      <FaRegCommentDots className='mr-2'/>
      <FiShare2 className='mr-2'/>
      </div>
      <BsFillBookmarkFill/>
      </div>
      <div className="likes">
      <div className='likes_img'>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <p>Like by <span>{like}</span> and <span>{number}</span></p>
      </div>
      <div className='Div '>
      <div className='mr-1 font-weight-bold span'>Lana Rose:</div>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto </p>
      </div>
      <p className="opacity-25 opact">{comment}</p>
      </div>

    </div>
  )
}
