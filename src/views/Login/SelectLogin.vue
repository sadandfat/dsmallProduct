<!-- 选择登录方式 -->
<template>
<div class='select_login'>
    <div class="logo">
        <img src="@/assets/imgs/touxiang.jpeg" alt="">
    </div>
    <h2>登录方式</h2>
    <router-link to="/login" tag="button">手机登录</router-link>
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
    .select_login{
        width: 100%;
        height: 100%;
        background: white;
        z-index: 99;
        position: fixed;
        top: 0;
        bottom: 0;
        display: flex;  //水平垂直居中
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .logo{
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            border: 5px solid #efefef;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        h2{
            font-size: 1.4rem;
            height: 4rem;
            line-height: 4rem;
        }
        button{
            width: 15rem;
            height: 4rem;
            line-height: 4rem;
            font-size: 1.4rem;
            color: white;
            // background-color: #AFEEEE;
            background-color: #FFC125;
        }
    }
</style>