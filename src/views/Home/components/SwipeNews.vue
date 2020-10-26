<!--  -->
<template>
<div class='swipe_news'>
    <div class="new_logo">
        <!-- <img src="@/assets/imgs/logo.png" alt=""> -->
        <img :src="imgLogo" alt="">
    </div>
    <!-- ref属性值是固定的 -->
    <ul :class="{'new_list':true,'trans':flag==true}" ref='news'>
        <li v-for='item in newsdata' :key='item.id'>{{item.title}}</li>
       
    </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {  
    // 引入图片尽量使用远程
   imgLogo:'https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png',
   flag:false,
   timer:'',
   newsdata:[{
          id:'1',
          title:'新闻①',  
    },{
         id:'2',
          title:'新闻②', 
    },{
         id:'3',
          title:'新闻③',  
    },{
         id:'4',
          title:'新闻④',  
    },{
         id:'5',
          title:'新闻⑤',  
    }]
};
},
methods:{
    scrollnews(){
        var oUl = this.$refs.news; //获取ul节点
        oUl.style.marginTop = '-5rem' //margin-top向上走的时候开启动画，不然会有抖动问题
        var that = this;  //定时器的this为了保险起见改为that比较好
        that.flag = !that.flag  //开始的定义的变量flag为false,动画向上走是flag为true
        setTimeout(function(){
            // 这里的超时定时器是为了让margin-top回到初始位置0px
            that.newsdata.push(that.newsdata[0]) //将数组的第一个元素添加到末尾
            that.newsdata.shift();
            oUl.style.marginTop='0'
              that.flag = !that.flag  //动画向下走时flag为flase
        },1000)
    }
},
mounted(){
    console.log(this.$refs.news);
   this.timer= setInterval(this.scrollnews, 2000);  //2秒之后ul向上移动-5rem
},
destroyed(){
    clearInterval(this.timer);
}
}
</script>
<style lang='less'>
    .swipe_news{
        display: flex;
        height: 5rem;
        overflow: hidden;
        margin: 0px  10px;
        .new_logo{
            img{
                height: 3rem;
                margin-top:1rem;
            }
        }
        .trans{
            transition: all 1s;
        }
        .new_list{
            margin-left: 2rem;
            line-height: 5rem;
				font-size: 1.5rem;
                color: #7c56d6;
                // 闪烁文字效果
				animation: changeshadow 1s ease-in infinite;
			
			@keyframes changeshadow {
				0% {
					text-shadow: 0 0 4px #7c56d6
				}
				50% {
					text-shadow: 0 0 40px #7c56d6
				}
				100% {
					text-shadow: 0 0 4px #7c56d6
				}
			}
            
        }
    }
</style>