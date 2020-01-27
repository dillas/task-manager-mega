import React from 'react'
import { Link } from 'react-router-dom'


const Task = ({id, text, deleteTask, setUpdateTask}) => {
  return (
    <li>
      <span>{id} | </span>
      <span>{text} | </span>
      <span>
        <Link to={`items/${id}`}><button onClick={() => setUpdateTask(id, text)}>|</button></Link>
        <button onClick={() => deleteTask(id)}>X</button>
      </span>
    </li>
  )
}

export default Task