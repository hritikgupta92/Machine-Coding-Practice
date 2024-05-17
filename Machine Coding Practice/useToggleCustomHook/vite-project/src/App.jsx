import { useCallback, useState } from "react";
function App() {
  
   function useToggle(arr,startIndex=0)
   {
      const [index,setIndex]=useState(startIndex);
      
      // const cb=()=>setIndex((prevIndex)=>(arr.length-1)?0:prevIndex+1);
      // const toggle=useCallback(()=>cb(),[arr]);
      const toggle=useCallback(()=>setIndex((prevIndex)=>(prevIndex>=arr.length-1)?0:prevIndex+1),[arr])

      return [arr[index],toggle];
   }
   const [value,toggle]=useToggle([1,2,3,4],2);
  return (
    <>
     <h1>{`Current value: ${value}`}</h1>
     <button onClick={toggle}>Toggle</button>   
    </>
  )
}

export default App
