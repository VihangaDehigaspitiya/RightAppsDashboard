import axios from 'axios'

export default {
  access: {
    allAccess: () => axios.get('user-access'),
    approve: (id) => axios.patch(`user-access/${id}/accept`),
    reject: (id) => axios.patch(`user-access/${id}/reject`),
  }
}
