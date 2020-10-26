<!--公共的底部--标签栏-->
<template>
<div class='footer'>
   <ul>
       <router-link to="/home" tag="li">
       <div class="nav_img">
          <span class="iconfont icon-shouye5"  v-if="this.$route.path.includes('/home')"></span>
          <span class="iconfont icon-shouye2" v-else></span>
       </div>
       <span>首页</span>
       </router-link>
        <router-link to="/part/858" tag="li">
        <div class="nav_img">
           
                                    <!-- 判断part组件路由跳转路径是否还在当前的总路由里,如果name为 part则变换颜色 不明白把下面注释的watch解开 -->
          <span class="iconfont icon-tubiao-  router-link-active"  v-if='this.$route.name=="part"' ></span>
          <span class="iconfont icon-fenlei4" v-else></span>
       </div>
        <!-- <span :class="{'router-link-active':this.$route.path.includes('/part')}">分类</span> -->
        <span :class="{'router-link-active':this.$route.name=='part'}">分类</span>
        </router-link>
        <router-link to="/search" tag="li" >
        <div class="nav_img">
          <span class="iconfont icon-sousuo2"  v-if='active=="search"'></span>
          <span class="iconfont icon-sousuo3" v-else></span>
       </div>
        <span>搜索</span>
        </router-link>
       <router-link to="/cart" tag="li">
       <div class="nav_img">
          <span class="iconfont icon-ziyuan"  v-if='active=="cart"'></span>
          <span class="iconfont icon-gouwuche01" v-else></span>
       </div>
       <span>购物车</span>
       </router-link>
        <router-link to="/mine" tag="li">
        <div class="nav_img">
          <span class="iconfont icon-wode" v-if='active=="mine"'></span>
          <span class="iconfont icon-biaoqiankuozhan_wode-210" v-else></span>
       </div>
        <span>我的</span>
        </router-link>
   </ul>
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
   active:'home', 
};
},
mounted(){
   // console.log(this);
   this.active=this.$route.path.slice(1)
  
},
// watch:{
//    $route(){
//        console.log(this.$route);
//    }
// }
};

</script>

<style lang='less'>
   .footer{
      z-index: 99;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      border-top: 1px solid #efefef;
      ul{
         display: flex;  //给ul加弹性盒子布局让它在一行显示
         height: 4.9rem; //底部标签栏是98px 除以2之后是49px 转换为rem是4.9rem
         // line-height: 4.9rem;
         justify-content: center;
         align-items: center;
         li{
            width: 20%;
            text-align: center;
            .nav_img{
              span{
                  font-size: 2.2rem;
              }
            }
         }
      }
   }
 
   // 点击哪个让其选中
   .router-link-active{
      color: #CD96CD;
   }
</style>