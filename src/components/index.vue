<template>
	  <div id="index">
  <mt-swipe :auto="4000" class='swipe' >
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M02/26/63/CgvUBVngiKuAGyaNAAEj74_1bX0456_75_52_o.jpg" />
    </mt-swipe-item>
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M0A/28/50/CgvUBVngrUWARH0rAADoeeNRbDw522_75_52_o.jpg" />
    </mt-swipe-item>
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M09/3A/CF/CgvUBFnjkdiAbnwWAAS4Mi-OKYQ309_75_52_o.jpg" />
    </mt-swipe-item>
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M0B/32/A6/CgvUBFniXYSAMx9SAAD8cFbw5gA119_75_52_o.jpg"/>
    </mt-swipe-item>
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M07/3D/CB/CgvUBFnkL2KABZTgAAEfLlVIcX0436_75_52_o.jpg" />
    </mt-swipe-item>
    <mt-swipe-item><img src="http://pic1.ymatou.com/G02/M0A/3E/89/CgvUBFnkPI-AcanzAAMvfAcU978337_189_131_o.jpg" />
    </mt-swipe-item>
  </mt-swipe>
  <div class="xhq">
    <h5><span class="iconfont click">&#xe600;</span>小编精选</h5>
  
    <div class="photo">
      <div class="photo-one">
        <img src="http://pic1.ymatou.com/G02/M00/4F/34/CgvUBVm_qY2AQLKHAACwW6gCBm0675_75_29_o.jpg">
      </div>
      <div class="yinying">
        <h3>来自天然的滋养</h3>
        <button>查看更多</button>
    </div>
    </div>

  </div>
  <div class="yhj">
    <h5><span class="iconfont click">&#xe634;</span>洋货集</h5>
    <ul>
      <li>
        <img src="http://s1.ymatou.com/homem/images/yhj_pic2-ba37cf91db.png">
        <span class="one">靓包潮鞋</span>
        <span class="two">Shoe&bag</span>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/yhj_pic3-505214cb4f.png">
        <span class="one">美颜护肤</span>
        <span class="two">Skin care</span>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/yhj_pic4-0af2cca806.png">
        <span class="one">服装配饰</span>
        <span class="two">Clothing</span>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/yhj_pic5-2702ebb41f.png">
        <span class="one">生活家</span>
        <span class="two">Living home</span>
      </li>
    </ul>
  </div>
  <div class="bigphoto">
    <img :src="one" >
  </div>
  <div class="twoshuju">
    <ul>
      <li v-for="item in two">
        <img :src="item.PicUrl">
        <span>{{item.Name}}</span>
        <p>￥{{item.Price}}</p>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/more_live-b03b5744de.png">
      </li>
    </ul>
  </div>
  <div class="bigphoto">
    <img :src="three" >
  </div>
  <div class="twoshuju">
    <ul>
      <li v-for="item in four">
        <img :src="item.PicUrl">
        <span>{{item.Name}}</span>
        <p>￥{{item.Price}}</p>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/more_live-b03b5744de.png">
      </li>
    </ul>
  </div>

  <div class="bigphoto">
    <img :src="five" >
  </div>
  <div class="twoshuju">
    <ul>
      <li v-for="item in six">
        <img :src="item.PicUrl">
        <span>{{item.Name}}</span>
        <p>￥{{item.Price}}</p>
      </li>
      <li>
        <img src="http://s1.ymatou.com/homem/images/more_live-b03b5744de.png">
      </li>
    </ul>
  </div>
  <div class="bigphoto">
    <img :src="seven" >
  </div>
  <div class="twoshuju">
    <ul>
      <li v-for="item in eight">
        <img :src="item.PicUrl">
        <span>{{item.Name}}</span>
        <p>￥{{item.Price}}</p>
        <li>
        <img src="http://s1.ymatou.com/homem/images/more_live-b03b5744de.png">
      </li>
      </li>
    </ul>
  </div>
  <div class="like">
    <h5>
      <span>
        <img src="http://s1.ymatou.com/homem/images/tag_heart-dc2c84d296.png">
      </span>猜你喜欢
    </h5>
  </div>
  <div class="last">
    <ul>
      <li v-for="items in list2">
        <div class="tu">
          <img :src="items.pic">
        </div>
        <div class="ming">
          <p>{{items.name}}</p>
        </div>
        <div class="baoyou">
          <span v-if="items.productType==2||1">包邮包税</span>
          <span v-if="items.productType==1">买手促销</span>
        </div>
        <div class="jiage">
          <div class="price">
            <span>￥{{items.price}}.00</span>
            <div>
                  <img :src="items.sellerInfo.countryIconUrl">
                  <p>{{items.sellerInfo.countryName}}</p>
              </div>
          </div>

        </div>
      </li>
    </ul>
  </div>

