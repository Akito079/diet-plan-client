import axios from "axios"
export default{
  async login(payload){
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return axios.post('http://localhost:8000/login',payload);
  },
  async register(payload){
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return axios.post('http://localhost:8000/register',payload);
  },
  async logout(){
    return axios.post('http://localhost:8000/logput');
  },
  async getUser(){
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    return axios.get('http://localhost:8000/api/user');
  }
}