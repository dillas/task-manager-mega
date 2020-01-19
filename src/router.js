import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import LayoutPage from './components/LayoutPage'
import TaskUpdate from './components/TaskUpdate'
import TasksList from './components/TasksList'
import * as todoApi from './api/todo-api'


todoApi.getTodo(877);

export default (
  <Router>
    <Switch>
      <Route exact path='/'><LayoutPage><MainPage/></LayoutPage></Route>
      <Route exact path='/items'><LayoutPage><TasksList/></LayoutPage></Route>
      <Route path='/items/:id'><LayoutPage><TaskUpdate/></LayoutPage></Route>
    </Switch>
  </Router>
)
