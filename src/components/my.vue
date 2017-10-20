<template>
	<div id='my'>
		<div class="self">
			<h4>个人中心</h4>
			<div class="tu1">
				<div class="girl">
					<router-link to="/up">
					<img src="http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png">
					<p>请登录</p>
					</router-link>
					<div class="tuichu" @click="del()">
						退出
					</div>
				</div>
				<div class="down">
					<router-link to="/up">
					<span>粉丝数&nbsp;&nbsp;0位</span>
					<span>加入洋码头&nbsp;&nbsp;0天</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="che">
			<router-link to="/up">
			<div class="one">
				<div class="zuo">
					<span class="iconfont">&#xe617;</span>
					<p>我的订单</p>
				</div>
				<div class="you">
					<a href=""> > </a>
				</div>
			</div>
			<div class="one">
				<div class="zuo">
					<span class="iconfont">&#xe626;</span>
					<p>我的优惠券</p>
				</div>
				<div class="you">
					<a href=""> > </a>
				</div>
			</div>
			</router-link>
		</div>
		<div class="foot">
			<a href="">客户端</a>
		</div>
	</div>
</template>
<script>
		export default {
		name: 'my',

		mounted(){
			
				var ck = document.cookie;
				var userid = document.cookie.substring(7);
				var p = document.querySelector(".tu1 .girl p");
				if(ck){
					p.innerText = userid;
				}
				
			
			
		},
	methods:{
		del:function clearCookie(){
		var that = this; 
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
    if (keys) { 
        for (var i = keys.length; i--;) 
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
       		 that.$router.replace({ path: '/'}) 
        } 
}
	}
	}
</script>
<style>
	#my{

	}
	#my .self{

	}
	#my .self h4{
		width:100%;
		text-align: center;
		margin-bottom: 0.2rem;
		background: #fff;
	}
	#my .self .tu1{
	width: 100%;
    height: 4rem;
    background: url(http://s1.ymatou.com/myorderm/images/p_bg-52636adcae.png);
    background-size: 100% 100%;
    padding-top: .9333333333rem;
    color:#fff;
    position: relative;
	}
	#my .self .tu1 .girl{
	 margin-left: .8rem;
    display: flex;
    display: -webkit-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
	}
	#my .self .tu1 .girl a
	{
    display: flex;
    display: -webkit-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
		 color:#fff;
	}
	#my .self .tu1 .girl img
	{
	width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-size: cover;
	}
	#my .self .tu1 .girl p
	{
	font-size: 0.32rem;
    margin-left: .2666666667rem;
	}
	#my .self .tu1 .down a{
	width: 100%;
    margin-top: .2133333333rem;
    font-size: 12px;
    height: 1.2533333333rem;
    line-height: 1.2533333333rem;
    display: flex;
    display: -webkit-flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: #fff;
	}
	#my .che .one{
	background: #fff;
    height: 1.1733333333rem;
    border-bottom: .0133333333rem solid #dedede;
    display: flex;
    justify-content: space-between;
    align-items: center;
	}
	#my .che .one div{
		height:.8rem;
	}
	#my .che .one .zuo{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 0.2rem;
	}
	#my .che .one .zuo span{
		color:red;
		font-size: .4rem;
		text-align: center;
		margin-right: .3rem;
	}
	#my .che .one .zuo span p{
		text-align: center;
		color:#333;
	}
	#my .che .one .you{
		display: flex;
		align-items: center;
	}
	#my .che .one .you a{
		color:#333;
	}
	#my .foot
	{
	position: fixed;
    bottom: .4rem;
    width: 100%;
    color: #9b9b9b;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
	}
	#my .foot a
	{
		    color: #333;
		    font-size: 0.2rem;
	}
	.tuichu{
		margin-left:2rem;
	}
</style>