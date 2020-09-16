<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: 'Vue生命周期'
    }
  }, 
  beforeCreate: function(){
        console.group('--beforeCreate创建前状态--')
        console.log("c%s%","color:red","el :"+this.$el)//undefined
        console.log("c%s%","color:red","data :"+this.$data)//undefined
        console.log("c%s%","color:red","message :"+this.message)
      },
      created: function(){
        console.group('--created创建完成--')
        console.log("c%s%","color:red","el :"+this.$el)//undefined
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      beforeMount: function(){
        console.group('--beforeMount挂载前状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      mounted: function(){
        console.group('--mounted挂载结束状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      beforeUpdate: function(){
        console.group('-- beforeUpdate更新前状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      update: function(){
        console.group('--mounted更新后状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      beforeDestroy: function(){
        console.group('--beforeDestroy销毁前状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      },
      destroyed: function(){
        console.group('--销毁后状态--')
        console.log("c%s%","color:red","el :"+this.$el)//已初始化
        console.log(this.$el)
        console.log("c%s%","color:red","data :"+this.$data)//已初始化
        console.log("c%s%","color:red","message :"+this.message)//已初始化
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
