import axios from 'axios'

export default {
  device: {
    devices: () =>   axios.get('live'),
  }
}
