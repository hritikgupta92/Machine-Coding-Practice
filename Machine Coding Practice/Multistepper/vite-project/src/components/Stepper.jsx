import React from 'react'
import './styles.css'
import { useState } from 'react';
const Stepper = ({list}) => {

    const stepsCount=list.length;
    const steps=[];
    const [currentStep,setCurrentStep]=useState(0);

    for(let i=0;i<stepsCount;i++)
        {
            steps.push(<div key={i} onClick={()=>setCurrentStep(i)} className={`steps ${i===currentStep?"active":""}`}>{i+1}</div>);
        }

    const progressLineWidth=(100/(list.length-1))*currentStep;

    const onNext=()=>{
      if(currentStep!==list.length-1)
       setCurrentStep(currentStep+1);
    }

    const onPrev=()=>{
        if(currentStep!==0)
        setCurrentStep(currentStep-1);
    }

    const Ele=list[currentStep];
  return (
    <section className="stepper">
    <div className="steps-container">
        <div className="steps-wrapper">
         {steps}
        </div>
        <div className="progress-line" style={{width:`${progressLineWidth}%`}}></div>
    </div>
    <div>{React.cloneElement(list[currentStep],{onPrev,onNext})}</div>
    </section>
  )
}

export default Stepper