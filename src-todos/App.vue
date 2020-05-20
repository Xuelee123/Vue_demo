<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo" />
      <TodoList :todos="todos" />
      <TodoFooter :todos="todos" :checkAlltodo="checkAlltodo" :clearChosen="clearChosen"> 
        <label slot="left">
          <input type="checkbox" v-model="checkedAll" />
        </label>
        <span slot="center">
          <span>已完成{{count}}</span>
          / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger" v-show="count" @click="clearTodos">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import storage from './utils/utils'
import Pubsub from 'pubsub-js'
//暴露出去的是当前组件对象（整个组件就是一个对象，组件对象内部使用了this，是该组件的实例对象）
export default {
  computed: {
    count() {
      return this.todos.reduce(
        //problem!!
        (pre, todo) => pre + (todo.isCompleted ? 1 : 0),

        0
      )
    },
    checkedAll: {
      //既要读取checkbox的值，又要设置计算属性的值
      get() {
        //这里成立应该为返回一个布尔值
        return this.count === this.todos.length && this.count > 0
      },
      //这里的val就是checkedAll的值
      set(val) {
        this.checkAlltodo(val)
      }
    }
  },
  //待界面加载完毕
  mounted() {
    console.log(this)
    //消息的订阅
    //这里的data就是index
    this.token = Pubsub.subscribe('deleteTodo', (msg, data) =>
      this.deleteTodo(data)
    )
    //界面加载后，使用事件总线的方式进行事件的绑定
    this.$bus.$on('toggleTodo', todo => {
      this.toggleTodo(todo)
    })
  },
  //在组件被销毁之前取消消息的订阅
  beforeDestroy() {
    //取消消息订阅
    Pubsub.unsubcribe(this.token)
    //解绑事件
    this.$bus.$off('toggleTodo')
  },
  //注册组件
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    //储存数据的；脚手架中的data是一个方法，不是之前的对象
    return {
      // todos: [
      //   {id: 1, title: '吃饭', isCompleted: true},
      //   {id: 2, title: '睡觉', isCompleted: false},
      //   {id: 3, title: '打豆豆', isCompleted: false},
      // ]
      //todos: JSON.parse(localStorage.getItem('todos_key')||'[]')
      todos: storage.getTodos()
    }
  },
  methods: {
    //数据在哪里改变数据(增加和删除)的方法就在哪里，增加和删除

    //添加数据
    addTodo(todo) {
      //插入到最前面
      this.todos.unshift(todo)
    },
    //删除数据
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    //删除选中的
    clearChosen() {
      this.todos = this.todos.filter(todo => todo.isCompleted === true)
      console.log(this.todos)
    },
    //切换选中
    toggleTodo(todo) {
      todo.isCompleted = !todo.isCompleted
    },
    //设置todos中的每个todo的iscompleted的状态
    checkAlltodo(flag) {
      this.todos.forEach(todo => {
        todo.isCompleted = flag
      })
    }
  },
  watch: {
    todos: {
      deep: true, //深度监视
      // handler:function(val){
      //   // 做相关的操作
      //   // 缓存数据
      //   //localStorage.setItem('todos_key',JSON.stringify(this.todos))
      //   storage.setTodos(val)
      // }
      handler: storage.setTodos //缓存todos的数据
    }
  }
}
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
