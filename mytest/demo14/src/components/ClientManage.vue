<template>
  <el-container>
    <el-header>
      LOGO1
    </el-header>
    <el-container>
    <el-aside width="200px"
              style="background-color: rgb(238, 241, 246)">
      <el-menu router='true'>
        <!-- 开启菜单中的router=true之后，点击菜单会把index作为路由跳转路径 -->
        <el-menu-item index="product">
          <i class="el-icon-setting"></i>产品管理1
        </el-menu-item>
        <el-menu-item index="client">
          <i class="el-icon-setting"></i>客户管理2
        </el-menu-item>
      </el-menu>
    </el-aside>

      <el-main>
        这是客户管理页
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name: 'ClientManage'
}
</script>
