import ajax from './ajax'


// 定义一个全局变量--全局变量
const Base_url = '/api'

//请求数据
// 搜索页面  api/v1/search?keywords=小米&size=10&page=1
export const searchApi = (params) => ajax(Base_url + '/catalog/goodslist', params, "post");