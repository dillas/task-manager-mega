import * as types from '../actions/action-types'

const initialState = {
  isFetching: true,
  hasError: false,
  tasks: [],
  newTaskName: '',
  editableTask: {
    id: '',
    name: ''
  }
};

const taskReducer = function(state = initialState, action) {
  switch(action.type) {

    case types.CREATE_TASK:
      return { ...state }

    case types.DELETE_TASK:
      return { ...state }

    case types.GET_TASK:
      return { ...state, tasks: action.payload}

    case types.SET_UPDATE_TASK:
      return { ...state, editableTask: action.payload}

    case types.TASK_IS_FETCHING:
      return { ...state, isFetching: !state.isFetching }

    case types.CHANGE_NEW_TACK_FIELD:
      return { ...state, newTaskName: action.payload }

    case types.CHANGE_UPDATE_TACK_FIELD:
      return { ...state, editableTask: {id: state.editableTask.id, name: action.payload }}

    default:
      return state
  }
}

export default taskReducer;
