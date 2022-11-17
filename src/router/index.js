
// 配置路由的地方   router文件夹  index.js    引入vue vue-router
import Vue from "vue";
import VueRouter from "vue-router"
// 使用插件VueRouter
Vue.use(VueRouter)

// 引入路由组件 pages 下的各个组件
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register"
// 配置路由
export default new VueRouter({
  routes:[

{
  path: "/home",
  component:Home,
  meta: {
    show:true
  }
 
},
{
  path:"/search/:keyword?",
  component:Search,
  name:"search",
  meta: {
    show:true
  },
  /* props:($route) => {
   return {keyword:$route.params.keyword,k:$route.query.k}
  } */

  


},
{

  path:"/login",
  component:Login,
  meta: {
    show :false
  }
},
{
  path:"/register",
  component:Register,
  meta: {
    show:false
  }
},
// }，重定向   项目跑起来的时候  定向到首页
{
  path:"*",
  redirect:"/home"
}










  ]
})



