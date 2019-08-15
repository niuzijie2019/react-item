import axios from 'axios';

const isDev = process.env.MODE_ENV === 'developement';

const ajax = axios.create({
  baseURL: isDev ? 'https://www.daxunxun.com' : 'https://www.daxunxun.com',
  timeout: 6 * 1000
})

ajax.interceptors.request.use(function(config) {
  console.log('开始加载数据了')
  return config;
}, function (error) {
  console.log('没有请求到数据')
  return Promise.reject(error);
});
ajax.interceptors.response.use(function (response) {
  console.log('接收到数据了')
  return response;
},function (error) {
  console.log('数据接收错误')
  return Promise.reject(error);
});
export default ajax;