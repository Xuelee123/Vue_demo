<template>
  <h2 v-if="firstView">请输入关键字</h2>
  <h2 v-else-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">请求失败，错误信息：{{errorMsg}}</h2>

  <div class="row" v-else>
    <div class="card" v-for = "(user ,index) in users" :key="index">
      <a :href=user.html_url target="_blank">
        <img :src=user.avatar_url style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      firstView: true, //第一次显示的信息的状态
      loading: false, //正在加载的提示信息的状态
      errorMsg: '', //错误信息（空为false）
      users: [] //用来存储多个用户信息对象
    }
  },
  //页面加载完毕后绑定事件
  mounted() {
    //绑定事件
    this.$bus.$on('search',
    async searchName => {
      const url = `https://api.github.com/search/users`
      //修改状态数据
      this.firstView = false
      this.loading = true
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
        this.loading = false
        this.users = users


      } catch(error){
        //发送请求有问题后进入了catch语句里面
        this.loading = false
        this.errorMsg = error.message

      }
    }
    )
  },
  methods: {}
}
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
