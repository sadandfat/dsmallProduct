<!--  -->
<template>
<div>
    <div class='rolling_list'>
        <div class="rolling" :style="styleobj1">
            <div class="rolling_past" v-for='item in swipedatas' :key='item.id'>
                <a href=""><img :src="item.imgsrc" alt=""></a>
                <span>{{item.title}}</span>
            </div>
            <!-- <div class="rolling_past">
                <a href=""><img src="@/assets/imgs/shoes1.jpg" alt=""></a>
                <span>BALENCIAGA巴黎世家 TRACK 男士 运动鞋</span>
            </div>
            <div class="rolling_past">
                <a href=""><img src="@/assets/imgs/shoes3.jpg" alt=""></a>
                <span>CONVERSE匡威官方 All Star 夏季新款镂空透气休闲鞋潮鞋 167717C</span>
            </div>
            <div class="rolling_past">
                <a href=""><img src="@/assets/imgs/shoes4.jpg" alt=""></a>
                <span>New Balance NB官方2020新款男女鞋M990BK5休闲鞋990v5系列美产</span>
            </div>
            <div class="rolling_past">
                <a href=""><img src="@/assets/imgs/shoes5.jpg" alt=""></a>
                <span>New Balance 2020新款PROCTCPM板鞋男款女款PACMAN吃豆人联名款</span>
            </div> -->
        </div>
    </div>
    <div class="progress">
        <div class="progress_bar" :style='styleobj'></div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props:{
    swipedatas:Array,
},
components: {},
data() {
//这里存放数据
return {
    // ①.屏幕的可视宽度
    screenW:document.documentElement.clientWidth || document.body.clientWidth,
    // ②。滚动内容的宽度
    scrollContentW:1100,
    // ③。进度条的背景宽度
    bgBarW:100,
    // ④。进度条进程的宽度
    progressW:20,
    // ④。进度条的起点
    startX:0,
    // ⑤。进度条的终点
     endX:0,
    // ⑤。进度条移动的距离
    barMoveW:0,
    // ⑧。内容滚动的距离
    contentMoveW:0,
    // ⑨。设置变量来存储上一次滚动的值
    contentM:0
};
},
methods:{
    // 开始触摸
    touchstartFn(e){
        console.log(e.touches[0].pageX);
        // 获取第一个触摸点
        let touch = e.touches[0]
        this.startX=Number(touch.pageX)
    },
    touchmoveFn(e){
         let touch = e.touches[0]
         let moveW = Number(touch.pageX)-this.startX
         console.log(moveW);
         this.contentM = moveW+this.contentMoveW;
         
        //  进度条移动的距离
        this.barMoveW= -((this.bgBarW/this.scrollContentW)*moveW-this.endX)
        if(this.barMoveW<=0){
            this.barMoveW=0;
        }else if(this.barMoveW>this.bgBarW-this.progressW){
            this.barMoveW=this.bgBarW-this.progressW
        }

        if(this.contentM>=0){
            this.contentM = 0
        }else if(this.contentM<=this.screenW-this.scrollContentW){
            this.contentM = this.screenW-this.scrollContentW
        }
    },
    
    touchendFn(){
        this.endX=this.barMoveW
       this.contentMoveW =  this.contentM
    },
    // 动态设置进度条的长度
    getBarw(){
        this.progressW = this.bgBarW *this.screenW /this.scrollContentW;
    },
    // 绑定事件的方法
    bindEvent(){
        this.$el.addEventListener('touchstart',this.touchstartFn,false)
        this.$el.addEventListener('touchmove',this.touchmoveFn,false)
         this.$el.addEventListener('touchend',this.touchendFn,false)
    },
},
// 计算属性
computed:{
    styleobj(){
        return{
            width:`${this.progressW}px`,
            left:`${this.barMoveW}px`,
        };
    },
    styleobj1(){
        return{
            left:`${this.contentM}px`
        }
    }
},
mounted() {
    // console.log(this);
    this.bindEvent();
    this.getBarw();
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
   .rolling_list{
       width: 100%;
       height: 19rem;
         position: relative;
           left: 0;
           top: 0;
           overflow-x: hidden; //水平方向滚动

       .rolling{
           width: 110rem;
           height: 19rem;
           position: absolute;
           top: 0;
           left: 0;
       }
       .rolling_past{
           width: 11rem;
           height: 19rem;
           float: left;
           display: flex;
           flex-direction:column ;
           text-align: center;
           img{
               width: 10rem;

           }
       }
   }

//    隐藏 overflow-x: scroll带来的滚动条 
   .rolling_list::-webkit-scrollbar{
       display: none;
   }
   .progress{
       width: 10rem;
       height: 0.35rem;
       background-color:#ccc ;
       position: absolute;
       left: 50%;
       margin-left: -50px;
       .progress_bar{
           position: absolute;
           top: 0;
           left: 0;
           width: 2rem;
           height: 100%;
           background-color: #CD6889;
       }
   }
</style>