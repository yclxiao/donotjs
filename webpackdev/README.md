## 一些文档
```
https://segmentfault.com/a/1190000006178770 

https://segmentfault.com/a/1190000014466696?utm_source=index-hottest/*&^%$#articleHeader4
```

## 一些区别
1. 注意 浏览器刷新和代码变动监听 ，两个是有区别的，webpack -w只是监听代码，会把新的代码生成到文件夹下但是不会刷新浏览器，而devserver是会刷新浏览器的，而且devserver就是不生成静态文件，而是把文件放在内存中，只有通过端口访问
2. 实时刷新页面 webpack-dev-server,webpack-dev-server 热加载（HMR）为 webpack-dev-server 开启 HMR 模式只需要在命令行中添加--hot，它会将 HotModuleReplacementPlugin 这个插件添加到 webpack 的配置中去
3. 模块热替换 Hot Module Replacement:  Hot Module Replacement（以下简称 HMR）是 webpack 发展至今引入的最令人兴奋的特性之一 ，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新，不加 --hot 页面是会刷新的
4. 目前常见的还差dll 和 代码分割