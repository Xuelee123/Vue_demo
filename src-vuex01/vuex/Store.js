import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT,DECREMENT} from './mutations-type.js'
//声明使用Vuex
Vue.use(Vuex)

//首先state保存状态
const state = {
  count: 0
}
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
//mutation直接修改数据的方法
const mutations = {
  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  }
}

//action间接修改数据的方法
const actions = {
  increment(context) {
    console.log(context) //经过打印context里面含所有dispatch commit getters state等等
    context.commit(INCREMENT)
  },
  decrement({commit}) {
    commit(DECREMENT)
  },
  incrementIfOdd({state,commit}){
    if(state.count % 2 !== 0) commit(INCREMENT) 
  },
  incrementAsync({commit}){
    setTimeout(() => {
      commit(INCREMENT) 
    },1000)
  }

}
//store里面的计算属性
const getters = {
  evenOrOdd(state){
   return state.count % 2 === 0 ? '偶数' : '奇数'
  }

}

//产生store对象
export default new Vuex.Store(
  {
    state,
    mutations,
    actions,
    getters
  }
)
