import React from 'react'
import Task from './Task'

const TasksList = ({tasks, getTask, createTask}) => {
  return (
    <>
      <header className="header">
        <div className="header__title">Список задач</div>
        <div className="header__button"><button>Добавить</button></div>
      </header>
      <ul>
        {tasks && tasks.map(task => <Task key={task.id} id={task.id} text={task.title} />)}
      </ul>
      <button onClick={() => { getTask() }}>getTask</button>
      <button onClick={() => { createTask() }}>createTask</button>
    </>
  )
}

export default TasksList