<template>
  <div>
    <!-- 非路由组件 Header Footer 标签使用法  路由组件 -->
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>

  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Footer

  },
  mounted () {
    // mounted只会执行一次  组件身上才有$store属性
    this.$store.dispatch("getCategoryList")


  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
