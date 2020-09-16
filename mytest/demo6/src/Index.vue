<template>
	<div class="index">
		<div class="nav"></div>
		<div class="shop-header">
			<div class="imgbox"><img src="" alt="" /></div>
			<h2>黄蜀郞鸡公煲<span class="ico"></span></h2>
			<p class="info1"><span>*4.6</span><span>月售738</span><span>商家配送约44分钟</span><span>距离345m</span></p>
			<p class="info2">店内免费涮煲，（蔬菜、小料、主食、糕点、凉菜、水果、免费吃）闻香识辣，入口知麻，一锅两吃，独具特色！！！外卖米饭请自点！！评价问题商家会一一看，可能不能及时回复。有问题详询18232966036</p>
 
		</div>
 
 
        
         <!--在这里引入navbar组件在这里引入navbar组件在这里引入navbar组件在这里引入navbar组件-->
		
		<!-- Navber引入的是路径映射 -->
		
        <!-- 路由匹配到的组件将显示在这里 -->
		 <!--在这里引入navbar组件在这里引入navbar组件在这里引入navbar组件在这里引入navbar组件-->
		<navbar></navbar>
        <!-- 路由匹配到的组件将显示在这里 -->
		<!-- 子路由 -->
        <router-view ></router-view>
	</div>
</template>
 
<script>
	import Navbar from '@/components/Navber'
	
	export default {
		name: 'Index',
		data() {
			return {
				msg:[]
			}
		},
		components: {
			Navbar
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 
