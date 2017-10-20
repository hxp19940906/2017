<template>
	<div id="zhuce">

		<div class="zhuce1">
			<input class="form-control" id="inputEmail3" placeholder="请输入账号"  v-model="username">
			<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
			<button type="submit" class="btn btn-default" @click="reg()">注册</button>
			<div class="xiamian">

			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
		export default {
		name: 'zhuce',
		data:function(){
			return{
				username:"",
				password:""
			}
		},
methods:{
            reg:function(){
            		var that = this;
                axios.post("/api/one","username="+this.username+"&password="+this.password)
                    .then(function(res){
                        if(res.data){
                        	alert("注册成功！宝贝儿")
                        that.$router.replace({ path: '/up'})                 	
                        // this.$router.go('/up');
               	 	// req.session.dasb = result[0];
                	// res.cookie('username',result[0].username);
                	// res.redirect('/up');
                        
                        }else{
                            alert("已有的用户名")
                        }
                    })
                    .catch(function(error){
                    // 	var that = this;
                    // that.$router.go('/up');
                })
            }
        }
		}


</script>
<style>
	#zhuce{
		width:100%;
		height:89.5%;
		background:#f1f1f1;
	}
	#zhuce .zhuce1{
		display: flex;
		width:100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

	}
	#zhuce .zhuce1 input{
		margin-top: .4rem;
	    width: 75%;
   		height: 1.0133333333rem;
    	line-height: .48rem;
    	padding: .2666666667rem 0 .2666666667rem .2666666667rem;
    	border: 0;
    	font-size: 14px;
	}
	#zhuce .zhuce1 button
	{
		margin-top: 1rem;
	 width: 75%;
    height: 1.0133333333rem;
    line-height: 1.0133333333rem;
    text-align: center;
    padding: 0;
    border-style: none;
    border-radius: .08rem;
    background-color: #c33;
    color: #fff;
    font-size: 15px;
	}
	#zhuce .zhuce1 .xiamian{
		display: flex;
		justify-content: space-between;
		width: 75%;
		margin-top: .2rem;
	}
	#zhuce .zhuce1 .xiamian a
	{
	color: #9b9b9b;
    font-size: 0.12rem;
    text-decoration: underline;
	}
</style>