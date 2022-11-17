// 对于axios进行二次封装 引入
import axios from "axios";

// 利用axios对象的方法create，去创建一个axios实例   http://gmall-h5-api.atguigu.cn
// request 就是axios 
import nprogress from "nprogress";
 import "nprogress/nprogress.css";

const requests =axios.create({
  // http://127.0.0.1:8080/api
  baseURL:"/api",
  // 5s之内服务器没有响应  请求结束
  timeout:5000,
 
  

});


 // 请求拦截器
requests.interceptors.request.use((config)=> {
  // config配置对象  里面有一个属性很重要 headers 请求头
   nprogress.start();
  return config

})
// 响应拦截器
requests.interceptors.response.use((res)=> {
  // 响应成功的回调
   nprogress.done();
  return res.data;
},
(error)=> {
  // 响应失败的回调
 
  return Promise.reject(error)
}


)




// 对外暴露
export default requests;






