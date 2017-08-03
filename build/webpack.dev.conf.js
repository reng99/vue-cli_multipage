var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


//增加内容
var path = require("path");
var glob = require("glob");

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ]
})

//增加内容，获得.html输出的对象
function getEntry(globPath) {
  var entries = {},
    basename,tmp,pathname;
  if(typeof (globPath) != "object") {
    globPath = [globPath];  // 转化成数组对象
  }
  // 遍历每个路径
  globPath.forEach((itemPath) => {//itemPath是匹配的规则'./src/module/*.js','./src/module/**/*.js'
    glob.sync(itemPath).forEach(function(entry){//entry是匹配到的文件如：'./src/module/index.js'
      basename = path.basename(entry,path.extname(entry));//取得文件名，不带后缀，如index,而不是index.js
      if(entry.split('/').length>4){
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0,1)+'/'+basename;//正确输出js和html的路径
        entries[pathname] = entry;
      }else{
        entries[basename] = entry;
      }
    });
  });
  return entries;
}

//模版文件
var pages = getEntry(['./src/module/*.html','./src/module/**/*.html']);

//console.log(pages);

for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname],   // 模板路径
    inject: true,              // js插入位置
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'

  };

  if (pathname in module.exports.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }

  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
