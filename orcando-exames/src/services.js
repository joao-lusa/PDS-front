import axios from "axios";
//prod
const url = "https://orcacando-exames-api.herokuapp.com/api/"

//local
// const url = "http://localhost:8090/api/"

const axiosInstance = axios.create({
  baseURL: url
});

axiosInstance.interceptors.request.use(
  function(config){
    const token = window.localStorage.token;
    if(token){
      config.headers.Authorization = token
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post(
      //prod
      "https://orcacando-exames-api.herokuapp.com/api/funcionario/auth",
      
      // local
      // "https://localhost/8090/api/funcionario/auth",
      body
    )
  },
}