<!--     <p>{{message}}</p>
    <button @click="mounted()">测试</button>
    <ul>
      <li v-for="item in list">
        <img :src="item.PicUrl" />
        <p>{{item.Name}}</p>
      </li>
    </ul> -->
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
	import axios from 'axios';
export default {
  name: 'index',
  data: function(){
    return {
      one: "",
      two:[],
      three:"",
      four:[],
      five:"",
      six:[],
      seven:"",
      eight:[],
      list2:[]
    }
  },
 mounted() {
      var that = this;
      axios.get('/home/api/getYHList?pageId=2027&pageIndex=0&pageSize=5&cookieId=&yid=&timeNow=2099')
        .then(function (response) {
          console.log(response);
          that.one = response.data.getYHTProduct.hits[0].PicUrl;
          that.two = response.data.getYHTProduct.hits[0].Items;
          that.three = response.data.getYHTProduct.hits[1].PicUrl;
          that.four = response.data.getYHTProduct.hits[1].Items;
          that.five = response.data.getYHTProduct.hits[2].PicUrl;
          that.six = response.data.getYHTProduct.hits[2].Items;
          that.seven = response.data.getYHTProduct.hits[3].PicUrl;
          that.eight = response.data.getYHTProduct.hits[3].Items;
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.get('/home/api/getLikeList?pageNub=1&pageSize=20')
        .then(function (response) {
            console.log(response);
            that.list2 = response.data.likeProductInfo;
    })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>
<style>
#index{
/*display: flex;
width: 100%;
flex-direction:column; 
overflow: hidden;

*/
}
#index .swipe{
    height:4rem;

  }
  #index .swipe img{
    width:100%;
    height:4rem;
  }
  #index .xhq{
    width:100%;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
 #index .xhq h5{
  width:100%;
  color:#646464;
  display: flex;
  justify-content: center;
    align-items: center;
    height:0.8rem;
 }
 #index .xhq .photo{
  width: 100%;
  height:3.2rem;
   position: relative;

 }
 #index .xhq .photo img{
  width:100%;
  height:100%;}
 #index .xhq .photo .yinying{
  height:3.2rem;
  width:100%;
  background: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  position: absolute;
    top: 0;
    left:0;
 }
 #index .xhq .photo .photo-one{
  height:3.2rem;
  width:100%;
 }
 #index .xhq .photo .yinying h3{
  color: #fff;
 }
  #index .xhq .photo .yinying button{
    background: rgba(0,0,0,0);
    border: 0.01rem solid #fff;
    border-radius: 0.1rem;
    height:0.5rem;
    width:1.5rem;
    color:#fff;
    margin-top:0.5rem; 
    
  }
    #index .yhj{
    width:100%;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
 #index .yhj h5{
  width:100%;
  color:#646464;
  display: flex;
  justify-content: center;
    align-items: center;
    height:0.8rem;
    margin-bottom: 0.5rem;
 }
 #index .yhj h5 span{
  margin-right: 0.1rem;
 }
 #index .xhq h5 span{
  margin-right: 0.1rem;
 }
 #index .yhj ul{
  display: flex;
  width: 100%;
  flex-wrap:wrap;
  background: #fff;
 }
 #index .yhj ul li{
  display: flex;
  width: 45%;
  margin: 4% 1% 1% 4%;
  position: relative;
 }
 #index .yhj ul li:nth-child(2){
  margin: 4% 4% 1% 1%;
 }
  #index .yhj ul li:nth-child(3){
  margin: 1% 1% 4% 4%;
 }
  #index .yhj ul li:nth-child(4){
  margin: 1% 4% 4% 1%;
 }
  #index .yhj ul li img{
    width:100%;
    height:100%;
  }
 #index .yhj ul li .one{
        color: #383838;
        font-size: 0.28rem;
        position: absolute;
        right:0.3rem;
        top:0.2rem;
  }
 #index .yhj ul li .two{
  color: #ccc;
  font-size: 0.2rem;
  position: absolute;
   right:0.2rem;
   top:0.8rem;
  }
  #index .yhj ul li:nth-child(2) .two{
    right:0.3rem;
  }
  #index .yhj ul li:nth-child(3) .two{
    right:0.3rem;
  }
  #index .bigphoto{
    width:100%;
  }
  #index .bigphoto img{
    width:100%;
    height:100%;
  }
  #index .twoshuju{
  }
  #index .twoshuju ul{
   width: 100%;
    white-space: nowrap;
    /*overflow: hidden;*/
    overflow-x: auto;
    padding: 0 .4266666667rem;
    font-size: 0;
    list-style-type: none;

  }
   #index .twoshuju ul li{
    width: 2.88rem;
    margin-right: .2133333333rem;
    display: inline-block;
    height: 4.2133333333rem;
    /*overflow: hidden;*/
    position: relative;

   }
   #index .twoshuju ul::-webkit-scrollbar{
    height:0.1rem;
    width:3rem;
   }
     #index .twoshuju ul li img{
      width:2.88rem;
      height:2.88rem;
     }
    #index .twoshuju ul li span{
      height:0.6rem;
      width:100%;
      position: absolute;
      bottom: 0.5rem;
      left:0;
      color: #383838;
      font-size: 0.32rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
    }
    #index .twoshuju ul li p{
      text-align: center;
      height:0.4rem;
      color:#c33;
      font-size: 0.36rem;
      position: absolute;
      bottom:0.2rem;
      left:0;
      width:100%;
    }
   #index .like{
    width:100%;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
 #index .like h5{
  width:100%;
  color:#646464;
  display: flex;
  justify-content: center;
    align-items: center;
    height:0.8rem;
 }
 #index .like h5 span{
  width:0.32rem;
  height:0.32rem;
  margin-right: 0.1rem
 }
 #index .like h5 span img{
  width:100%;
  height:100%;
 }
  #index .last{
    width:100%;
    background:#eee;
    padding-top: 0.3rem;
  }
   #index .last ul{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   } 
    #index .last ul li{
      width:46%;
      margin:2%;
      display: flex;
      flex-direction: column;
      background: #fff;
    }
    #index .last ul li .tu{
      width:100%;
      display: flex;
    }
     #index .last ul li .tu img{
      width:100%;
      height:100%;
     }
     #index .last ul li .ming{
      height:1rem;
     
     }
   #index .last ul li .ming p{
     line-height: 0.5rem;
     font-size:0.28rem;
       width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
   }
   #index .last ul li .baoyou{
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.1rem;
   }
   #index .last ul li .baoyou span{
    width: 45%;
    border: 0.02rem solid  #c33;;
    display: inline-block;
    font-size: 0.2rem;
    text-align: center;
    color:  #c33; 
    border-radius: 0.07rem;
   }
 #index .last ul li .price{
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
 }
 #index .last ul li .price span{
  color: #c33;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 600;
 }
  #index .last ul li .price div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    #index .last ul li .price div img{
      width:.2666666667rem;
      height:.2666666667rem;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
  }
    #index .last ul li .price div p{
      font-size: 0.1rem;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
    }
</style>