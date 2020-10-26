<!-- 秒杀-->
<template>
<div class='seckill'>
    <span>{{dd}}天</span>
    <span>{{hh}}时</span>
    <span>{{mm}}分</span>
    <span>{{ss}}秒</span>
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
    dd:'00',
    hh:'00',
    mm:'00',
    ss:'00',
    timer:''
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    timingFn(){
        // 获取当前时间
        var date = new Date();
        // 当前时间的时间戳
        var nowTime = date.getTime();
        // 设置一个截止时间
        var endDate = new Date('2020-12-12 20:00:00')
        var endTime = endDate.getTime();

        // 时间差
        var difference = endTime - nowTime
        if(difference>0){
            this.dd = Math.floor(difference/1000/60/60/24)
            this.hh = Math.floor((difference/1000/60/60)%24)
            this.mm = Math.floor(difference/1000/60%60)
            this.ss = Math.floor(difference/1000%60)
        }
    }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

}, 
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.timer = setInterval(this.timingFn,1000)  
},
destroyed() {
    clearInterval(this.timer)
}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>

</style>