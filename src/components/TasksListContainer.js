import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  deleteTask,
  getTask,
  taskIsFetching,
  setUpdateTask
} from '../actions/task-actions'
import { toggleModal } from '../actions/app-actions'
import Task from './Task'
import TaskUpdate from './TaskUpdate'
import Modal from './Modal'
import { bindActionCreators } from 'redux'

const TasksListContainer = ({ tasks, getTask, taskIsFetching, isFetching, toggleModal, onDelete,setUpdateTask }) => {

  useEffect(() => {

    if (isFetching) {
      getTask()
      taskIsFetching()
    }
  })

  return (
    <div>
      <Route exact path='/items'>
        <div>Список задач
          <button onClick={toggleModal}>Добавить</button>
        </div>
        {tasks && tasks.map(
          task => <Task setUpdateTask={setUpdateTask} deleteTask={onDelete}
                        key={task.id} id={task.id} text={task.title}/>)}
        <Modal getTask={getTask}/>
      </Route>
      <Route exact path='/items/:id'>
        <TaskUpdate deleteTask={onDelete}/>
      </Route>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksStore.tasks,
    isFetching: state.tasksStore.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: () => {dispatch(getTask())},
    taskIsFetching: () => {dispatch(taskIsFetching())},
    toggleModal: () => {dispatch(toggleModal())},
    onDelete: bindActionCreators(deleteTask, dispatch),
    setUpdateTask: bindActionCreators(setUpdateTask, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer)