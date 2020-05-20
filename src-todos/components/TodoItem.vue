<template>
  <div>
    <li
    @mouseenter="mouseenterHandle(true)"
    @mouseleave="mouseenterHandle(false)"
    :style="{color:fontColor, backgroundColor:bgColor}"
    >
      <label>
        <input type="checkbox" v-model="isCheck" />
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
    </li>
  </div>
</template>

<script>
import Pubsub from 'pubsub-js'
export default {
  props:{
    //传入的一个todo(item)
     todo: Object,
    //  deleteTodo: Function,
     index: Number,
    //  toggleTodo: Function
  },
  data() {
    return {
      isShow: false, //设置button的显示/隐藏的状态
      fontColor: 'black', //一个todo对象的字体颜色
      bgColor: 'white', //一个todo对象的背景颜色
    }
  },
  methods: {
    //高亮显示的相关操作的方法
    mouseenterHandle(flag) {
      if(flag) {
        //鼠标进入
        this.fontColor = 'green'
        this.bgColor = 'pink'
        this.isShow = true
      } else {
        //鼠标离开
        this.fontColor = 'black'
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    //删除操作
    delTodo () {
      if(confirm('确定删除吗')){
        //console.log(this) deleteTodo方法传过来了，this上有这个方法
        //this.deleteTodo(this.index)
        //发布消息
        Pubsub.publish('deleteTodo', this.index)
      }
    }
  },
  computed: {
    isCheck: {
      //获取状态
      get() {
        return this.todo.isCompleted
      },
      //设置状态
      set() {
        //this.toggleTodo(this.todo) this.todo是从当前的data里面获取的
        //调用组件的实例对象的方法
        this.$bus.$emit('toggleTodo',this.todo)
      }
    }
  }
}
</script>
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
