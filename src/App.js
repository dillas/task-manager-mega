import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from './components/MainPage'
import TasksListContainer from './components/TasksListContainer'

const App = () => {
  return (
    <div className="container">
      <main className="content">
        <Router>
          <Switch>
            <Route exact path='/'><MainPage/></Route>
            <Route exact path='/items'><TasksListContainer/></Route>
          </Switch>
        </Router>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2019</p>
      </footer>
    </div>
  )
}

export default App
