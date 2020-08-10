import {setAuthToken, resetAuthToken} from '../common/utils/auth';
import axios from 'axios';
import JwtService from "../common/jwt.service";

const token = JwtService.getToken();

if (process.server) axios.defaults.baseURL = 'http://test.rightapps.net.au:3000/';
else axios.defaults.baseURL = 'http://test.rightapps.net.au:3000/';

if (token) {
  setAuthToken(token)
} else {
  resetAuthToken()
}
