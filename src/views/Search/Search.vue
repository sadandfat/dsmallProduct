<!--  -->
<template>
<div class='search'>
     <div class='part_header'>
    <header>
        <a href="javascript:;"  class="iconfont icon-jiantou_zuo" onclick="window.history.back()"></a>
        <form action="">
            <input type="search" placeholder="搜索商品" v-model="keywords" @keyup.13="searchkey">
           
            <span class="iconfont icon-yixianshi-"></span>
        </form>
        <a href="javascript:;" style="font-size:1.4rem" @click="searchkey">搜索</a>
    </header>
</div>
   <!-- 最近搜索 -->
   <div class="search_con">
        <div class="search_wrap_tit">
             <div class="search_title">
                  最近搜索
             </div>
             <div class="icon">
                  <span class="iconfont icon-chacha1" @click="delAll"></span>
             </div>
        </div>
        <ul class="search_list" >
             <li v-for="(item,index) in getCon " :key="index"  @click='quickSearch' ref="searchItem">{{item}}</li>
             <!-- <li>电动牙刷</li>
             <li>游戏机</li>
             <li>防晒</li>
             <li>面膜</li> -->
        </ul>
   </div>
     <!-- 热搜 -->
      <div class="search_con " style="margin-top:1rem">
        <div class="search_wrap_tit">
             <div class="search_title">
                  热搜
             </div>
             
        </div>
        <ul class="search_list">
             <li>手机</li>
             <li>电动牙刷</li>
             <li>游戏机</li>
             <li>防晒</li>
             <li>面膜</li>
        </ul>
   </div>
     <Footer/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from '@/components/Footer.vue'
import { Toast } from 'mint-ui';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
     
     Footer
},
data() {
//这里存放数据
return {
     keywords:[]
};
},
methods:{
     searchkey(){
          console.log(this.keywords);
          // 把用户输入的内容放在状态管理仓库中提交
        if(this.keywords!=''){
             this.$store.commit('getsearchkey',this.keywords)
           this.$store.dispatch('searchkey',{keywords:this.keywords})
           this.$router.push('./searchlist')
        
        }else{
             Toast({
               message: ' 请输入搜索内容 ',
               position: 'middle',
               duration: 1000
               });
          }
     },
     quickSearch(){
          // console.log(  this.$refs.searchItem[0].innerHTML);
          // this.$store.dispatch('searchkey',{keywords:this.keywords})
           this.$router.push('./searchlist')
          this.$store.dispatch('searchkey',{keywords:this.$refs.searchItem[0].innerHTML})
     },
     delAll(){
          // console.log(111);
          localStorage.removeItem('keywordsval')
          location.reload()
     }
},
computed:{
     getCon(){
     //    return this.$store.state.keywords
          let arr = JSON.parse(localStorage.getItem("keywordsval"))
          if(!arr){   //如果一开始本地存储没有数据
               arr=[]    //就搞一个空数组
               arr.push('暂无')   //在数组末尾添加暂无两个字
          }    
          return arr   //在计算属性里必须return
     }

}
}
</script>
<style lang='less'>
     // .search_header{
     //      margin-top: 5rem;
     // }
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
                width: 70%;
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
               display: block;
               width: 15%;
               height: 4.4rem;
               line-height: 4.4rem;
               text-align: center; 
            }
        }
    }
    .search_con{
         margin-top: 5rem;
          .search_wrap_tit{
               display: flex;
               height: 4.4rem;
               line-height: 4.4rem;
               margin: 0 10px;
               justify-content: space-between;
               .search_title{
                    font-size: 1.4rem;
               }

          }
          .search_list{
               display: flex;
               justify-content: flex-start;
               flex-wrap: wrap;
               li{
                    width: 20%;
                    height: 3rem;
                    line-height: 3rem;
                    text-align: center;
                    border: 1px solid #efefef;
                    box-sizing: border-box;
                    margin: 1% 2%;
                    font-size: 1.4rem;
                    color: #777;
               }
          }

    }
    
</style>