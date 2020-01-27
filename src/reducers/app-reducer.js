import * as types from '../actions/action-types'

const initialState = {
  modalIsOpen: false
};

const appReducer = function(state = initialState, action) {

  // eslint-disable-next-line
  switch(action.type) {
    case types.MODAL_IS_OPEN:
      return { ...state, modalIsOpen: !state.modalIsOpen }

    default:
      return state
  }
}

export default appReducer;