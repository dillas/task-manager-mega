import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test.megapolis-it.ru/api/'
});

export const todoAPI = {
  getAll() {
    return instance.get(`list`)
  },
  create(title) {
    return instance.post(`list`, { title })
  },
  update(id, title){
    return instance.post(`list/${id}`, { title })
  },
  delete(id) {
    return instance.delete(`list/${id}`)
  }
}

/*
export function createTodo(todoTitle) {
  return axios.post('https://test.megapolis-it.ru/api/list', {
    title: todoTitle
  }).then(function (response) {
    console.log(response);
    store.dispatch(createTodoSuccess(response.data));
    return response;
  }).catch(function (error) {
    console.log(error);
  });
}

export function getTodos() {
  return axios.get('https://test.megapolis-it.ru/api/list')
  .then(response => {
    console.log(response.data)
    store.dispatch(getTodosSuccess(response.data));
    return response;
  });
}

export function getTodo(id) {
  return axios.get('https://test.megapolis-it.ru/api/list')
  .then(response => {
    let data = response.data.data.filter(el => el.id === id)
    store.dispatch(getTodosSuccess(data));
    console.log(data)
    return data;
  });
}

export function updateTodo(todoId, todoTitle) {
  return axios.post('https://test.megapolis-it.ru/api/list/' + todoId, {
    title: todoTitle
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

export function deleteTodo(todoId) {
  return axios.delete('https://test.megapolis-it.ru/api/list/' + todoId)
  .then(response => {
    console.log(response)
    // store.dispatch(deleteUserSuccess(todoId));
    return response;
  });
}*/
