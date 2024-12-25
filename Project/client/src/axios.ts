// 当别的文件调用这个axios的时候,就可以方便的读取其中的参数
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/api"
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
})
export default instance;