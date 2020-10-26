<!-- 分类左边菜单 -->
<template>
<div class="part_wrap">
    <div class='part_left'>
        <ul >
            <!-- <li :class="{active:is_active==index}" v-for='(item,index) in partDatas' :key='item.cat_id' @click='changeColor(index)'>
                {{item.cat_name}}
            </li> -->
            <!-- <li  v-for='item in partDatas' :key='item.cat_id'> -->
            <li  v-for='item in this.$store.state.partDatas' :key='item.category_id'>
                <router-link :to="'/part/'+item.category_id" >{{item.menu_name}}</router-link>

            </li>
        </ul>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    // is_active:0,
    // partDatas: [],
};
},
methods: {
    getPartdatas(){
        Axios.get('http://localhost:3000/api/v1/category').then((res)=>{
            console.log(res.data.data);
            if(res.status==200){
                // this.partDatas=res.data.data
                this.$store.commit('getPartdatas',res.data.data)
                console.log(this.$store);
            }
        });
    },
   

    // changeColor(index){
    //     this.is_active=index;
    // }
},
mounted() {
    this.getPartdatas()
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
    .part_wrap{
        height: 100%;
        .part_left{
            height: 100%;
            width: 8.4rem;
            // background: #efefef;
            overflow-y: scroll;
            ul{
                li{
                    height: 3.8rem;
                    line-height: 3.8rem;
                    font-size: 1.4rem;
                    text-align: center;
                }
                .router-link-active{
                    display: block;
                    background: #fff;
                    color: #CD6889;
                    border-left: .25rem solid #CD6889;
                        // border-left: .25rem solid #f23030;
                }
            }
        }
    }

</style>