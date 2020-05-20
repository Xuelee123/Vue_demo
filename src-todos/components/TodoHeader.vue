<template>
  <div class="todo-header">
    <input v-model="title" @keyup.13="add"  type="text" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '' //文本框的默认值，是空的
    }
  },
  methods: {
    add () {
      //获取文本框的数据，并去掉空格
      const title = this.title.trim()
      //如果title存在就调用父组件传过来的addTodo方法
       //定义一个todo对象，将其传入addTodo中
      if(title) {
        const todo = {
          id: Date.now(),
          title,
          isCompleted: true
        }
          this.$emit('addTodo', todo)
        //this.addTodo(todo)
        //最后清空文本框
        this.title = ''
      }
     

      
    }
  }
  // props: {
  //   addTodo: Function,
  //   required: true
  // }
};
</script>
<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>
