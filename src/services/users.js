import Api from "./api";

const UsersService = {
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    try {
      const response = await Api.post('/users/login', params);
      console.log('API Response:', response.data); // Adicione esta linha para depuração
      if (response.data && response.data.user && response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        return response.data.user;
      } else {
        throw new Error('Invalid response data');
      }
    } catch (error) {
      console.error('Login failed', error.response ? error.response.data : error.message);
      throw new Error('Login failed');
    }
  },
  
  logout: () => {
    localStorage.removeItem("user", null);
    localStorage.removeItem("token", null);
  },
  update: async (params) => {
    const response = await Api.put("/users", params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    localStorage.setItem("user", JSON.stringify(response.data));
  },
  updatePassword: async (params) => {
    await Api.put("/users/password", params, {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
  },
  delete: async () => {
    await Api.delete("/users", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    localStorage.removeItem("user", null);
    localStorage.removeItem("token", null);
  },
};

export default UsersService;