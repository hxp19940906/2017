<template>
	<div>
	<header>
	<h1>购物车</h1>
	<h1>空空如也</h1>
	<h1>啥也没有</h1>
	</header>
	</div>
</template>
<script>
		export default {
		name: 'shop',
		beforeCreate: function() {
			console.log("beforeCreate");
		},
		destroyed: function() {
			console.log("destroyed");
		}
	}
</script>
<style>
	
</style>