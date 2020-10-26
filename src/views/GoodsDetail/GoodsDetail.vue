<!-- 商品详情页 -->
<template>
<div class='detail_container'>
    <CartHead title="商品详情" :left='left' :right='right'/>
    <!-- <h3>{{goodsdetail.goods_name}}</h3> -->
  <!-- market_price 市价 -->
  <div class="detail_swiper">
  
    <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
         
      </div>
      
    </div>
    
    <div class="swiper-pagination"></div>
  </div> -->

     <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
          <img :src="goodsdetail.goods_img" alt="">
      </div>
      <div class="swiper-slide">
          <img :src="goodsdetail.goods_img" alt="">
      </div>
      <div class="swiper-slide">
          <img :src="goodsdetail.goods_img" alt="">
      </div>
    
    </div>
    
    <div class="swiper-pagination"></div>
    
    
  </div> -->
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
           <img :src="goodsdetail.goods_img" alt="">
      </div>
      <div class="swiper-slide">
           <img :src="goodsdetail.goods_img" alt="">
      </div>
      <div class="swiper-slide">
           <img :src="goodsdetail.goods_img" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>

</div> 
     
  <!-- </div> -->

    <div class="detail_con">
        <div class="detail_price">{{goodsdetail.shop_price}}</div>
        <div class="title">
            <!-- BURBERRY巴宝莉女款单肩包  女士圆饼包单肩斜跨手提包条纹图案圆形单肩包 80272931 约17*7*17cm -->
            {{goodsdetail.goods_name}}
        </div>
        <div v-html="goodsdetail.goods_desc">
            <!-- 商品描述 -->
            <!-- {{goodsdetail.goods_desc}}  -->
        </div>
    </div>

    <!-- 详情页底部 -->
    <div class="detail_foo">
        <div class="service">
            <span class="iconfont icon-kefu"></span>
        </div>
        <div class="collect">
             <span class="iconfont icon-shoucang3"></span>
        </div>
        <div class="shoppingcart">
             <router-link to="/cart">
                <span class="iconfont icon-gouwuche"> </span>
                <i>{{isAll}}</i>
                <!-- 商品加1的那个动画 -->      <!--v-show='flag 一开始是隐藏--> 
                 <div :class="{alwaysAdd:flag }" v-show='flag'>+1</div>
                <div>购物车</div>
             </router-link>
        </div>
        <div class="addcart" @click="addCartFn(goodsdetail)">加入购物车</div>
        <div class="buy">立即购买</div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from 'swiper'  //下载swiper模块 cnpm i swiper@4 --save
import 'swiper/dist/css/swiper.css'
import CartHead from '@/components/CartHead.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    CartHead,
},
data() {
//这里存放数据
return {
    flag:false,
    timer:'',
    left:true,
    right:true,
};
},
//监听属性 类似于data概念
computed: {   //把state里面的数据重新渲染到页面中
    goodsdetail(){
        return this.$store.state.goodsDetails  //goodsDetails就是原本在state定义的空数据
          
    },
    // 购物车有多少件商品
    isAll(){
        var isAll = 0
        this.$store.state.carts.map((item)=>{
            // if(item.isSelect){
                isAll+=item.value
            // }
        })
        return isAll
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    addCartFn(data){
        console.log(data);
        //console.log(this.$store.state.carts);  //一开始没有商品这里打印一个空数组

        this.flag=true 
        //动画执行1秒消失
        this.timer = setTimeout(()=>{
            this.flag = false
        },1000)
        var isCart = this.$store.state.carts.find((item)=>{
            // data.goods_id 代表用户下次点击的内容
            if(item.goods_id == data.goods_id){
                item.value++
            }
            return item.goods_id == data.goods_id
        })
        if(!isCart){
            var cartData={
                goods_id:data.goods_id,
                goods_name:data.goods_name,
                shop_price:data.shop_price,
                goods_img:data.goods_img,
                value:1,
                isSelect:true  //自定义一个变量用于判断购物车单品的单选框是否被选中

           }
        }
        this.$store.commit('setcartDatas',cartData)
    }
    // 购物车逻辑
    // 判断购物车是否有该商品
    // 有的话将当前商品的数字++
    // 没有的话新增加商品就好
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.$store.dispatch('getGoodsDetails',{goods_id:this.$route.query.goods_id})
    // console.log(this.$store.state.goodsDetails);
    // new Swiper('.swiper-container',{
    //     autoplay:true,
    //     loop:true,
        
    //     pagination: {
    //                     el: '.swiper-pagination',
    //                     dynamicBullets: true,
	// 				},
    // })
    new Swiper('.swiper-container', {
        autoplay:true,
        loop:true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>

    .detail_swiper{
        width: 100%;
        // height: 37.5rem;       
        img{
            width: 100%;
            // height: 37.5rem;
        }          
    }
    .detail_con{
            width: 100%;
            // box-sizing:border-box;
            border:10px solid white;
            width: calc(100% - 20px);

            img{
                width: 90%;
                margin-left: 5%;
            }
        .detail_price{
            font-size: 1.8rem;
            color: #CD6889;
            &::before{
                content: '¥';
                font-size: 1.2rem;
             }   
        }
        .title{
            margin: 1rem 0;
            font-size: 1.4rem;
            line-height: 2rem;
            color: #777;
        }
    }
    .detail_foo{
        width: 100%;
        height: 4.9rem;
        border-top: 1px solid #efefef;
        position: fixed;
        bottom: 0;
        left:0;
        z-index: 100;
        display: flex;
        background-color: #fff;
        >div{
            flex:1;
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            color: #777;
            span{
                font-size: 2rem;
            }
        }
        .collect{
            border-left: 1px solid #efefef;
             border-right: 1px solid #efefef;
        }
        .addcart{
            flex: 2;
            background-color: #CD6889;
            color: white;
            font-size: 1.4rem;
        }
        .buy{
             flex: 2;
             background-color: #FF976A;
             color: white;
             font-size: 1.4rem;
        }
        .shoppingcart{
            position: relative;
            i{
                position: absolute;
                right: 1.3rem;
                top: 0;
                min-width: 1.6rem;
                height: 1.4em;
                line-height: 1.4rem;
                text-align: center;
                font-style: normal;
                border-radius:50%;
                background-color: #CD6889;
                color: white;
                padding: 0.2rem;
            }
            .alwaysAdd{
                position: absolute;
                font-size: 1.8rem;
                font-weight: 600;
                top: -2rem;
                text-align: center;
                width: 100%;
                color: #CD6889;
                opacity: 0;  //一开始动画是隐藏的
                animation: moveup 2s linear;
            }
            @keyframes moveup {
                0%{
                    top: 0.5rem;
                    opacity: 0;  //开始是看不到的
                }
                50%{
                    top: -3rem;
                    opacity: 1;  //出现
                }
                100%{
                    top: -3rem;
                    opacity: 0; //再消失
                }
            }
        }
    }   
</style>