<template>
<div>
<ul>
 <li>id:{{$route.params.id}}</li>
 <li>title:{{detail.title}}</li>
 <li>content:{{detail.content}}</li>
</ul>

</div>


</template>

<script>
export default {
  data(){
    return {
      messageDetails:[
        {id:1, title:'message1', content: '吃饭'},
        {id:2, title:'message2', content: '睡觉'},
        {id:3, title:'message3', content: '打豆豆'}
      ],
      detail: {}
    }
  },
  methods: {},
  mounted(){
    const id = this.$route.params.id
    this.detail = this.messageDetails.find(detail => detail.id === +id)
  }, 
  watch: {
    //来监视$route的数据
    // $route: function () {
    // const id = this.$route.params.id
    // this.detail = this.messageDetails.find(detail => detail.id === id * 1)
    // }
    $route(val) {
      /* 这里的val代表$route对象 */
      const id = val.params.id
      this.detail = this.messageDetails.find(detail => detail.id === +id)

    }
  }
}
</script>
<style >
 
</style>
