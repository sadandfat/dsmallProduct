<!-- 商品列表 父组件-->
<template>
<div class='list_detail'>
   <PartHeader/>
   <FindGoods :lists='goodsLists'/>
 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import PartHeader from './PartHeader.vue'
import  FindGoods from '@/components/FindGoods.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    PartHeader,
  FindGoods
},
data() {
//这里存放数据
return {
  lists:[]
};
},
//监听属性 类似于data概念
computed: {  //渲染到页面就要用到计算属性
    goodsLists(){
        return this.$store.state.goodlists
    }
},
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
mounted() {  //提交actions的方法
     this.$store.dispatch("getGoodsList", { cat_id: this.$route.query.cat_id });
     console.log(this.$store.state.goodlists);
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>

</style>