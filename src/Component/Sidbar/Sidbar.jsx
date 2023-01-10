import React,{Fragment, useState} from 'react'
import{BiHomeAlt} from"react-icons/bi"
import{MdOutlineExplore} from"react-icons/md"
import{IoMdNotifications,IoMdColorPalette} from"react-icons/io"
import{TbMessageCircle} from"react-icons/tb"
import{BsFillBookmarkHeartFill} from"react-icons/bs"
import{AiOutlineLineChart,AiOutlineSetting} from"react-icons/ai"
import pro from"../../Images/pro.jpg"
import"./Sidbar.css"
import request from"../../Images/request.jpg"
import coment from"../../Images/coment.jpg"
import mary from"../../Images/mary.jpg"
import port from"../../Images/port.jpg"
import dana from"../../Images/dana.jpg"
import mm from"../../Images/mm.jpg"
import profile from"../../Images/profile.jpg"
import nine from"../../Images/nine.jpg"
import ten from"../../Images/ten.jpg"
import twel from"../../Images/twel.jpg"
import eleven from"../../Images/eleven.jpg"

import Posters from '../Posters/Posters'
import Posterdata from '../Posters/Posterdata'
import Bar from '../Bar/Bar'
import Theme from './Theme'
export default function Sidbar() {
    const [count, setCount] = useState(true);
    
    const [data, setData] = useState(false);
    
  return (
    <div className='sid_story'>
<div className='container '>
<div className='All w-100 d-flex'>

    <div className='sidbarall'>
   
    <div className='fsidbar'>
    <img src={pro}/>
    <h5>Diana 
    Ayi
    <h6>@dayi</h6>
    </h5>
    </div>
    <div className='allsid'>
    <a className='sidbaricons '>
    <BiHomeAlt className='con mr-1 '/>
    <h4>Home</h4>
    </a>
      
    <a className='sidbaricons'>
    <MdOutlineExplore className='mr-1 con '/>
    <h4>Explore</h4>
    </a>
 
    <a className='sidbaricons' onClick={()=>setCount(!count)}>
    
    <IoMdNotifications className='mr-1 con '/>
    <p className='post'>9+</p>
    <h4>Notification</h4>
    </a>
   
    <a className='sidbaricons'>
    
    <TbMessageCircle className='mr-1 con'/>
    <p className='post'>5</p>
    <h4>Messages</h4>
    </a>
    <a className='sidbaricons'>
    <BsFillBookmarkHeartFill className='mr-1 con '/>
    <h4>Bookmarks</h4>
    </a>
    <a className='sidbaricons'>
    <AiOutlineLineChart className='mr-1 con '/>
    <h4>Analytics</h4>
    </a>
    <a className='sidbaricons' onClick={()=>setData(!data)}>
    <IoMdColorPalette className='mr-1 con'/>
    <h4>Theme</h4>
    </a>
    <a className='sidbaricons'>
    <AiOutlineSetting className='mr-1 con'/>
    <h4>Settings</h4>
    </a>
   
    </div>
    <button className='btn-prm w-75 font-weight-bold text-center btnn '>Create Post</button>
    { count && <div className='secondpart'>
    <div className='two'>
    <img src={request}/>
    <h6>KeKe Benjamin accepted your friend request 
    <p>Days ago</p>
    </h6>
    </div>
    <div className='two'>
    <img src={coment}/>
    <h6>John Deo commented on your post 1 hour ago  </h6>
    
    </div>
    
    <div className='two mt-3'>
    <img src={mary}/>
    <h6>Mary and 50+ others like your post commented on your post 1 hour ago  
    <p>4 minutes ago</p>
    </h6>
    </div>
    <div className='two'>
    <img src={mm}/>
    <h6>Dories commented on  post you are tagged in 
    <p>10 minutes ago</p>
    </h6>
    </div>
    
    <div className='two'>
    <img src={port}/>
    <h6>Dories commented on  post you are tagged in 
    <p>2 Day  ago</p>
    </h6>
    
    </div>
    <div className='two'>
    <img src={dana}/>
    <h6>Danaid trump commented on  post you are tagged in 
    <p>2 Houres ago</p>
    </h6>
    </div>
    </div>}
    {data &&<Theme/>}
    </div>

    <div className='story_post'>
   <div className='story'>
   <div className='imgstory'>
   <img src={profile}/>
   <p>your Story</p>
   </div>
  
   <div className='imgstory'>
   <img src={nine}/>
   <p>Jane Deo</p>
   </div>
  
   <div className='imgstory'>
   <img src={ten}/>
   <p>Lilla James</p>
   </div>
   
   <div className='imgstory'>
   <img src={twel}/>
   <p>Daniel Balel</p>
   </div>
  
   <div className='imgstory'>
   <img src={eleven}/>
   <p>Winnie Hale</p>
   </div>
   <div className='imgstory'>
   <img src={dana}/>
   <p>Tina White</p>
   </div>
 </div>
 <form>
<div className="create_post">
<div className="pro_imge">
<img src={pro}/>
</div>
<input type="text" placeholder="What's in your mind,Dina" id="creat_post"/>
<input type="submit" value="Post" className=' btn-prm'/>
</div>
</form>
{Posterdata.map((ele)=>{
return(<Posters  img1={ele.img1} img2={ele.img2}
    img3={ele.img3} img4={ele.img4} img5={ele.img5}
    name={ele.name} number={ele.number} like={ele.like}
    comment={ele.comment} key={ele.id} data={ele.data}/>
    )


})}
 </div>
<Bar/>

 </div>



</div>
</div>



  
   
  
   
    
   
  )
}
