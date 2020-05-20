<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :index="index"  :todo="todo"  />
  </ul>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  props:{
    addTodo: Function,
    // deleteTodo: Function, 改用pubsub通信
    todos: Array,
    // toggleTodo: Function
  },
  components: {
    TodoItem
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
