# Browser support

Modern browsers and IE 10+.

# License
[MIT](http://opensource.org/licenses/MIT)

"autoprefixer": "^7.2.1",//处理css3前缀
"axios-mock-adapter": "^1.10.0",//模拟获取请求
"babel-core": "^6.26.0",//调用Babel的API进行转码
"babel-loader": "^7.1.2",//转化为es6
"babel-plugin-transform-runtime": "^6.23.0",//转化es6代码
"babel-preset-env": "^1.6.1",
"babel-polyfill": "^6.26.0",//转化es6 API代码
"babel-preset-es2015": "^6.24.1",
"babel-preset-stage-2": "^6.24.1",
"babel-register": "^6.26.0",
"chalk": "^2.3.0",//处理颜色
"connect-history-api-fallback": "^1.5.0",//通过指定索引页对代理请求的中间件，对于使用HTML5历史API的单页应用程序非常有用。
"copy-webpack-plugin": "^4.2.3",//将单个文件或整个目录复制到构建目录。
"css-loader": "^0.28.7",
"eventsource-polyfill": "^0.9.6",
"express": "^4.16.2",
"extract-text-webpack-plugin": "^3.0.2",
"file-loader": "^1.1.5",//file-loader主要用来处理图片,其实也可以在js和html及其他文件上
"friendly-errors-webpack-plugin": "^1.6.1",
"function-bind": "^1.1.1",
"html-webpack-plugin": "^2.30.1",//建立一个html模板，自动插入打包的js
"http-proxy-middleware": "^0.17.4",
"webpack-bundle-analyzer": "^2.9.1",
"json-loader": "^0.5.7",
"mockjs": "^1.0.1-beta3",//生成随机数据，拦截 Ajax 请求
"node-sass": "^4.7.2",//sass编译
"opn": "^5.1.0",//一个更好的node-open。打开网站，文件，可执行文件的东西。跨平台。
"optimize-css-assets-webpack-plugin": "^3.2.0",
"ora": "^1.3.0",
"rimraf": "^2.6.2",//清空目录
"sass-loader": "^6.0.6",//sass编译
"semver": "^5.4.1",//语义化版本
"shelljs": "^0.7.8",//shelljs 模块重新包装了 child_process，调用系统命令更加方便。它需要安装后使用。
"url-loader": "^0.6.2",//将图片文件转换为base64编码,url-loader是file-loader的加强版，可以使用limit参数
"vue-loader": "^13.5.0",//编译.vue文件
"vue-style-loader": "^3.0.3",//样式编译
"vue-template-compiler": "^2.5.9",//模板编译
"webpack": "^3.10.0",
"webpack-dev-middleware": "^1.12.2",//热重载
"webpack-hot-middleware": "^2.21.0",//热重载
"webpack-merge": "^4.1.1"//可以把分开配置的config合并，分开生产环境和调试环境