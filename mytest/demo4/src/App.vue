<template>
  <div id="app">
    <!-- main.js只显示图片 -->
    <img src="./assets/logo.png">
    <!-- 根据router定义调用 index.js 没有定义路径返回全部router-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
