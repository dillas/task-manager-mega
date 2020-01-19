import React from 'react'
import Task from './Task'

export const tasks = [
  {id: 1, text: 'qwerty 1'},
  {id: 2, text: 'qwerty 2'},
  {id: 3, text: 'qwerty 3'},
  {id: 4, text: 'qwerty 4'},
  {id: 5, text: 'qwerty 5'},
  {id: 6, text: 'qwerty 6'},
]

const TasksList = () => {
  return (
    <>
      <header className="header">
        <div className="header__title">Список задач</div>
        <div className="header__button"><button>Добавить</button></div>
      </header>
      <ul>
        {tasks.map(task => <Task key={task.id} id={task.id} text={task.text} />)}
      </ul>
    </>
  )
}

export default TasksList