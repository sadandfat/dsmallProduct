<!--  -->
<template>
<div class='home'>
     
      <HomeHeader/>
      <div class="nav_list">
        <ly-tab v-model="selectedId" :items="items" :options="options" @change='changefn' ></ly-tab>
        <!-- <span class="iconfont icon-banyuan-pingjiao"></span> -->
        <div class="category-link">
        <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </div>
      </div>
      
       <div  style="height:8.8rem"></div>
       <router-view></router-view>
    <Footer/>
   
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import HomeHeader from "./components/HomeHeader";

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Footer,
    HomeHeader,
   
},
data() {
//这里存放数据
return {
   selectedId: 0,
      items: [
        {label: '首页'},
        {label: '家用电器'},
        {label: '男装女装'},
        {label: '鞋靴箱包'},
        {label: '手机数码'},
        {label: '电脑办公'},
        {label: '家具家访'},
        {label: '个人化妆'},
        
      ],
      options: {
        activeColor: 'white'
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      childrenRouter:[
      '/home/index',
      '/home/electrical',
      '/home/clothes',
      '/home/shoes',
      '/home/phone',
      '/home/computer',
      '/home/furniture',
      '/home/makeup', 
      ],
};

},

//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  changefn(item,index){
    console.log(index);
    console.log(item);
    this.$router.push(this.childrenRouter[index])
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
    .home{
      .nav_list{
        display: flex;
        position: fixed;
        top: 4.4rem;
        left: 0;
        z-index: 99;
        background-color: #CD6889;
        
        .ly-tab{
          width: 82%;
        }
        .ly-tabbar{
         
          background-color: #CD6889;
          border: 0;
          box-shadow: -6px 0 4px -4px rgba(0,0,0,.4);
          .ly-tab-list{
            padding: 0;
            height: 4.4rem;
            border-radius: 0px 0px 10px 10px;
            // .ly-tab-active-bar{
            //   position: relative;
            //   width: 0px;
            //   height: 0px;
            //   background-color:transparent;
            // }
          }
          a{
            color: white;
        
          }
        }
        .category-link{

          width: 18%;
          height: 4.4rem;
          line-height: 4.6rem;
          text-align: center;
           color: white;
          
           span{
             font-size: 1.4rem;
              margin-left: 0.5rem;
           }
           i{
             font-size: 1.4rem;
             padding-left: 5px;
              box-shadow: -6px 0 5px -3px rgba(0,0,0,.4);
           }
        }
      }
    }
</style>