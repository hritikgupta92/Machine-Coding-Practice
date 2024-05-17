import Stepper from './components/Stepper'
import './App.css'
function App() {
 
  const list=[<Example1/>,<Example2/>,<Example3/>,<Example4/>];
  return (
    <div className='App'>
       <Stepper list={list}/>
    </div>
  )
}
const Example1=({onPrev,onNext})=>{
  return <>
   <h1>Hello 1</h1>
    <div>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div> 
   </>
}
const Example2=({onPrev,onNext})=>{
  return <>
  <h1>Hello 2</h1>
<div>
    <button onClick={onPrev}>Prev</button>
    <button onClick={onNext}>Next</button>
  </div> 
</>
}
const Example3=({onPrev,onNext})=>{
  return <>
  <h1>Hello 3</h1>
<div>
    <button onClick={onPrev}>Prev</button>
    <button onClick={onNext}>Next</button>
  </div> 
</>
}
const Example4=({onPrev,onNext})=>{
  return <>
  <h1>Hello 4</h1>
<div>
    <button onClick={onPrev}>Prev</button>
    <button onClick={onNext}>Next</button>
  </div> 
</>
}

export default App;
