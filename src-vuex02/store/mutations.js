//包含了多个直接修改状态数据的方法的对象(这里进行了简写)
import { REQUEST, REQUEST_SUCCESS, REQUEST_ERROR } from './mutation-types'
export default {

  //修改状态数据
  [REQUEST](state) {
    state.firstView = false
    state.loading = true
  },

  //获取到用户信息后就更新数据状态
  [REQUEST_SUCCESS](state, users) {
    state.loading = false
    state.users = users
  },

  //发送请求有问题后进入了catch语句里面
  [REQUEST_ERROR](state, errorMsg) {
    state.loading = false
    state.errorMsg = errorMsg
  }


}
  
