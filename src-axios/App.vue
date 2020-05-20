<template>
<div>
 <h2 v-if="!repUrl">loading...</h2>
 <h2 v-else>
   Most Star is  <a :href="repUrl">{{repName}}</a>
 </h2>
</div>
</template>

<script>
//引入axios
import axios from 'axios'
export default {
  data(){
    return {
      repUrl: '',
      repName: ''
    }
  },
  //页面加载完毕
  //基本版
  // mounted(){
  //   console.log(this)
  //  const url = `https://api.github.com/search/repositories?q=v&sort=stars`
   
  //  axios
  //  .get(url)
  //  .then(response => {
  //    console.log(response)
  //    //获取请求后的数组中的第一个数据对象
  //    const result = response.data.items[0]
  //    this.repUrl = result.html_url
  //    this.repName = result.name
  //  })
  //  .catch(error => {
  //    console.log('错了，老弟',error)
  //  })
  // },
  //简化版
  async mounted(){
    
   const url = `https://api.github.com/search/repositories?q=v&sort=stars`
   
   try {
     const response = await axios.get(url)
     //更新状态数据
     const result = response.data.items[0]
     this.repName = result.name
     this.repUrl = result.name
   } catch (err) {
     console.log('错误消息',err)
   }
   
  },
  methods: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 
</style>
