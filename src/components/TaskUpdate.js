import React from 'react'
import { useHistory, useParams } from "react-router-dom"

const TaskUpdate = () => {

  const {id} = useParams()

  let history = useHistory();
  function handleClick() {
    history.goBack();
  }

  return (
    <>
      <header className="header">
        <div className="header__title">Задача № {id}</div>
        <div className="header__button"><button>Удалить</button></div>
      </header>
      Краткое описание ===== task.title}
      <input type="text"/>
      <button type="button" onClick={handleClick}>Вернуться к списку</button>
    </>
  )
}

export default TaskUpdate