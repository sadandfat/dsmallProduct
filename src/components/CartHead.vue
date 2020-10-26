<!--  -->
<template>
<div class='carthead'>
    <!-- <div> -->
        <i class="back iconfont icon-changyongicon-" v-if="left" onclick='window.history.back()'></i>
    <!-- </div> -->
    
    <div class="tit">{{title}}</div>
     <div class="right_icon" v-if="right">
         <span class="iconfont icon-kefu2"></span>
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
// props:['title'], //或者还有另一种写法
props:{
    title:String,
    left:Boolean,
    right:Boolean
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
    .carthead{
        width: 100%;
        height: 4.4rem;
        border: 1px solid #efefef;
        line-height: 4.4rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        font-size: 1.4rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        .back{
            width: 10%;
            text-align: center;
            position: relative;
            z-index: 10;
        }
        .tit{
            width: 100%;
            position: absolute;
            left: 0;
             z-index: 9;
        }
        .right_icon{
            width: 10%;
            text-align: center;
           
        }
    }
</style>