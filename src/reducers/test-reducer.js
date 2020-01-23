import * as types from '../actions/action-types'

const initialState = {
  name: 'Evgenii',
  secondName: 'Yacobenko'
};

const testReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.CHANGE_NAME:
      return { ...state, name: action.payload }

    case types.CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload }

    default:
      return state
  }
}

export default testReducer;