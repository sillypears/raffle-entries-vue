import axios from 'axios';

const API_URL = `http${process.env.VUE_APP_SECURE}://${process.env.VUE_APP_BACKEND_URL}/api`;

export function authenticate(userData) {
  console.log(process.env, API_URL);
  return axios.post(`${API_URL}/login`, userData);
}

export function register(userData) {
  return axios.post(`${API_URL}/register/`, userData);
}

export async function getEntries(jwt) {
  return axios.get(`${API_URL}/entries`, { headers: { Authorization: `RAF ${jwt}` } });
}
