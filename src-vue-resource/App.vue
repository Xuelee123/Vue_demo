<template>
<div>
 <h2 v-if="!repUrl">loading...</h2>
 <h2 v-else>
   Most Star is {{repName}}
 </h2>
</div>
</template>

<script>
export default {
  data(){
    return {
      repUrl: '',
      repName: ''
    }
  },
  //页面加载完毕
  mounted(){
    console.log(this)
   const url = `https://api.github.com/search/repositories?q=v&sort=stars`
   //this里面有这个方法$http
   this.$http
   .get(url)
   .then(response => {
     console.log(response)
     //获取请求后的数组中的第一个数据对象
     const result = response.data.items[0]
     this.repUrl = result.html_url
     this.repName = result.name
   })
   .catch(error => {
     console.log(error)
   })
  },
  methods: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 
</style>
