<!--加载loading效果-->
<template>
<div class='loading' >

    <div id="ddr">
        <div class="ddr ddr1"></div>
        <div class="ddr ddr2"></div>
        <div class="ddr ddr3"></div>
        <div class="ddr ddr4"></div>
        <div class="ddr ddr5"></div>
   </div>
    <div id="loading4">
        <div id="loader4" class="heart"></div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

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
    .loading{
        #ddr{
            margin: 0 auto;
            width: 70px;
            height: 120px;
        }
        .ddr{
            width: 10px;
            height: 120px;
            float: left;
            margin: 2px;
            background-color: #B645CE;
            animation: loading 1s infinite ease-in-out;/*animation：动画名称 持续时间 动画速度曲线 延迟 执行多少次 是否正反方向轮流播放*/
        }
        .ddr2{
            animation-delay: -0.9s;/*定义开始执行的地方，负号表示直接从第900ms开始执行*/
        }
        .ddr3{
            animation-delay: -0.8s;
        }
        .ddr4{
            animation-delay: -0.7s;
        }
        .ddr5{
            animation-delay: -0.6s;
        }
        @keyframes loading {
            0%,40%,100%{ /*定义每帧的动作*/
                -webkit-transform: scaleY(0.5);
            }
            20%{
                -webkit-transform: scaleY(1);
            }
        }




        // loading2
        #loading4{
            width: 100%;
            height: 100px;
        }
        #loader4{
            position: relative;
            margin-left: calc(50% - 25px);
            width: 50px;
            height: 50px;
            animation: loader-4 1s ease-in-out alternate infinite;
        }
        .heart:before{
            position: absolute;
            left: 11px;
            content: "";
            width: 50px;
            height: 80px;
            transform: rotate(45deg);
            background-color:#DB7093;
            border-radius: 50px 50px 0 0;
        }
        .heart:after{
            position: absolute;
            right: 11px;
            content: "";
            width: 50px;
            height: 80px;
            background-color:#DB7093;
            transform: rotate(-45deg);
            border-radius: 50px 50px 0 0;
        }
        @keyframes loader-4 {
            0%{
                transform: scale(0.2);
                opacity: 0.5;
            }
            100%{
                transform: scale(1);
                opacity: 1;
            }
        }
    }
    


    // 第三种加载动画的样式
    // html模块
//     <div id="loader3">
//        <div id="loader3-inner"></div>
//     </div>

// less模块：
// #loader3{
//     box-sizing: border-box;
//     position: relative;
//     margin-left: 48%;
//     transform: rotate(180deg);
//     width: 50px;
//     height: 50px;
//     border: 10px groove rgb(170, 18, 201);
//     border-radius: 50%;
//     animation: loader-3 1s ease-out alternate infinite;/* alternate表示则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）反向播放 */
// }
// #loader3-inner{
//     box-sizing: border-box;
//     width: 100%;
//     height: 100%;
//     border: 0 inset rgb(170, 18, 201);
//     border-radius: 50%;
//     animation: border-zoom 1s ease-out alternate infinite;
// }
// @keyframes loader-3 {
//     0%{
//         transform: rotate(0deg);
//     }
//     100%{
//         transform: rotate(-360deg);
//     }
// }
// @keyframes border-zoom {
//     0%{
//         border-width: 0px;
//     }
//     100%{
//         border-width: 10px;
//     }
// }
</style>


