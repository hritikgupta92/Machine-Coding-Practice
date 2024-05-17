 import React, { useState,useEffect } from 'react'
 import "./styles.css"
 const ProgressBar=({value=0,onComplete=()=>{}})=>{
  const [percent,setPercent]=useState(value);

  useEffect(()=>{
    setPercent(Math.min(100,Math.max(value,0)))
    if(value>=100)
      onComplete();
  },[value]);
   return (
    <div className='progress'>
      <span style={{color:percent>49?"white":""}}>{percent.toFixed()}%</span>
      <div 
        // style={{width:`${percent}%`}}
        style={{
          transform:`scaleX(${percent/100})`,transformOrigin:"left"}}
        role="progressbar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={percent.toFixed()}
        />
    </div>
   )
 }
 function App() {

  const [value,setValue]=useState(0);
  const [success,setSuccess]=useState(false);

  useEffect(()=>{
     setInterval(()=>{
      setValue(prevVal=>prevVal+1);
    },100);
     
  },[]);

   return (
     <div className='App'>
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={()=>setSuccess(true)}/>
      <span>{success ?"Complete!!!":"Loading...."}</span>
     </div>
   )
 }
 
 export default App