//引入Vue
import Vue from 'vue'
//引入VueRouter
import VueRouter from 'vue-router'
// import About from '../pages/About'
// import Home from '../pages/Home'
// import news from '../pages/News'
// import message from '../pages/Message'
// import detail from '../pages/MessageDetail'
//声明使用VueRouter
import routes from './routes'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
  //由于App里的router-link to="/about" 的关系这里必须写上下面的这些才能显示
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/home' // 重定向
  //   },
  //   {path: '/about',component: About},
  //   {path: '/home',
  //   component: Home,
  //   children: [
  //     {path: '/home/news',component: news},
  //     {path: '/home/message',
  //     component: message,
  //     children: [
  //       // 这里：id是告诉组件这里要传参的，起占位作用
  //       {path: '/home/message/detail/:id',component: detail}
  //     ]
  //   },
  //   ]
  // }
    
  // ]
})
