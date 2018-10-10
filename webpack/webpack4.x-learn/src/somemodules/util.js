/* 代码分割跟common文件夹没关系
    webpack配置中写的common是公共代码最终打包出来的js
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",//抽取出的公共引用，生成的js文件名是common-xxxxxx.js
          minChunks: 2, //表示模块被引用次数，默认为1；
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
        }
      }
    }

    通过实践证明：以上配置的minChunks是2，只要有模块被引用2次以上，就被会自动打包到common-xxxx.js中去
    如果只有一次引用，则不会打到common中去，会打包各自的js文件中

    webpack会自动分析js中的对象依赖关系
    webpack4已经删除了CommonsChunkPlugin

*/
module.exports = {
    getRandom: function () {
        return Math.random();
    }
}