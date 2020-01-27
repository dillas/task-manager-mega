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
