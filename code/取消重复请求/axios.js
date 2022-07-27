// request.js
import axios from 'axios';
import CancelRequest from './cancel-request.js'
// 实例化
let cancelRequest = new CancelRequest()
const instance = axios.create({
  // ...
});

// 请求拦截器
instance.interceptors.request.use(config => {
  // 检查之前是否存在相同的请求，如果存在则取消。不存在就记录
  cancelRequest.checkoutPendingRequest(config);
  return config;
}, err => {
  Promise.reject(err);
});
// 响应拦截器
instance.interceptors.response.use(res => {
  // 移除成功请求记录
  cancelRequest.removeRequestKey(res.config)
  return res.data;
}, err => {
  Promise.reject(err);
});
export default instance;