// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//事件总线---把绑定事件和解绑事件和分发事件的相关方法放在一个对象上，所有
//的组件都可以直接访问这个对象上的这些事件的方法了，$bus上有 了new Vue的所有方法（on、off、emit）
Vue.prototype.$bus = new Vue()

//设置是否显示提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
