<!-- 登录页面 -->
<template>
<div class='login'>
     <div class='login_h'>
          <button >用户登录注册</button>
         <div class="logo">
            <img src="@/assets/imgs/touxiang.jpeg" alt="">
        </div>
     </div>
     
    <div class="login_con">
        <!-- 短信登录 -->
        <div v-if="loginFlag">
            <section>
           
                <input type="tel" placeholder="手机号" maxlength="11" v-model="phone">
                <button v-if="!num" class="code" @click='timing'>获取验证码</button>
                <button disabled v-else  class="code" >已发送{{num}}s</button>
                <!-- <input type="password" placeholder="密码">
                <input type="tel" placeholder="验证码"> -->         
            </section>
             <section>
                <input type="tel" placeholder="请输入收到的验证码" maxlength="11">
                <!-- <img ref="captcha" @click="getCaptcha" class="random_color" src="http://localhost:3000/api/v1/users/captcha " alt=""> -->
              </section>

           
        </div>
        <!-- 账号登录 -->
         <div v-else>
            <section>
           
                <input type="tel" placeholder="用户名/邮箱/手机号" maxlength="11" v-model="user">
                
            </section>
             <section>
                <input type="password" v-if="hidePass" placeholder="请输入密码" maxlength="11" v-model="pass">
                <input type="tel" v-else  placeholder="请输入密码" v-model="pass">
                 <button v-if="hidePass" class="getcode iconfont icon-yanjing_bi " @click='showPass'>&nbsp;&nbsp;忘记密码</button>
                <button v-else  class="getcode iconfont icon-yanjing "  @click='showPass'>&nbsp;&nbsp;忘记密码</button>
              </section>
            <section>
           
                <input type="tel" placeholder="请输入验证码" maxlength="11" v-model="code">
                <img ref="captcha" @click="getCaptcha" class="random_color" src="http://localhost:3000/api/v1/users/captcha " alt="">
            </section>
           
        </div>
         <div style="height:70px">
             <button class="btn" @click='orLogin'>登录</button>
         </div>
         <div class="quick-btn">
             <button class="btn1" v-show="loginFlag"><a href="javascript:;"  @click='changeTab'>账号密码登录</a></button>
             <button class="btn1" v-show="!loginFlag"><a href="javascript:;"   @click='changeTab'>短信登录</a></button>
              <button class="btn2"><a href="javascript:;" >手机快速注册</a></button>
         </div>

         <div class="quick-login">
             <h4 class="txt-otherLogin">其他登录方式</h4>
         </div>
        <!-- 其他登录方式 -->
         <div class="quick-type">
            <a href=""> <img src="@/assets/imgs/qq.png" alt=""> qq</a>
            <a href=""> <img src="@/assets/imgs/v.png" alt=""> 微信</a>
         </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from 'mint-ui';  //用花括号包是按需引入的意思 
