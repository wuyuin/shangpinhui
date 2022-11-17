// vuex 插件  Vuex是一个对象 Store()
import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import search from "./search"
// 使用插件
Vue.use(Vuex)
//存储数据

// 操作数据state  修改state 的唯一手段



// 处理异步请求  书写自己的逻辑


// 简化仓库数据   计算属性 computed 让组件获取仓库数据更加方便

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    home,
    search
  }
  

})
// vuex 实现模块化开发 state---对象  数据很多 组件过多 接口很多 