import Vue from 'vue'
import App from './App.vue'
// 入口文件要引入路由
import router from "@/router"
import TypeNav from "@/components/TypeNav"

import store from "@/store"
import "@/mock/mockServe"
// 引入swiper样式  样式是直接引  入口文件
import "swiper/css/swiper.css"


Vue.config.productionTip = false
// 注册全局可用的组件   components放全局组件
Vue.component("TypeNav",TypeNav)

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库   组件实例身上多一个属性$store  vm vc 身上有$store属性
  store
}).$mount('#app')
