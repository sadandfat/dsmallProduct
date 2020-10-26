<!--  -->
<template>
<div class='cart'>
    <CartHead title="购物车123" :left='left' :right='right'/>
    <div class="cart_con" v-if='!noshopgoods'>
        <ul>
            <li v-for="(cart,index) in cartLists" :key="cart.goods_id">
                <!-- 选择框 -->
                <div class="select" @click="changeSelect(cart,index)">
                    <!-- <span class="iconfont icon-danxuan11 " style="color:#CD6889"></span>
                    <span class="iconfont icon-danxuanweidianji"></span> -->
                    <!-- 新添加的商品为选中状态 -->
                    <span class="iconfont  icon-danxuan-dianji" style="color:#CD6889" v-if="cart.isSelect"></span>
                    <span class="iconfont icon-danxuan-weidianji" v-else></span>
                    

                </div>
                <!-- 图片 -->
                <div class="cart_img">
                    <img :src="cart.goods_img" alt="">
                </div>
                <!-- 右边内容 -->
                <div class="cart_info">
                    <div class="cart_tit">{{cart.goods_name}}</div>
                    <div class="cart_part">
                        <div class="cart_price">{{cart.shop_price}}</div>
                        <div class="cart_num">
                            <a href="javascript:;" class="reduce" @click="reduceCart(index)">-</a>
                            <input type="text" value="1" v-model="cart.value">
                            <a href="javascript:;" class="plus" @click="plusCart(index)">+</a>
                             <button class="del" @click="delGoods(index)">
                                 <span class="iconfont icon-chacha"></span>
                             </button>
                        </div>
                       
                    </div>
                </div>
            </li>
            <!-- 第二个商铺 -->
            
        </ul>
    </div>
     <div class="noshopgoods" v-else>
         <span class="iconfont icon-gouwuche01"></span>
         <p>购物车空空
             <router-link to="/home">去逛逛</router-link>
         </p>
     </div>
    <!-- 购物车底部全选 总计 结算那块 -->
    <div class="cart_foo">
        <div class="checkall" @click="selectAllFn">
            <span class="iconfont  icon-danxuan-dianji" style="color:#CD6889" v-if="selectAll">全选</span>
            <span class="iconfont icon-danxuan-weidianji" v-else>全选</span>
        </div>
        <div class="priceall">
            合计:<span style="color:#CD6889" font-size:1.6rem>{{total}}</span>
        </div>
        <div class="gobuy">
            去结算({{inAll}})
        </div>
    </div>
    <Footer/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from '@/components/Footer.vue'
import CartHead from '@/components/CartHead.vue'
import { mapMutations } from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
     Footer,
     CartHead
},
data() {
//这里存放数据
return {
    left:true,
    right:true,
    
};
},
//利用计算属性拿本地存储的数据
computed: {
    cartLists(){
        return this.$store.state.carts
    },
    selectAll(){
         return this.$store.state.checkall
    },
    //共计
    total(){
        let totalPrice = 0
        this.$store.state.carts.map((item)=>{
            if(item.isSelect){
                totalPrice+=item.value*item.shop_price
            }
        })
        return totalPrice
    },
    // 结算
    inAll(){
        let inAll = 0;
        this.$store.state.carts.map((item)=>{
            if(item.isSelect){
                inAll+=item.value
            }
        })
        return inAll
    },
    noshopgoods(){
        return this.$store.state.carts.length ==0
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   selectAllFn(){
    //  
        this.$store.commit('selectAllFn')
        // this.selectAll=this.$store.state.checkall
        console.log(111);
   },
    ...mapMutations(['plusCart','reduceCart','delGoods']),
//    plusCart(index){
//        console.log(index);
//        this.$store.commit('plusCart',index)
//    },
//    reduceCart(index){
//        this.$store.commit('reduceCart',index)
//    },
//    delGoods(index){
//        this.$store.commit('delGoods',index)
//    },
   changeSelect(cart,index){
       console.log(cart);
       cart.isSelect = !cart.isSelect
       this.$store.commit('changeSelect',{cart,index})
       
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
    .cart_con{
        margin: 4.4rem 0 4.9rem 0;
        width: 100%;
        
        li{
            display: flex;
            height: 10rem;
            border-bottom: 1px solid #efefef;
            >div{
                display: flex;
                flex-direction: column;
                justify-content: center;   
            }
            .select{
                width: 10%;
              text-align: center;
               
            }
            .cart_img{
               
                width: 20%;
               
                img{
                    width: 100%;

                }   
            }
            .cart_info{
                width: 65%;
                margin-left: 3%;
                margin-right: 2%;
                .cart_tit{
                    font-size: 1.2rem;
                    height: 4rem;
                    line-height: 2rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }  
                .cart_part{
                   
                    .cart_price{
                        float: left;
                        font-size: 1.6rem;
                        &::before{
                            content: '¥';
                        }
                    }
                    .cart_num{
                        float: right;
                        a{
                            width: 2rem;
                            height: 2rem;
                            background-color: #ccc;
                            float: left;
                            line-height: 2rem;
                            text-align: center;
                            font-size: 1.4rem;
                        }
                        input{
                           width: 3rem;
                            height: 2rem;
                            float: left;
                            border: 1px solid #efefef;
                            box-sizing: border-box;
                            text-align: center;
                        }
                        .del{
                            margin-left: 2rem;
                            background: transparent;
                        }
                    }
                }
            }
        }
    }
    .noshopgoods{
        text-align: center;
       
        margin-top: 5rem;
        >span{
             font-size: 10rem;
             color: #CD6889;
        }
        a{
            width: 7rem;
            height: 2rem;
            line-height: 2rem;
            color: white;
            text-align: center;
            background-color: #CD6889;
            display: inline-block;
        }
    }
    .cart_foo{
        position: fixed;
        height: 4.4rem;
        bottom: 4.9rem;
        width: 100%;
        border-top: 1px solid #efefef;
        box-sizing: border-box;
        border-left: 10px solid white;
        border-right: 10px solid white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
        .gobuy{
            width: 30%;
            text-align: center;
            font-size: 1.4rem;
            background-color: #CD6889;
            color: white;
            height: 4.4rem;
            line-height: 4.4rem;

        }
    }
</style>