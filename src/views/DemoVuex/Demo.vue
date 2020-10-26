<!--vuex状态管理-->
<template>
<div class='demo'>
    <h2>vue状态管理</h2>
    <h1 style="color:orange">{{this.$store.state.num}}</h1>
    <div>
        <button @click='changeNum'>修改num的值</button>
    </div>
    <div>
        <button @click='addNum(100)'>修改num的值</button>
    </div>
    <div>
        <button @click='holdNum()'>提交actions修改num的值</button>
    </div>
    <div>
        <button @click='holdNumX(10)'>提交actions修改num的值</button>
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
methods:{
    changeNum(){
        this.$store.commit('changeNum')
    },
    addNum(data){
        this.$store.commit('addNum',data)
    },
    holdNum(){
        this.$store.dispatch('holdNum')
    },
    holdNumX(data){
        this.$store.dispatch('holdNumX',data)
    }

},
mounted() {
 // console.log(this);  //找到this下面的$store方法
 console.log(this.$store.state.num);
  
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