<template>
  <el-container>
    <!-- 页面顶部 -->
    <el-header style="text-align: right; font-size: 16px">
      <el-dropdown>
        <i class="el-icon-setting" style="cursor:default;margin-right: 18px;font-size: 16px;">个人中心</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>邮件</el-dropdown-item>
          <el-dropdown-item>管理台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>欢迎光临！{{msg}}</span>
    </el-header>
<el-container>
    <!-- 页面左侧菜单 -->
  <div style="border-right:1px solid #C0C0C0; height:700px">   
    <el-aside width="200px"
              style="background-color: rgb(238, 241, 246)">
     <!-- 设置默认展开opendes 直接写router开启路由，默认false -->
     <el-menu :default-openeds="['1','2','3']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>公司管理</template>
        <el-menu-item-group>
          <el-menu-item index="department"><i class="el-icon-setting"></i>部门管理</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>职位管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>员工管理</template>
         <el-menu-item-group>
          <el-menu-item index="department"><i class="el-icon-setting"></i>入职员工信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>员工账号信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>员工分配信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>离职员工信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
         <el-menu-item-group>
          <el-menu-item index="department"><i class="el-icon-setting"></i>权限信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>员工账号信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>系统账号信息</el-menu-item>
          <el-menu-item index="job"><i class="el-icon-setting"></i>修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

    </el-aside>
  </div>
      <el-main>
        <!-- 下面内容是中间空白区域的内容，你可以自定义 -->
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #c1cbd8;
  color: #333;
  line-height: 80px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  name:'AdminIndex',
  data(){
    return{
      msg:''
    }
  }
}
</script>
