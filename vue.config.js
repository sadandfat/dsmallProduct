// 修改完vue.config一定要重启
module.exports = {
    publicPath: './', //配置公共路径（必须的） 否则打开是空白
    devServer: {

        host: '0.0.0.0', //不固定的ip地址
        port: '857',
        open: true,
        proxy: { //配置代理解决vue中的跨域问题
            '/api': {
                target: 'https://x.dscmall.cn/api', //要代理的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: { //重写路径
                    '^/api': ''
                }
            }
        }
    }
}