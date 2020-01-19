import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import { getTodo } from '../api/todo-api'


const TaskUpdate = () => {

  const {id} = useParams()

  getTodo(id).then(console.log('ok'), console.log('no'))

  // console.log(task)
  let history = useHistory();
  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <header className="header">
        <div className="header__title">Задача № task.id}</div>
        <div className="header__button"><button>Удалить</button></div>
      </header>
      Краткое описание ===== task.title}
      <input type="text"/>
      <button type="button" onClick={handleClick}>Вернуться к списку</button>
    </>
  )
}

export default TaskUpdate