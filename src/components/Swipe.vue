<!--  -->
<template>
<div class='swipe' >
    <mt-swipe :auto="3000" :show-indicators="true" :default-index='0' >
        <mt-swipe-item v-for='swipe in swipeDatas'  :key='swipe.swipe_id'>
            <img :src="swipe.swipe_img" alt="">
        </mt-swipe-item>
        
    </mt-swipe>
</div>
</template>

<script>
// 按需引入
// import {getHomeSwipe} from '@/api/index'
export default {
    
    data(){
        return{
            // swipeDatas:[],
        }
    },
    methods:{
        // handleChange(index){
        //    console.log(index)
        // }
    },
    computed:{
        swipeDatas() {
            // console.log(this.$store.state.swipeDatas);
        return this.$store.state.swipeDatas;
        }
    },
    mounted(){
        // getHomeSwipe().then((res)=>{
        //     if(res.status==200){
        //         this.swipeDatas=res.data
        //     }
        // })
        this.$store.dispatch('actGetSwipeDatas');
    }
}
</script>
<style lang='less'>
   .swipe{
        width: 100%;
        height:12rem;
    img{
        width: 100%;
        height: 12rem;
    }
   }
</style>