// 📁 src/api/bookApi.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080',
});
API.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // 또는 sessionStorage
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

export const getBooks = () => API.get('/books')
export const getBookById = (id) => API.get(`/books/${id}`);
export const createBook = (data) => API.post('/books', data);
export const updateBook = (id, data) => API.put(`/books/${id}`, data);
export const deleteBook = (id) => API.delete(`/books/${id}`);
export const generateCover = (id) => API.post(`/books/${id}/cover`);
export const login = (id, name) => API.post(`/auth/login`, {'user_id' : id, 'user_name' : name});