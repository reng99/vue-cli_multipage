var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 新增
var glob = require("glob");
var entries = getEntry(['./src/module/*.js','./src/module/**/*.js']); // 获得入口js文件

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

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
