import React from 'react'
import './Modal.sass'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="modal__panel">
        <div className="modal__closeButton"><button>X</button></div>
        Краткое описание
        <input type="text"/>
        <button>Создать</button>
      </div>
    </div>
  )
}

export default Modal