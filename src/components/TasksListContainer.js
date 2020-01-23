import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getTask, taskIsFetching } from '../actions/task-actions'
import Task from './Task'

const TasksListContainer = ({tasks, getTask, taskIsFetching, isFetching}) => {

  useEffect(() => {

    if (isFetching) {
      getTask()
      taskIsFetching()
    }
  });

  return (
    <div>
      {tasks && tasks.map(task => <Task key={task.id} id={task.id} text={task.title} />)}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasksStore.tasks,
    isFetching: state.tasksStore.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: () => {dispatch(getTask())},
    taskIsFetching: () => {dispatch(taskIsFetching())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer)