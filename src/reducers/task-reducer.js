import * as types from '../actions/action-types'

const initialState = {
  isFetching: true,
  hasError: false,
  tasks: []
};

const taskReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }

    case types.GET_TASK_SUCCESS:
      return { ...state, tasks: action.payload.data}

    case types.GET_TASK_FAILURE:
      return { ...state, tasks: action.payload.data}

    case types.TASK_IS_FETCHING:
      return { ...state, isFetching: !state.isFetching }

    default:
      return state
  }
}

export default taskReducer;
