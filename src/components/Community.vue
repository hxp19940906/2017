<template>
	<div id="community">
		<div class="tou">
			<h3>
				<span>
				<img src="http://s1.ymatou.com/notem/images/discovery/Shape@2x-1b2125d62a.png">
				<p>热门活动</p>
				</span>
				<a href="#">查看全部&nbsp;&nbsp;></a>	
			</h3>
			<div class="auto">
			<ul>
				<li>
					<img src="http://pic1.ymatou.com/G02/M03/F3/67/CgvUA1na8cqAYQCfAAAboaCkY1I720_3_2_w_o.jpg" class="big">
					<div class="bai">
						<h6>@你的另一半</h6>
						<div class="xia">
							<span class="zuo">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_focus_icon@2x-87ced3079b.png">
								<p>868人</p>
							</span>
							<span class="you">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_note_icon@2x-97751476ae.png">
								<p>10篇</p>
							</span>
					</div>
					</div>
				</li>
				<li>
					<img src="http://pic1.ymatou.com/G02/M04/C4/70/CgvUBFnREsaAVyQzAAAvWa5Gnmg110_3_2_w_o.jpg" class="big">
					<div class="bai">
						<h6>十一在家也能嗨</h6>
						<div class="xia">
							<span class="zuo">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_focus_icon@2x-87ced3079b.png">
								<p>10150人</p>
							</span>
							<span class="you">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_note_icon@2x-97751476ae.png">
								<p>90篇</p>
							</span>
					</div>
					</div>
				</li>
				<li>
					<img src="http://pic1.ymatou.com/G02/M00/A2/50/CgvUBVmmLTeAOrEkAABDRETMgZc987_3_2_w_o.jpg" class="big">
					<div class="bai">
						<h6>狂欢趴晒单领大奖</h6>
						<div class="xia">
							<span class="zuo">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_focus_icon@2x-87ced3079b.png">
								<p>12281人</p>
							</span>
							<span class="you">
								<img src="http://s1.ymatou.com/notem/images/discovery/social_note_icon@2x-97751476ae.png">
								<p>145篇</p>
							</span>
					</div>
					</div>
				</li>
			</ul>
			</div>
		</div>
		<div id="container">
			<ul>
				<li class="box" v-for="item1 in shequ">
					<router-link :to="'/details/'+item1.UserInfo.UserId +item1.UserInfo.UserName">
					<div class="datu">
						
						<img :src="item1.NoteInfo.TagImage[0].Pic" v-if="item1.NoteInfo.TagImage.length">
						
						<!-- <img :src= "item1.SpecialTopicInfo.CoverPic" v-if="item1.SpecialTopicInfo!==null"> -->
					</div>
					<h6 v-if="item1.SpecialTopicInfo!==null">{{item1.SpecialTopicInfo.Title}}</h6>
					<p class="wenzi">{{item1.NoteInfo.Content}}</p>
					<div class="user">
						<span class="user-xx">
						<!-- 	<div class="user-photo" style="background:url('item1.UserInfo.UserLogo')"></div> -->
							<img :src="item1.UserInfo.UserLogo" class="user-photo">
							<p>{{ item1.UserInfo.UserName}}</p>
						</span>
						<span class="good">
							<div class="iconfont">&#xe768;</div>	
							<a href="">{{item1.ExtInfo.CollectionNum}}</a>
						</span>
					</div>
					</router-link>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import { InfiniteScroll } from 'mint-ui';
	export default {
	name: 'community',
	  data: function(){
	    return {
		  shequ:[]
	    }
	  },
	  methods:{

  },
    mounted() {
  		var that = this;
  		   axios.get('/note/api/GetSocialDiscoverList?Page=0&pageSize=10&AccessToken=&UserID=&Cookieid=&yid=')
        .then(function (response) {
            console.log(response);
          	that.shequ = response.data.Result
        })
        .catch(function (error) {
          console.log(error);
        });
  }

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


#community{
	    background: #e8e8e8;
	    padding-top: 0.2rem;
}
#community .tou{
	    padding: .2666666667rem;
	    display: flex;
	    background: #fff;
	    flex-direction: column;
}
#community .tou h3{
	 display: flex;
	 justify-content: space-between;
	 width:100%;
	 margin-bottom: 0.2rem;
}
#community .tou h3 span{
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
}
#community .tou h3 span img{
    width: .2rem;
    height: .2rem;
    margin-right: 0.1rem;
}
#community .tou h3 span p{
	font-size: 0.24rem;
}
#community .tou h3 a{
		font-size: 0.2rem;
		color:#ccc;
}	
#community .tou .auto{

}
#community .tou .auto ul{
	  width: 100%;
    white-space: nowrap;
    overflow-x: auto;
}
#community .tou .auto ul li{
	    display: inline-block;
    height: 2.6666666667rem;
    position: relative;
    margin: 0 .1333333333rem;

}
#community .tou .auto ul li .big{
	width: 4rem;
    height: 2.6666666667rem;
    opacity: 1;
}
#community .tou .auto ul li .bai{
position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 3.84rem;
    height: 1.2rem;
    padding: .08rem .2666666667rem .2133333333rem;
    background: center #fff;
    opacity: .8;
    background-size: 100% 100%;
    color: #646464;
}
#community .tou .auto ul li .bai h6{
	    width: 100%;
    font-weight: 700;
    font-size: .3733333333rem;
    line-height: .4266666667rem;
    display: -webkit-box;
    white-space: normal;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: center;
}
#community .tou .auto ul li .bai .xia{
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.2rem;
}
#community .tou .auto ul li .bai .xia span{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:0.1rem;
}
#community .tou .auto ul li .bai .xia span img{
	    width: .2666666667rem;
    height: .2666666667rem;
}
#community .tou .auto ul li .bai .xia span p{
	font-size: 0.1rem;
	color: #646464;
}
#community .tou .auto ul::-webkit-scrollbar{
    height:0.1rem;
    width:3rem;
   }
#community  #container{
	padding: .1rem;
}
#community  #container ul{
	display: flex;
	width:100%;
	flex-wrap: wrap;
	justify-content: space-between;
}
#community  #container ul .box{
	width:48%;
	display: flex;
	flex-direction: column;
	margin-left: 1%;
	margin-right: 1%;
	margin-top: 2%;
	margin-bottom: 2%;
	    background:#fff;
}
#community  #container ul .box  .datu img{
   	width:100%;
   	height:100%;
}
#community  #container ul .box h6{
	text-align: center;
	margin-top: 0.1rem;
}
#community  #container ul .box .wenzi{
	font-size: 0.18rem;
	width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    text-indent: 0.36rem;
    }
#community  #container ul .box .user{
	margin-top: .1rem;
	display: flex;
	justify-content: space-between;
}
#community  #container ul .box .user img{
	width: .3rem;
    height: .3rem;
    display: inline-block;
    border-radius: 50%;
}
#community  #container ul .box .user .user-xx{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
#community  #container ul .box .user .user-xx p{
	font-size: 0.02rem;
	margin-left: 0.3rem;
}
#community  #container ul .box .user .good{
	display: flex;
	justify-content: space-between;
	align-items: center;

}
#community  #container ul .box .user .good .iconfont{
margin-right: 0.2rem;
    color: #9b9b9b;
}
#community  #container ul .box .user .good a{
    color: #9b9b9b;	
}
</style>