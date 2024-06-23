import React from 'react'
import "./modal.scss"

const Modal = ({children ,close}) => {
  return (
    <>
        <div onClick={()=> close(false)} className="overlay"></div>
        <div className="modal">
            {children}
        </div>
    </>
  )
}

export default Modal