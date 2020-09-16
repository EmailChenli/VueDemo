<template>
  <el-form :inline="true" :model="formInline" :rules="formrules" class="demo-form-inline">
  <el-form-item label="审批人">
    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
  </el-form-item>
  <el-form-item label="电话号码">
    <el-input v-model="formrules.mobile" ></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="formInline.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        formrules: {
            name:[{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
            },{
            min: 2,
            max: 6,
            message: '长度在 2 到 6 个字符'
            },{
            pattern: /^[\u4E00-\u9FA5]+$/,
            message: '用户名只能为中文'
            },{ 
            pattern:/^[a-zA-Z]w{1,4}$/, 
            message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'
            }],
            password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
            }, {
            min: 6,
            max: 16,
            message: '长度在 6 到 16个字符'
            }, {
                pattern: /^(\w){6,16}$/,
                message: '只能输入6-16个字母、数字、下划线'
               }],
            mobile:[{ 
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
            }
          //  },{
          //    validator:function(rule,value,callback){
          //       if(/^1[34578]\d{9}$/.test(value) == false){
          //       callback(new Error("请输入正确的手机号"));
          //     }else{
          //       callback();
          //    }
          //   }, trigger: 'blur'}
          ],
        }
      }
    },
    
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>