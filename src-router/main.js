//引入Vue
import Vue from 'vue'

//引入组件
import App from './App.vue'

// //引入router
 import router from './router/index'

// //声明使用插件
// Vue.use(VueResource)

 //设置是否显示提示信息
 Vue.config.productionTip = false

//实例化对象
/* eslint-disable no-new */
new Vue({
  el: '#app', //el: '#app' 是index.html 的<div id="app"></div>
  components: {
    App //注册组件
  },
  template: '<App/>', //使用App组件
  //注册路由器
  router
})

