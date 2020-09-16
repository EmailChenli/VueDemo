<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">管理系统</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username" name="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"  v-model="form.password" name="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  <script>
  import { login } from "../api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
      login() {
      //let 属性 var属性传属性传对象一致性
      //打印对象
      console.log(this.form)
      //调用方法并回调方法
    //   login(this.form).then(res => {
    //       console.log(this.form)
    //       console.log(res);
    //   });

      login(this.form.username,this.form.password).then(res => {
          console.log(this.form)
          console.log(res);
      });
    }
  }
}
</script>

<style acoped>
.login-form {
  width: 350px;
  margin: 160px auto; /* 上下间距160px，左右自动居中*/
  background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}

/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("");
}

/* 标题 */
.login-title {
  color: #303133;
  text-align: center;
}
</style> 