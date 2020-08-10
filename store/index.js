import cookie from 'cookie'
import {setAuthToken, resetAuthToken} from '../common/utils/auth'

export const actions = {
  nuxtServerInit({dispatch}, context) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(context.req.headers.cookie || '')
      if (cookies.hasOwnProperty('Bearer')) {
        setAuthToken(cookies['Bearer'])
        resolve(true)
      } else {
        resetAuthToken()
        resolve(false)
      }
    })
  }
}
