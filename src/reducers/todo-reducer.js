
import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  todos: []
};

const todoReducer = function(state = initialState, action) {

  // eslint-disable-next-line
  switch(action.type) {

    case types.CREATE_TODO_SUCCESS:
      return Object.assign({}, state, { todos: action.todos });

    case types.GET_TODO_SUCCESS:
      return Object.assign({}, state, { todo: action.userProfile });

    case types.GET_TODOS_SUCCESS:
      return Object.assign({}, state, { todos: action.todos });

    case types.UPDATE_TODO_SUCCESS:
      return Object.assign({}, state, { todos: action.todos });

    case types.DELETE_TODO_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id !== action.userId);
      return Object.assign({}, state, { users: newUsers });

  }

  return state;

}

export default todoReducer;