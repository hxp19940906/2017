<template>
	<div id="app">
		<Head></Head>
		<router-view/>	
    </div>
</template>

<script>
export default {
  name: 'app'
}
// import axios from 'axios';
// export default {
//   name: 'app',
//   data: function(){
//     return {
//       message: "测试数据",
//       list: []
//     }
//   },
//  mounted() {
    
    
//       var that = this;
//       axios.get('/home/api/getYHList?pageId=2027&pageIndex=0&pageSize=5&cookieId=&yid=&timeNow=2099')
//         .then(function (response) {
//           console.log(response);
//           that.list = response.data.getYHTProduct.hits[1].Items;
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
    
//   }
// }

</script>

<style>

</style>
