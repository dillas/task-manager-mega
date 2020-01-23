import * as types from '../actions/action-types'

const initialState = {
  app: []
};

const appReducer = function(state = initialState, action) {

  // eslint-disable-next-line
  switch(action.type) {
    case types.CREATE_TASK:
      return Object.assign({}, state, { tasks: action.tasks });

    case types.CHANGE_SECOND_NAME:
      return Object.assign({}, state, { tasks: action.tasks });

    default:
      return state
  }
}

export default appReducer;