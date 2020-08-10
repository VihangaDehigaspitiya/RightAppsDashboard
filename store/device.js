import api from '../common/api/device'

export const state = () => ({
  device_list: [],
  errors: null
})

export const mutations = {
  set_error(state, error) {
    state.errors = error;
  }
}
export const actions = {
  async getDevices({commit}) {
    return api.device.devices()
      .then(result => {
        return result;
      })
      .catch(err => {
        commit('set_error', err.response.data.payload.message)
      })
  },

}
