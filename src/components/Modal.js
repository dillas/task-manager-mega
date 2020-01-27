import React from 'react'
import './Modal.sass'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/app-actions'
import { changeNewTaskField, createTask } from '../actions/task-actions'
import { bindActionCreators } from 'redux'


const Modal = ({modalIsOpen, onCreate, newTaskName, changeName, toggleModal}) => {

  if (!modalIsOpen){
    return null
  }


  return (
    <div className='modal'>
      <div className="modal__panel">
        <div className="modal__closeButton">
          <button onClick={toggleModal}>X</button>
        </div>
        Краткое описание
        <input type="text" onChange={(e) =>changeName(e.target.value)} value={newTaskName}/>
        <button onClick={() => onCreate(newTaskName)}>Создать</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.appStore.modalIsOpen,
    newTaskName: state.tasksStore.newTaskName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: bindActionCreators(toggleModal, dispatch),
    changeName: bindActionCreators(changeNewTaskField, dispatch),
    onCreate: bindActionCreators(createTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)