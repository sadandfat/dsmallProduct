import Vue from 'vue';
import VueRouter from 'vue-router'
// 使用
Vue.use(VueRouter)


// 创建组件 --（步骤为新建一个vue 文件--导入文件（通常组件名称都为大写））
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'
import Part from '../views/Part/Part.vue'
import Cart from '../views/Cart/Cart.vue'
import Mine from '../views/Mine/Mine.vue'

// 配置首页的子组件
import Index from '../views/Home/children/Index.vue'
import Electrical from '../views/Home/children/Electrical.vue'
import Clothes from '../views/Home/children/Clothes.vue'
import Shoes from '../views/Home/children/Shoes.vue'
import Phone from '../views/Home/children/Phone.vue'
import Computer from '../views/Home/children/Computer.vue'
import Furniture from '../views/Home/children/Furniture.vue'
import Makeup from '../views/Home/children/Makeup.vue'
import DemoVuex from '../views/DemoVuex/Demo.vue'
import Login from '../views/Login/Login'
import ListDetail from '../views/Part/components/ListDetail.vue'
import GoodsDetail from '../views/GoodsDetail/GoodsDetail'
import SearchList from '../views/Search/SearchList.vue'
// 配置路由

const routes = [{
    path: '/home',
    name: 'home',
    component: Home, //组件名称通常大写
    children: [{
        path: 'index',
        component: Index
    }, {
        path: 'electrical',
        component: Electrical
    }, {
        path: 'clothes',
        component: Clothes
    }, {
        path: 'shoes',
        component: Shoes
    }, {
        path: 'phone',
        component: Phone
    }, {
        path: 'computer',
        component: Computer
    }, {
        path: 'furniture',
        component: Furniture
    }, {
        path: 'makeup',
        component: Makeup
    }, {
        path: '/home',
        redirect: '/home/index'
    }]
}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/part/:cid',
    name: 'part',
    component: Part
}, {
    path: '/cart',
    name: 'cart',
    component: Cart
}, {
    path: '/mine',
    name: 'mine',
    component: Mine
}, {
    path: '/demovuex',
    name: 'demovuex',
    component: DemoVuex
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/listdetail',
    name: 'listdetail',
    component: ListDetail
}, {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: GoodsDetail
}, {
    path: '/searchlist',
    name: 'searchlist',
    component: SearchList
}, {
    path: '/',
    redirect: '/home'
}]


// 实例化一个路由对象
const router = new VueRouter({
    routes
})

// 暴露
export default router