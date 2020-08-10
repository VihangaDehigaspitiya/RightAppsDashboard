import axios from 'axios'

export function setAuthToken(token) {
  axios.defaults.headers.common['AUTHORIZATION'] = `Bearer ${token}`;
}

export function resetAuthToken() {
  delete axios.defaults.headers.common['AUTHORIZATION']
}
