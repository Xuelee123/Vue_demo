<template>
 <div>
    <ul>
      <li v-for = "(m,index) in messages" :key=index>
        <router-link :to="`/home/message/detail/${m.id}`" >{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messages: [] //这里先放一个空数组
    }
  },
  mounted() {
    //页面显示后就执行
      this.messages = [
        {id:1, title:'message1', content: '吃饭'},
        {id:2, title:'message2', content: '睡觉'},
        {id:3, title:'message3', content: '打豆豆'}
      ]
   
  },
  methods: {
    pushShow(id){
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id){
       this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>
<style >
 .router-link-active {
   color: red !important
 }
</style>
