import React from 'react'
import {Link} from 'react-router-dom'


const MainPage = () => {
  return (
    <div>
      MainPage
      <Link to='/items'>Tasks</Link>
    </div>
  )
}

export default MainPage