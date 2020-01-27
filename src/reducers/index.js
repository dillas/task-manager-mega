import { combineReducers } from 'redux'
import taskReducer from './task-reducer'
import appReducer from './app-reducer'

const reducers = combineReducers({
  tasksStore: taskReducer,
  appStore: appReducer
})

export default reducers
