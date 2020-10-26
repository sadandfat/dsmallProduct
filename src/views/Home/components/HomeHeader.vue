<!--首页头部组件-->
<template>
<div class='home_header'>
    <header class="header">
        <form >
            <input type="text" placeholder="请输入关键字">
            <span class="iconfont icon-sousuo4"></span>
        </form>
        <a href>登录</a>
    </header>
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
<style  lang='less' scoped>
// scoped 强制样式只在当前组件中有效
.home_header{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 4.4rem;
      background: #CD6889;
    .header{
        display: flex;
        form{
            width: 85%;
            position: relative;
            margin-left: 0.5rem;
            input{
                width: 100%;
                height: 3rem;
                border: 1px solid #efefef;
                box-sizing: border-box;
                border-radius: 1.5rem;
                margin-top: 0.7rem;
                text-indent: 1.5rem; //首行缩进
            }
        }
        span{
            position: absolute;
            right: 0.5rem;
            width: 4.4rem;
            height: 4.4rem;
            text-align: center;
            line-height: 4.4rem;
            top: 0;
            color: #777;
        }
    }
    a{
        width: 20%;
        display: inline-block;
        font-size: 1.3rem;
        color: white;
        line-height: 4.4rem;
        text-align: center;
    }
}
</style>