import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  changeUpdateTaskField,
  updateTask,
} from '../actions/task-actions'

const TaskUpdate = ({deleteTask, changeName, editableTask, updateTask}) => {

  let history = useHistory()
  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <header className="header">
        <div className="header__title">Задача № {editableTask.id}</div>
        <div className="header__button"><Link to='/items'><button onClick={() => deleteTask(editableTask.id)}>Удалить</button></Link></div>
      </header>
      <input type="text" onChange={(e) =>changeName(e.target.value)} value={editableTask.name}/>
      <button type="button" onClick={handleClick}>Вернуться к списку</button>
      <button type="button" onClick={() => updateTask(editableTask.id, editableTask.name)}>Создать</button>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.appStore.modalIsOpen,
    editableTask: state.tasksStore.editableTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: bindActionCreators(changeUpdateTaskField, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdate)