import { setAuthToken, resetAuthToken } from "../common/utils/auth";
import axios from "axios";
import JwtService from "../common/jwt.service";

const token = JwtService.getToken();

if (process.server)
  axios.defaults.baseURL =
    "https://cors-anywhere.herokuapp.com/http://test.rightapps.net.au:3000/";
else
  axios.defaults.baseURL =
    "https://cors-anywhere.herokuapp.com/http://test.rightapps.net.au:3000/";

if (token) {
  console.log("Token", token);
  setAuthToken(token);
} else {
  resetAuthToken();
}
