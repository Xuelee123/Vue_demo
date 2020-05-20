<template>
<div class="todo-footer">
        <!-- <label>
          <input type="checkbox" v-model="checkedAll" />
        </label>
        <span>
          <span>已完成{{count}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="count" @click=clearTodos>清除已完成任务</button> -->
        <slot name="left"/>
        <slot name="center"/>
        <slot name="right"/>
 </div>
</template>

<script>
export default {
  // data(){
  //   return {}
  // },
  // props: {
  //   todos: Array,
  //   checkAlltodo: Function,
  //   clearChosen: Function
  // }
  // ,
  // methods: {
  //   clearTodos(){
  //     this.clearChosen()
  //     console.log('1111')
  //   }
    
  // },
  // computed:{
  //   count() {
  //     return this.todos.reduce(
  //       //problem!!
  //       (pre, todo)=>pre + (todo.isCompleted ? 1 : 0)
          
  //       , 0 )
     
  //   },
  //   checkedAll: {
  //     //既要读取checkbox的值，又要设置计算属性的值
  //     get() {
  //       //这里成立应该为返回一个布尔值
  //       return this.count === this.todos.length &&this.count > 0
  //     },
  //     //这里的val就是checkedAll的值
  //     set(val) {
  //       this.checkAlltodo(val)
  //     }
  //   }
  // }
}
</script>
<style>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>

