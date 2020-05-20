<template>
  <div>
    <!-- 这里的内容是点击了home后显示的内容 -->
    <h2>欢迎Home</h2>
    <ul class="nav nav-tabs">
      <li>
      <router-link to='/home/news'>News</router-link>
      </li>
      <li>
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
</style>
