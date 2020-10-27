module.exports = {
  runtimeCompiler: true,
  publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
  devServer: {
    // port: 80, //端口
  // 跨域 请求'/api/user'
  //   proxy: {
  //     '/api': {
  //         target: 'http://baidu.com',
  //         ws: true,
  //         changeOrigin: true, // 允许跨域
  //         pathRewrite: {
  //             '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
  //         }
  //     }
  // }
  }
}
