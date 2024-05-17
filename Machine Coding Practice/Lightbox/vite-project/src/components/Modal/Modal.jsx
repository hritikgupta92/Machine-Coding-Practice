import './styles.css'

export const Modal=({show,onClose,title,children})=>{
  return show && 
  <>
    <div className="modal-backdrop" >
    <div className={`modal-wrapper ${show?"active":""}`}>
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