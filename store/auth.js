import api from '../common/api/auth'
import {setAuthToken, resetAuthToken} from '../common/utils/auth'
import JwtService from "../common/jwt.service";

export const state = () => ({
  errors: null
})

export const mutations = {
  set_error(state, error) {
    state.errors = error;
  },
  unset_error(state) {
    state.errors = null;
  }
}
export const actions = {
   login({commit}, payload) {
    return api.auth.login(payload)
      .then(res => {
        setAuthToken(res.data.payload.data.accessToken);
        JwtService.saveToken(res.data.payload.data.accessToken);
        return res
      })
      .catch(err => {
        console.log(err.response.data)
        commit('set_error', err.response.data.payload.message);
      })
  },
  register({commit}, payload){
    return api.auth.register(payload)
      .then(res => {
        if (!res.data.status) commit('set_error', 'User already exist');
        return res;
      })
      .catch(err => {
        console.log(err.response.data)
        commit('set_error', err.response.data.payload.message);
      })
  },
  logout({commit}){
     resetAuthToken();
     JwtService.destroyToken();
  }
}
