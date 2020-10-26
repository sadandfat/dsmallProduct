import ajax from './ajax'


// 定义一个全局变量--全局变量
const Base_url = 'http://localhost:3000/api'

//请求数据
// 首页轮播图
export const getHomeSwipe = () => ajax(Base_url + '/v1/index/swipe');