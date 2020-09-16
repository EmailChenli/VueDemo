<template>
  <div id="app">
    <img src="./assets/logo.png">
     
      <router-view/>
      <!-- <router-view/>
      <router-view name="left" class="area left"/>
      <router-view name="right" class="area right"/>
      <router-view name="logo" class="area "/>
      <router-view name="bottom" class="area bottom"/> -->
    <p>测试APP1</p>
  </div>
</template>

<script>
export default {
  name: 'index'
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
