import * as types from '../actions/action-types'
import { todoAPI } from '../api/todo-api'
import { toggleModal } from './app-actions'

export const taskIsFetching = () => ({ type: types.TASK_IS_FETCHING })

export const getTask = () => (dispatch) => {
  todoAPI.getAll().then((response) => dispatch({
    type: types.GET_TASK,
    payload: response.data.data,
  }))
}

export const setUpdateTask = (id, text) => ({
  type: types.SET_UPDATE_TASK,
  payload: {id: id, name: text},
})

export const createTask = (title) => (dispatch) => {
  todoAPI.create(title).then((response) => dispatch({
    type: types.CREATE_TASK,
    payload: response,
  })).then(() => {
    dispatch(getTask())
    dispatch(toggleModal())
    dispatch(changeNewTaskField(''))
  })
}

export const deleteTask = (id) => (dispatch) => {
  todoAPI.delete(id).then((response) => dispatch({
    type: types.DELETE_TASK,
    payload: response,
  })).then(() => {
    dispatch(getTask())
  })
}

export const updateTask = (id, title) => (dispatch) => {
  todoAPI.update(id, title).then((response) => dispatch({
    type: types.UPDATE_TASK,
    payload: response,
  })).then(() => {
    dispatch(getTask())
  })
}

export const changeNewTaskField = (newTaskName) => {
  return {
    type: types.CHANGE_NEW_TACK_FIELD,
    payload: newTaskName,
  }
}

export const changeUpdateTaskField = (newTaskName) => {
  return {
    type: types.CHANGE_UPDATE_TACK_FIELD,
    payload: newTaskName,
  }
}