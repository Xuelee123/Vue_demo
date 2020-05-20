import About from '../pages/About'
import Home from '../pages/Home'
import news from '../pages/News'
import message from '../pages/Message'
import detail from '../pages/MessageDetail'
export default[
  {path: '/', redirect: '/about'},
  {path:'/about', component:About},
  {path:'/home',
  component:Home,
  children:[
    {path: '/home', redirect: '/home/news'},
    {path:'/home/news', component: news},
    {path:'/home/message',
     component: message,
     children:[
      {path: '/home/message/detail/:id',
      component: detail,
      
    }
     ]
    },
  ]
  
},

]