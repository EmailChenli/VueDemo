
<template>
	<div class="navbar">
		<ul id="main">
			<li><router-link  to="/Food" >商品</router-link></li>
			<li><router-link  to="/Rating">评价</router-link></li>
			<li><router-link  to="/Seller">商家</router-link></li>
 
		</ul>
		
            <!-- 路由匹配到的组件将显示在这里 -->
           <router-view></router-view>
	</div>
</template>