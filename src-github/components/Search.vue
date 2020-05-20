<template>
<div>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search"
        @keyup.13="searchContent" v-model="searchName"/>
        <button @click="searchContent">Search</button>
      </div>
    </section>
</div>
</template>

<script>
export default {
  data(){
    return {
      searchName: ''
    }
  },
  methods: {
    searchContent () {
     const searchName = this.searchName.trim()
      //判断存在与否
      if(searchName) {
        this.$bus.$emit('search',searchName)

      }

     this.searchName = ''
    }
}
}


</script>
