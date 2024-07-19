import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API || 'https://javascript-notes-api2-44a81e69cf98.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Adicionando o header 'x-access-token' para todas as requisições
Api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-access-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default Api;
