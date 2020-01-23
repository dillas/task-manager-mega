import { combineReducers } from 'redux'
import testReducer from './test-reducer'
import taskReducer from './task-reducer'
// import appReducer from './app-reducer'

const reducers = combineReducers({
  testStore: testReducer,
  tasksStore: taskReducer,
  // app: appReducer
})

export default reducers
