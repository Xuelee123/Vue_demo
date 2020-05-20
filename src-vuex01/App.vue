<template>
<div>
 <h2>点击次数:{{count}},奇数或偶数:{{evenOrOdd}}</h2>
 <button @click="increment">increment</button>
 <button @click="decrement">decrement</button>
 <button @click="incrementIfOdd">incrementIfOdd</button>
 <button @click="incrementAsync">incrementAsync</button>
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
     

    }
  },
  computed:{
    // evenOrOdd() {
    //  return this.count % 2 === 0 ? '偶数' : '奇数'
    // },
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    //通知vuex去增加，去触发store中对应的额action调用
    // increment(){
    //   this.$store.dispatch('increment')
      
    // },
    // decrement(){
    //     this.$store.dispatch('decrement')
    // },
    // incrementIfOdd(){
    //  this.$store.dispatch('incrementIfOdd') 
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync') 
    // }
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])

  }

  
}
</script>
<style >
 
</style>
