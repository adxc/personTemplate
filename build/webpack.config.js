const path = require("path")

module.exports ={
    // 应用入口
    entry: {
      app: path.join(__dirname, '../src/js/app.js')  // app.js作为打包的入口
    },
    // 输出目录
    output: {
      filename: 'js/bundle.js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
      path: path.join(__dirname, '../dist'), // 打包好之后的输出路径
      // publicPath: '/public' // 静态资源文件引用时的路径（加在引用静态资源前面的）
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          use:['babel-loader?cacheDirectory'],
          include:path.resolve(__dirname,'../src/js')
        },
        {
          test:/\.scss$/,

        }
      ]
    }
}