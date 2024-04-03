import axios from "axios";
import qs from "qs";

const instance = axios.create({
  timeout: 1000
})

instance.interceptors.request.use(
  config => {
    if(['post', 'put', 'patch'].includes(config.method)) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = qs.stringify(config.data);
    }      
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

export default instance;