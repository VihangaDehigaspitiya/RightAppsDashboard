import api from '../common/api/access'

export const state = () => ({
  errors : null,
  requests: []
})

export const mutations = {
  set_error(state, error) {
    state.errors = error;
  },
  set_requests(state, requests) {
    state.requests = requests;
  },
}
export const actions = {
  getAllRequests({commit}){
    return api.access.allAccess()
      .then(res => {
        console.log(res);
        commit('set_requests', res.data.payload.data.requests)
      })
      .catch(err => {
        console.log(err.response.data)
        commit('set_error', err.response.data.payload.message);
      })
  },
  approveUser({commit}, userId){
    return api.access.approve(userId)
      .then(res => res)
      .catch(err => {
        commit('set_error', err.response.data.payload.message);
        return err
      })
  },
  rejectUser({commit}, userId){
    return api.access.reject(userId)
      .then(res => res)
      .catch(err => {
        commit('set_error', err.response.data.payload.message);
        return err
      })
  }
}
