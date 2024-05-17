
import { useState } from "react";
import './styles.css'
export const SlideShow=({images,active,onNext,onPrev})=>{
  // const [active,setActive]=useState(0);

  // const onNext=()=>{
  //   if(active<images.length-1)
  //     setActive(active+1);
  // }
  // const onPrev=()=>{
  //   if(active>0)
  //     setActive(active-1);
  // }

  return ( 
    <div className="slideshow">
    {images.map((image,i)=>
     <Slide {...image} key={image.caption} active={i===active}/>
     )}
     <div className="bulleted-navigation">
      {
        images.map((image,i)=>(
          <div className={`dot ${i===active?"active":""}`} key={image.caption} onClick={()=>setActive(i)}/> 
        ))
      }
     </div>
     <div className="next-prev-navigation">
        <div className='navigation next' onClick={onNext}>&gt;</div>
        <div className='navigation prev' onClick={onPrev}>&lt;</div>
     </div>
  </div>
  );
}
export const Slide=({image_url,caption,active})=>{
  return (
    active && <div className={`slide ${active?"active":""}`}>
      <img src={image_url} alt={caption}/>
      <span>{caption}</span>
    </div>
  ) 
}
