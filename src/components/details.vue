<template>
	<div id="details">
		<div class="name-big">
			{{this.$route.params.sb}}
			<h1>正在加载数据...</h1>
			<h1>卖完了</h1>
			<h1>点进来干啥啊？</h1>
			<h1>上面是ID</h1>
			<h1>还有卖家名</h1>
			<h1>剩下的没取！</h1>
			<h1>post和get</h1>
			<h1>整蒙了给我</h1>
			<h1>没时间了不赶趟了</h1>
			<h1>说白了就是没写</h1>
			<h1>赶不上二路汽车了</h1>
			<h1>没写没写</h1>
			<h1>咋的吧！</h1>
			<h1>对不起</h1>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
		export default {
		name: 'details',
	  data: function(){
	    return {
		  xiangqing:[],
		  xiangqing2:[]
	    }
	  },
    mounted() {
  		var that = this;
  		   axios.post('/note/getProductInfoByProductIds',{"ProductIds":["b2402917-072d-4809-8c7f-684fd9c9fce0","e817435f-aec5-4ee7-a901-5f333afa93fd","7a73fa92-28d0-44a1-8b43-69d47d862239"]})
        .then(function (response) {
            console.log(response);
          	that.xiangqing = response.data.Result.Products
        })
        .catch(function (error) {
          console.log(error);
        });
         axios.get('/note/api/GetSocialDiscoverList?Page=0&pageSize=10&AccessToken=&UserID=&Cookieid=&yid='+this.$route.params.sb)
        .then(function (response) {
            console.log(response);
            that.xiangqing2 = response.data.likeProductInfo;
    })
        .catch(function (error) {
          console.log(error);
        });
  }
	}
</script>
<style>
	
</style>