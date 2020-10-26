<!--  -->
<template>
<div class='home_index'>
    <p  class="kong"  ></p>
   <div class="swipe_wrap">

        <Swipe />
       
    </div>
     <QuickNav/>
     <SwipeNews/>
     <Seckill/>
     <Rolling :swipedatas='swipedatas'/>
     <div style="height:2rem"></div>
     <Rolling :swipedatas='swipedatas'/> 
     <div style="height:7rem"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入轮播图组价
import Swipe from "@/components/Swipe.vue"
import QuickNav from "../components/QuickNav"
import SwipeNews from '../components/SwipeNews'
import Rolling from '../components/Rolling.vue'
import Seckill from '../components/Seckill'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Swipe,
    QuickNav,
    SwipeNews,
    Rolling,
    Seckill //秒杀组件
},
data() {
//这里存放数据
return {
    // Index.vue这个组件是Rolling.vue的父组件
    swipedatas:[{
        id:1,
        imgsrc:require('@/assets/imgs/shoes.jpg'),
        title:'CONVERSE匡威官方 Chuck 70 经典签名印花夏季帆布小白鞋 167696C'
    },{
        id:2,
        imgsrc:require('@/assets/imgs/shoes1.jpg'),
        title:'BALENCIAGA巴黎世家 TRACK 男士 运动鞋'
    },{
        id:3,
        imgsrc:require('@/assets/imgs/shoes3.jpg'),
        title:'CONVERSE匡威官方 All Star 夏季新款镂空透气休闲鞋潮鞋 167717C'
    },{
        id:4,
        imgsrc:require('@/assets/imgs/shoes4.jpg'),
        title:'New Balance NB官方2020新款男女鞋M990BK5休闲鞋990v5系列美产'
    },{
        id:5,
        imgsrc:require('@/assets/imgs/shoes5.jpg'),
        title:'Jordan 官方JORDAN AEROSPACE 720 男子运动鞋休闲气垫BV5502'
    },{
        id:6,
        imgsrc:require('@/assets/imgs/shoes6.jpg'),
        title:'CONVERSE匡威官方 Chuck 70 经典签名印花夏季帆布小白鞋 167696C'
    },{
        id:7,
        imgsrc:require('@/assets/imgs/shoes7.jpg'),
        title:'CONVERSE匡威官方 Chuck 70 经典签名印花夏季帆布小白鞋 167696C'
    },{
        id:8,
        imgsrc:require('@/assets/imgs/shoes8.jpg'),
        title:'Nike耐克官方NIKE INITIATOR男子跑步鞋新品夏季老爹鞋透气394055'
    },{
        id:9,
        imgsrc:require('@/assets/imgs/shoes9.jpg'),
        title:'CONVERSE匡威官方 Chuck 70 经典签名印花夏季帆布小白鞋 167696C'
    },{
        id:10,
        imgsrc:require('@/assets/imgs/shoes10.jpg'),
        title:'CONVERSE匡威官方 Chuck 70 经典签名印花夏季帆布小白鞋 167696C'
    }]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
   .home_index{
       .swipe_wrap{
           margin: 0px 10px 0px 10px;
           
       }
       .kong{
            height:45px;
            background:#CD6889;
            border-bottom-left-radius: 20px; 
            border-bottom-right-radius: 20px;
            //   position: absolute;
            margin-bottom: -45px;
       }
        div{
            border-radius: 10px;
        }
   }
</style>