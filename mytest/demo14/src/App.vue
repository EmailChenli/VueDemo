<template>
  <div id="app">
    <!-- 通过html调用app无法进行路由显示动态-->
    <!-- 默认http://localhost:8081/#/ -->
    <!-- http://localhost:8081/#/admin -->
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
