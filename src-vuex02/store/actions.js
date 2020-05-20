//包含了多个间接修改状态数据的方法的对象
import { REQUEST, REQUEST_SUCCESS, REQUEST_ERROR } from './mutation-types'
//引入axios
import axios from 'axios'

export default {
  //发送异步请求
  async search ({commit},searchName){
    const url = `https://api.github.com/search/users`
    //修改状态数据
     commit(REQUEST)
   
    try {
      //发送请求
      const response = await axios.get(url,{
        params: {
          q: searchName
        }
      }) 
      //获取到用户的相关信息
      console.log(response.data.items)
      const users = response.data.items.map(
        user => ({
          login: user.login,
          html_url: user.html_url,
          avatar_url:user.avatar_url
        })
        //请使用一个括号包裹改对象字面量，而不是直接使用大括号，否则ES6解析引擎会将其解析为一个多行箭头函数
      )
      //获取到用户信息后就更新数据状态
      commit(REQUEST_SUCCESS,users)


    } catch(error){
      //发送请求有问题后进入了catch语句里面
     commit(REQUEST_ERROR,error)

    }
  }
}