const path = require("path")
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  // 应用入口
  entry: {
    app: path.join(__dirname, './src/js/app.js') // app.js作为打包的入口
  },
  // 输出目录
  output: {
    filename: 'js/bundle.js', //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
    path: path.join(__dirname, './dist'), // 打包好之后的输出路径
    publicPath: '' // 静态资源文件引用时的路径（加在引用静态资源前面的）
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'],
        include: path.resolve(__dirname, './src/js'),
      },
      {
        test:/\.scss$/,
        use:ExtractTextPlugin.extract({
          use:[{
            loader:'css-loader',
          },
          {
            loader:'postcss-loader'
          }
          ]
        }), 
      }
    ]
  },
  plugins:[
    new HTMLPlugin({
      template:'./src/html/index.html'
    }),
    new ExtractTextPlugin({
      filename:`[name].css`
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: { // DevServer 相关的配置
    contentBase: path.join(__dirname, 'dist'), // 配置 DevServer HTTP 服务器的文件根目录
    compress: true, // 是否开启 gzip 压缩
    historyApiFallback: true, // 是否开发 HTML5 History API 网页
    hot: true, // 是否开启模块热替换功能
    https: false, // 是否开启 HTTPS 模式
    port:4000,
    },
    profile: true, // 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳

    cache: false, // 是否启用缓存提升构建速度

    watch: true, // 是否开始
    watchOptions: { // 监听模式选项
    // 不监听的文件或文件夹，支持正则匹配。默认为空
    ignored: /node_modules/,
    // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
    // 默认为300ms 
    aggregateTimeout: 300,
    // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每秒问 1000 次
    poll: 1000
  },
}