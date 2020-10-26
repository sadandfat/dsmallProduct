import Vue from 'Vue';
import Vuex from 'vuex';
Vue.use(Vuex)

// 定义数据
// state是vuex中存储数据的

// mutations里面定义的方法是针对修改state的


// actions 定义的方法是提交mutations中定义的方法

// 导入模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
// 实例化一个vuex仓库
const store = new Vuex.Store({
    state, //把数据放在仓库里
    mutations,
    actions
})

// 把这个仓库暴露出去 暴露数据
export default store