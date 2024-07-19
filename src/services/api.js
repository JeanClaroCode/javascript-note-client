import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://javascript-notes-api2-44a81e69cf98.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
  //withCredentials: true // Se você está lidando com cookies ou headers personalizados
});

export default Api;
