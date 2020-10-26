import { getHomeSwipe } from "@/api/index";
import { getGoodsList, getGoodsDetail } from '@/api/findgoods.js'
import { searchApi } from '@/api/search.js'
const actions = {
    holdNum(context) {
        context.commit('changeNum')
    },
    holdNumX(context, data) {
        context.commit('addNum', data)
    },
    // actgetPartdatas(context, data) {
    //     context.commit('getPartdatas', data)
    // }
    getloginDatas(context, data) {
        // let result = await login_user()
        console.log(context);
        context.commit('getloginDatas', data)
    },
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },

    async actGetSwipeDatas(context) {
        let result = await getHomeSwipe() //定义一个变量等待一个异步方法的执行 也就是轮播图的接口
            // console.log(result);
        context.commit('getswipeDatas', result.data) //result.data 就是轮播图的数据
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(result.data);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, params) {
        const result = await getGoodsDetail(params)
        console.log(result);
        context.commit("getGoodsDetails", result.data[0])
    },
    async searchkey(context, params) {
        console.log(params); //{keywords: "手机"}
        const result = await searchApi(params)
        console.log(result.data[0]);
        context.commit("searchkey", result.data) //data: Array(10)
    }


}
export default actions