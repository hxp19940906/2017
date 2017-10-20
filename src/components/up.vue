<template>
	<div id="up">
		<div class="updata">
			<input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="username">
			<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password" >
			<button type="submit" class="btn btn-default" @click="reg()">登录</button>
			<div class="xiamian">
				<router-link to="/zhuce" >快速注册</router-link>

				<a href="">下载app找回密码</a>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
		export default {
		name: 'up',
				data:function(){
			return{
				username:"",
				password:""
			}
		},
methods:{
            reg:function(){
            		var that = this;
                axios.post("/api/two","username="+this.username+"&password="+this.password)
                    .then(function(res){
                        if(res.data){
                        	alert("登录成功")
                        that.$router.replace({ path: '/'}) 
                                        	
                        // this.$router.go('/up');
               	 	// req.session.dasb = result[0];
                	// res.cookie('username',result[0].username);
                	// res.redirect('/up');
                        
                        }else{
                            alert("用户名密码错误")
                        }
                    })
                    .catch(function(error){
                     console.log("sb")
                })
            }
        }
	}

</script>
<style>
	#up{
		width:100%;
		height:89.5%;
		background:#f1f1f1;
	}
	
	#up .updata{
		display: flex;
		width:100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

	}
	#up .updata input{
		margin-top: .4rem;
	    width: 75%;
   		height: 1.0133333333rem;
    	line-height: .48rem;
    	padding: .2666666667rem 0 .2666666667rem .2666666667rem;
    	border: 0;
    	font-size: 14px;
	}
	#up .updata button
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
	#up .updata .xiamian{
		display: flex;
		justify-content: space-between;
		width: 75%;
		margin-top: .2rem;
	}
	#up .updata .xiamian a
	{
	color: #9b9b9b;
    font-size: 0.12rem;
    text-decoration: underline;
	}
</style>