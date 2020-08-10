import axios from 'axios'

export default {
  auth: {
    login: (data) =>   axios.post('auth/login', data),
    register: (data) => axios.post('auth/request-access', data),
  }
}
