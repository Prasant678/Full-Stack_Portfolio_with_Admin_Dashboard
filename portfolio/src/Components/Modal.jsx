import React from 'react'

const Modal = ({open, onClose, children}) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors z-[2000] ${open ? 'visible bg-black/75' : 'invisible'}`}>
        {children}
    </div>
  )
}

export default Modal
