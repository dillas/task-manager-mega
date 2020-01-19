import React from 'react'
import { Link } from 'react-router-dom'


const Task = ({id, text}) => {
  return (
    <li>
      <span>{id}</span><span>{text}</span><span><Link to={`items/${id}`}><button>|</button></Link><button>X</button></span>
    </li>
  )
}

export default Task