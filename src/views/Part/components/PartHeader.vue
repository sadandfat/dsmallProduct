<!-- 分类头部 -->
<template>
<div class='part_header'>
    <header>
        <a href="javascript:;"  class="iconfont icon-jiantou_zuo" onclick="window.history.back()"></a>
        <form action="">
            <input type="search" placeholder="搜索词" @click='toSearch'>
           
            <span class="iconfont icon-yixianshi-"></span>
        </form>
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
    toSearch(){
        this.$router.replace('/search')  //定义这个方法是点击分类头部输入框进入到搜索
    }
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
    .part_header{
        width: 100%;
        height: 4.4rem;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: #fff;
        border-bottom: 1px solid #efefef;
        header{
            display: flex;
            form{
                width: 80%;
                position: relative;
                input{
                    height: 3rem;
                    width: 100%;
                    border-radius: 1.5rem;
                    margin-top: 0.7rem;
                    text-indent: 15px;
                    border: 1px solid #efefef;
                }
                span{
                    position: absolute;
                    right: 0;
                    width: 3rem;
                    height: 4.4rem;
                    line-height: 4.4rem;
                    text-align: center;
                    color: #ccc;
                }
            }
            a{
               display: inline-block;
               width: 10%;
               height: 4.4rem;
               line-height: 4.4rem;
               text-align: center; 
            }
        }
    }

</style>