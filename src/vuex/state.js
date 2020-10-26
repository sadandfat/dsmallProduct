const state = {
    num: 1,
    partDatas: [], //分类的类别数据
    partRightdatas: [],
    swipeDatas: [], //首页轮播图
    logindatas: {},
    userInfo: [], //用户信息
    goodlists: [], //产品列表/发现好物
    goodsDetails: [], //产品详情
    // 购物车数据
    // 如果本地存储里有cart这个属性， 把它读取出来， 否则搞一个空数组
    // (在本地存储的数据都必须是字符串， 读取数据的时候需要转换成对象)
    carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],
    //全选按钮的状态
    checkall: localStorage['checkall'] ? JSON.parse(localStorage['checkall']) : [],
    searchlist: [],
    keywords: []
}

export default state