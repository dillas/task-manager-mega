import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import todoReducer from './todo-reducer';

// Combine Reducers
var reducers = combineReducers({
  userState: userReducer,
  todoState: todoReducer
});

export default reducers;