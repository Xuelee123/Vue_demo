<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <TodoFooter/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'


export default {
   data(){
    return {
      todos: [
        {title:'eat food' , complete: false},
        {title:'sleep' , complete: false},
        {title:'beat Dou Dou' , complete: false}
      ]
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    }
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter
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
