## 简介

基于vue-cli脚手架pc端的`多页面`开发，和之前的一个公司的项目进行比较[webpack](https://github.com/reng99/webpack),探讨使用哪种技术进行前端开发。正在完善搭建中，如果你喜欢，star🌟支持下了。如有不妥地方，还请指出，共勉啊！

## 项目地址



## 项目布局

```
    .
    ├── build                                       // webpack配置文件
    ├── config                                      // 项目打包路径
    ├── node_modules                                // 项目的依赖（执行 npm install 后产生）         
    ├── dist                                        // 上线项目文件，放在服务器即可正常访问（执行 npm run build 后产生）
    ├── src                                         // 源码目录
    ├── static                                      // 存放静态资源的地方，在build之后会生成dist文件夹，这个文件夹中的文件会原封不动放进去 
    ├── .babelrc                                    // webpack插件babel的设置 
    ├── .editorconfig                               // 编辑器生成的配置文件，在各个项目中可以自由配置 
    ├── .eslintignore                               // 使用eslint检测代码是否符合规则的忽略目录，用于eslint设置 
    ├── .eslintrc                                   // eslint设置
    ├── .gitignore                                  // 使用Git版本管理时需要忽略的目录，用于Git设置 
    ├── .postcssrc.js                               // （不知）
    ├── .package.json                               // nodejs的配置
    ├── README.md                                   // 说明文件，项目的说明
    .


```


## 参考

- [glob](https://www.npmjs.com/package/glob)

- [glob.sync](https://www.npmjs.com/package/glob#globsyncpattern-options)