const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  lintOnSave:false,
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: ' http://gmall-h5-api.atguigu.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' 
        }
      }
    }

  },
 
  

})
