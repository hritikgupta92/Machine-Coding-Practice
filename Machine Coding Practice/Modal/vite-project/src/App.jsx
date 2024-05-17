import './styles.css'

import { useState } from 'react';
function App() {
  const [open,setOpen]=useState(false);
  function onClose(){
    setOpen(prevState=>!prevState);
  }
  return (
    <div className='App'>
      <button onClick={onClose}>Show Modal</button>
      <Modal 
       show={open}
       title={"Modal"}
       onClose={onClose}>
       <h1>Learners Bucket</h1>
       </Modal>  
    </div>
  )
}
const Modal=({show,onClose,title,children})=>{
  return show && 
  <>
    <div className="modal-backdrop" onClick={onClose}>
    <div className={`modal-wrapper ${open?"active":""}`}>
     <div className="modal-header">
      <div className="modal-title">{title}</div>
      <span className="modal-close" onClick={onClose}>
        X
      </span>
     </div>
     <div className="modal-body">{children}</div>
  </div>
    </div>  
  </>
  
}

export default App
