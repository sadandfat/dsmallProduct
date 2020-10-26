// main.js是所有js的一个入口 路由和仓库都可以放在这里
import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from './router/index.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 放在main.js下就相当于把它配置成全局
import store from '@/vuex/store.js'
// 一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件
// npm i ly-tab -S
import LyTab from 'ly-tab'

Vue.use(LyTab)
Vue.use(MintUI)
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')