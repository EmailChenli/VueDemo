<template>
    <el-container style="height: 600px;">
        <el-header>头部</el-header>
        <el-container>
         <el-aside>
             左边  
        </el-aside>
       
        
        <el-main>主显示</el-main>
         
       </el-container>
    </el-container>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style>
  .el-header, .el-footer {
    background-color: #f0eee3;
    color: rgb(8, 8, 8);
    text-align: right;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #fcfcfc;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>