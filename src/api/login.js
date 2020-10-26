import ajax from './ajax'
const url = 'http://192.168.0.176:3000/api'
export const login_user = (user_name, pass, code) => ajax(url + '/v1/users/login', { user_name, login_password: pass, captcha: code }, 'post')
    // 属性和属性值一样可以简写， user_name， login_password, captcha这些属性名是后台的， 后台给什么你这里写什么， user_name, pass, code是你传的形参
    //  function login_user1(){
    //     ajax()
    // }