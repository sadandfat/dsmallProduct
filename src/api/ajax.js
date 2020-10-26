// // 封装一个请求数据的方法 相当于对axios（ 艾克西柚斯） 的二次封装
// import axios from 'axios'
// export default function ajax(url = '', params = {}, type = 'get') {
//     return new Promise((resolve, reject) => {
//         if ('get' === type) {
//             //params={size:10,page:1} //size=10&page=1
//             let paramsStr = ''
//                 //Object.keys(params)   //['page', 'size']
//             Object.keys(params).forEach(key => {
//                 paramsStr += key + '=' + params[key] + '&'
//             })

//             if (paramsStr != '') {
//                 // size=10&page=1& 切掉多余的&   最后一个为索引为 & 的时候

//                 paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
//             }

//             // 拼接url的完整路径
//             url += '?' + paramsStr
//             promise = axios.get(url)
//         } else if ('post' === type) { //type类型为post
//             promise = axios.post(url, params)
//         }

//         // 返回请求结果
//         promise.then((response) => {
//             resolve(response.data)
//         }).catch((err) => {
//             reject(err)
//         })
//     })
// }


//封装一个请求数据的方法，对axios的二次封装
import axios from "axios";
export default function ajax(url = "", params = {}, type = "get") {
    //1、定义Promise对象
    let promise
    return new Promise((resolve, reject) => {
        //2、判断请求方式
        //params={size:10,page:1}   //size=10&page=1
        if ("get" === type) {
            let paramsStr = ""
                //Object.keys(params) // ["page", "size"]
            Object.keys(params).forEach(key => {
                paramsStr += key + "=" + params[key] + "&"
            })

            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&")) //size=10&page=1
            }
            //拼接url的完整路径
            url += "?" + paramsStr
            promise = axios.get(url)
        } else if ("post" === type) { //post请求方式
            promise = axios.post(url, params)
        }

        //返回请求结果
        promise.then((response) => {
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}