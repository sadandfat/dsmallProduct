<!--分类右边部分  -->
<template>
   
   <div class="part_wrap1">
        <Loading v-if="this.$store.state.partRightdatas==''"/>
       <div class='part_right' >
           <div class="part_pic">
                <a href>
                <img :src="ad" alt />
                </a>
            </div>
            <div class="part_cont">
                <div class="line" v-for='item in this.$store.state.partRightdatas' :key='item.cat_id'>
                    <p class="line1"><span >{{item.cat_name}}</span></p>
                    <ul>
                        <li v-for='list in item.child' :key='list.cat_id'>
                            <router-link :to='"/listdetail?cat_id="+list.cat_id'>
                                <img alt="">
                                <p>{{list.cat_name}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
   </div>
  
</template>

<script>
import Axios from 'axios';
import Loading from '../../../components/Loading'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Loading
},
data() {
//这里存放数据
return {
    // partRightdatas:[],
    ad:''  //广告图
};
},
//方法集合
methods: {
    getpartRightdatas(cid){
        Axios.get(`http://localhost:3000/api/v1/category/categorylist/${cid}`).then((res)=>{
             console.log(res.data.data);
            // console.log(res);
            if(res.status==200){
                this.$store.commit('getPartRightdatas',res.data.data)
                  console.log(this.$store.state.partDatas);
     var arr = this.$store.state.partDatas.filter((item)=>{
            return item.category_id==cid
        })
        console.log(arr);
                // this.partRightdatas=res.data.data
            }
        })
    }
},
watch:{
    $route(to){
        console.log(to);
        let cid = to.params.cid
        console.log(cid);
        this.getpartRightdatas(cid)
        //    console.log(this.$store.state.partDatas);
     var arr = this.$store.state.partDatas.filter((item)=>{
            return item.category_id==cid
        })
        console.log(arr);
        this.ad = arr[0].menu_img
    }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    console.log(this.$route);
    // this.getpartRightdatas(this.$route.params.cid)
    this.getpartRightdatas(858)
    console.log(this.$store.state.partDatas);
  
     
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
    .part_right{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        .part_pic{
            width: 100%;
            // height: 9.6rem;
            img{
                width: 90%;
                 height: 9.6rem;
                margin-left: 5%;
            }
        }
        .part_cont{
            // 厨房电器文字的线条
           .line{
                .line1{
                width: 10rem;
                height: 4.4rem;
                line-height: 0.4rem;
                margin-left: 8rem;
                text-align: center;
                color: #777;
                position: relative;
                padding: 0 10px;
                background-color: #fff;
                z-index: 2;
            
                  span{
                     
                      text-align: center;
                    position: absolute;
                    z-index: 1;
                    left: 0;
                    right: 0;
                    top: 9px;
                    height: 1px;
                    border-bottom: 1px solid #e5e5e5;
                  }
            }
           }
            
          
            ul{
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                li {
                    width: 33%;
                    height: 8.2rem;
                    margin-bottom: 1rem;
                    img {
                    width: 4.2rem;
                    height: 5.2rem;
                    }
                    p{
                    color: #666;
                    height: 3rem;
                    line-height: 3rem;
                    }
                }
            }
        }
    }

</style>