import { MessageBox } from 'mint-ui';
const mutations = {
    changeNum(state) {
        console.log(state);
        state.num++
    },
    addNum(state, data) {
        console.log(state);
        state.num += data
    },
    getPartdatas(state, data) {
        state.partDatas = data
    },
    getPartRightdatas(state, data) {
        state.partRightdatas = data
    },
    getswipeDatas(state, data) {
        // console.log(data);
        state.swipeDatas = data
    },
    getloginDatas(state, data) {
        state.logindatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodlists = data
    },
    getGoodsDetails(state, data) { //商品详情
        state.goodsDetails = data
    },
    // 设置购物车数据  
    // console.log(data);打印的是
    //{goods_id: 621
    // goods_img: "http://localhost:3000/images/201703/goods_img/0_G_1489098360632.jpg"
    // goods_name: "三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22"
    // isSelect: false
    // shop_price: 2200
    // value: 1}
    setcartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    // 数字++
    plusCart(state, index) {
        console.log(state.carts[index]);
        // if () {
        state.carts[index].value++
            localStorage.setItem('carts', JSON.stringify(state.carts))
            // }
    },
    // 数字--
    reduceCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value == 1
            MessageBox({
                title: '提示',
                message: '再减就没惹555！',

            });
        } else {
            state.carts[index].value--
        }
    },

    // 删除商品
    delGoods(state, index) {
        MessageBox.alert('确定要删除嘛？').then(() => {
            console.log('确定');
            state.carts.splice(index, 1)
            localStorage.setItem('carts', JSON.stringify(state.carts))
        }, () => {
            console.log('dianjiquxiao');
        });
    },
    // 商品选中状态 
    changeSelect(state, isSelect) { //isSelect代表cart.vue组件的changeSelect方法提交的那个对象{cart,index}
        console.log(state);
        console.log(isSelect);
        // isSelect.cart.isSelect代表实时改变的单选框状态
        // 把实时改变的单选框状态替换到仓库里的单选状态
        // state.carts[isSelect.index].isSelect = isSelect.cart.isSelect
        state.carts[isSelect.index] = isSelect.cart
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        console.log(isCheck);

        state.checkall = isCheck
        localStorage.setItem('checkall', state.checkall)

        //接着把本地存储的isSelect状态也一并更新了 
        localStorage.setItem('carts', JSON.stringify(state.carts))

        console.log(state.carts);
    },
    // 全选按钮
    selectAllFn(state) {
        state.checkall = !state.checkall
        state.carts.forEach(item => {
            item.isSelect = state.checkall
        });
        localStorage.setItem('carts', JSON.stringify(state.carts))
        localStorage.setItem('checkall', state.checkall)

    },
    // 搜索商品

    searchkey(state, data) {
        state.searchlist = data
    },
    getsearchkey(state, data) {
        // let arr = state.keywords
        // arr.unshift(data)

        // state.keywords = arr
        let arr = JSON.parse(localStorage.getItem('keywordsval')) //定义一个变量用于拿到本地存储的数据
        console.log(arr);
        if (!arr) {
            arr = []
            arr.unshift(data)
        } else {
            var flag = arr.indexOf(data) // indexOf 返回-1的时候代表没有数据
            if (flag !== -1) {
                arr.splice(flag, 1) //  如果输入的有重复数据把重复的删掉 
            }
            arr.unshift(data) //没有的话直接在这个数组前添加新数据就好

        }

        state.keywords = arr //这句话代表把最终的数据赋给仓库
        localStorage.keywordsval = JSON.stringify(arr) //把数据转换为字符串的形式存储在本地存储


    }
}

export default mutations