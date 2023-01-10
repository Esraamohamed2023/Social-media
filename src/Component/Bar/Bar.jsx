import React,{Fragment, useState} from 'react'
import"./Bar.css"
import{TfiWrite}from"react-icons/tfi"
import{FiSearch}from"react-icons/fi"
import { BsClipboardData } from 'react-icons/bs';
import {data1,data2,data3} from"./Bardata"
import Barfun from"./Barfun"
import requestdata from './Requestdata';
import Request from './Request';
export default function Bar() {
    const[tab ,SetTab]=useState("data1");

const Switchtap=(tab)=>{
SetTab(tab);
};
  return (
    <div className='Allbar mt-3 ml-3 '>
    <div className='Bar'>
    <div className='part_one'>
    <p>Messages</p>
      <TfiWrite className='mt-2'/>
    </div>
    <div className="srch">
    <form>
    <FiSearch/>
    <input type="test" placeholder='Search messages'/>
    
    </form>
    
    </div>
    <div className="line">
    <span style={{color:tab==="data1"?"blue":"",
    borderBottom:tab==="data1"? `4px solid gray`:""}} onClick={(()=>Switchtap("data1"))}>Primary</span>
    <span style={{color:tab==="data2"?"blue":"",
    borderBottom:tab==="data2"? `4px solid gray`:""}} onClick={(()=>Switchtap("data2"))}>General</span>
    <span
    style={{color:tab==="data3"?"blue":"",
    borderBottom:tab==="data3"? `4px solid gray`:""}} onClick={(()=>Switchtap("data3"))} className="act">Resquest(7)</span>
   </div>
   <div className='mt-4 map'>
   {tab==="data3"?
  data3.map((ele)=>{
   return(<Barfun img={ele.img} 
   name={ele.name} 
   message={ele.message} 

   key={ele.key}>
   </Barfun>)}
   ):tab==="data2"?
   data2.map((ele)=>{
   return(<Barfun 
   name={ele.name} 
   message={ele.message} 
img={ele.img}
   key={ele.key}>
   </Barfun>)}
   ):
  data1.map((ele)=>{
   return(<Barfun 
   name={ele.name} 
   message={ele.message} 
img={ele.img}
   key={ele.key}>
   </Barfun>)}
   
   )}
</div>
</div>
<p style={{fontSize:"20px",fontWeight:"bold",paddingTop:"10px"}}>Request</p>

<div className="request ">
{requestdata.map((ele)=>{
    return(<Request img={ele.img}
        text={ele.text} pra={ele.pra} key={ele.id}/> )

})}

</div>
</div>

  )
}
