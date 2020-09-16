
<template>

	<div class="navbar">
		
		<p>{{msg}}</p>
		<ul id="main">

			<li><router-link  to="/Food" >商品</router-link></li>
			<li><router-link  to="/Rating">评价</router-link></li>
			<li><router-link  to="/Seller">商家</router-link></li>
 
		</ul>
		
	</div>
</template>

<script>
export default {
	name:'Navber',
	data(){
		return{
			msg:'OVER'
		}
	}
}
</script>