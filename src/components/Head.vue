<template>
			<div id="head">
				<div class="left">
	    			<router-link exact to="/" active-class="under" >首页</router-link>
	    			<router-link to="/community" active-class="under">社区</router-link>
	   			</div>
	   			<div class="right">
	   	 			<router-link to="/shop" class="iconfont">&#xe507;</router-link>
	    			<router-link to="/my" class="iconfont">&#xe97c;</router-link>
	    	</div>
	    </div>
    
</template>
<script>
export default {
  name: 'Head'
}
</script>
<style>
	@font-face {
  font-family: 'iconfont';
  src: url('../assets/font/iconfont.eot');
  src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/font/iconfont.woff') format('woff'),
  url('../assets/font/iconfont.ttf') format('truetype'),
  url('../assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

#head{
	width:100%;
	height:1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
#head .left{
	width:25%;
	height:0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
}
#head .right{
	width:20%;
	height:0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

}
#head a{
	color: #383838;
	height:100%;
	display: flex;
	align-items: center;
}
#head .left a{
	font-size: 0.2rem;
	padding-left: 0.15rem;
	padding-right: 0.15rem;
	width:0.8rem;


}
#head .right a{
	font-size: 0.32rem;
	padding-left: 0.15rem;
	padding-right: 0.15rem;

}
#head .under{
	border-bottom: 1px solid #cc3333;
}
</style>