import {login_user} from '@/api/login.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    loginFlag:true,
    phone:'',
    pass:'',
    num:0,
    timer:'',
    hidePass:true,
    user:'',
    code:''
};
},
//监听属性 类似于data概念
computed: {
    yanzheng(){
        return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone)
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     changeTab(){
         this.loginFlag=!this.loginFlag
     },
     timing(){   //获取验证码
        if(this.yanzheng){
            this.num=60;
            this.timer=setInterval(() => {
                this.num--
                if(this.num==0){
                    clearInterval(this.timer)
                }
            }, 1000);
        }else{
              Toast({
                message: '手机号格式不正确',
                position: 'center',
                duration: 3000
                });  
        }
     },
     showPass(){
        this.hidePass = !this.hidePass
     },
     getCaptcha(){
         this.$refs.captcha.src='http://localhost:3000/api/v1/users/captcha?t='+new Date().getTime()
     },
      async orLogin(){
        // 判断输入内容是否为空时
         if (!this.user) {
            Toast("用户名/邮箱/手机号！");
            return;
        } else if (!this.pass) {
            Toast("请输入密码！");
            return;
        }
        const res = await login_user(this.user,this.pass,this.code)
        console.log(res);
    //      login_user(this.user,this.pass,this.code).then((res)=>{
    //     console.log(res);

    // })
        if(res.status!==200){
            Toast({
                message: res.msg,
                position: 'center',
                duration: 3000 
            });  
            return
        }
        // 用户名，密码，验证码都输入正确的时候跳转到首页
         if(res.status==200){
             
           this.$store.dispatch("getUserInfo", res.data[0]);
           console.log(this.$store.state.userInfo);
           this.$router.push('/home')
        }
     }
},
beforeCreate() {}, //生命周期 - 创建之前
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
beforeMount() {}, //生命周期 - 挂载之前
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
   this.$store.dispatch("getloginDatas")
},
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
    .login{
        width: 100%;
        height: 100%;
        background: white;
        z-index: 99;
        position: fixed;
        top: 0;
        bottom: 0;
        
        .logo{
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
            border: 5px solid #efefef;
            overflow: hidden;
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
        .login_h{
            display: flex;  //水平垂直居中
            justify-content: center;
            flex-direction: column;
            align-items: center;
            button{
                width: 20rem;
                height: 3rem;
                font-size: 1.6rem;
                color: #555;
                margin: 20px 20px;
                background: transparent;
            }
        }
        .login_con{
            margin-top: 1rem;
            position: relative;
              section{
                  width: 30rem;
                  position: relative;
                  top: 0;
                  left: 50%;
                //   margin-left: -15rem;
                    transform: translateX(-50%);
                    input{
                    width: 100%;
                    height: 4rem;
                    border-bottom: 1px solid #efefef;
              
                    }
                    .code{
                        width: 10rem;
                        height: 2rem;
                        line-height: 2rem;
                        background: transparent;
                        position: absolute;
                        right: 0;
                        // top: 50%;
                        margin-top: 1rem;
                        // padding: 1rem;
                        color: #777;
                        border-left: 1px solid #ccc;
                    }
                    .getcode{
                        width: 10rem;
                        height: 2rem;
                        line-height: 2rem;
                        background: transparent;
                        position: absolute;
                        right: 0;
                        // top: 50%;
                        margin-top: 1rem;
                        color: #777;
                      
                    }
                    .random_color{
                         width: 10rem;
                        height: 4rem;
                        line-height: 4rem;
                        background: transparent;
                        position: absolute;
                        right: 0;
                        // top: 50%;
                        // margin-top: 0.5rem;
                        color: #777;
                    }
              }
              .btn{
                        width: 32rem;
                        height: 5rem;
                        line-height: 5rem;
                        margin-top: 1rem;
                        background-color: #FFC1B6;
                        color:white;
                        font-size:1.6rem;
                        border-radius: 30px;
                        position: absolute;
                        left: 50%;
                        margin-left: -16rem;
                        // transform: translateX(-50%);
              }
                .quick-btn{
                    display: flex;
                    justify-content: space-between;
                    // align-items: center;
                    text-align: center;
                  .btn1,.btn2{
                        width: 16rem;
                        height: 3rem;
                        line-height: 3rem;
                        background: transparent;
                        color: #777;
                    }
                }
              .quick-login{
                    margin-top: 8.8rem;
                    border-top: 1px solid rgba(0,0,0,.1);
                    
                    .txt-otherLogin{
                    //     height: 3rem;
                    // line-height: 3rem;
                        color: rgba(0,0,0,.2);
                        width: 12.5rem;
                        font-size: 1.2rem;
                        margin: -0.7rem auto 0;
                        background: #fff;
                        text-align: center; 
                    }
              }

              .quick-type{
                    text-align: center;
                    margin: 2rem 0 2rem;
                    display: flex;  //水平垂直居中
                    justify-content: center;
                    flex-wrap: wrap;
                    a{
                            width: 5rem;
                            margin: 0 2rem 0 2rem;
                    }
                    img{
                            display: inline-block;
                            width: 5rem;
                            color: rgba(0,0,0,.4);
                            margin: 0 .15rem;
                            
                        
                       
                     }
              }
        }
        // section{
        //     // display: flex;
        //     flex-wrap: wrap;
        // }
    }

</style>