requirejs.config({
  baseUrl: '../src/demo1/js',
  // 开发环境加时间戳，清理缓存
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    almond:'../../../node_modules/almond/almond',
    jquery: "../../../node_modules/jquery/dist/jquery.min"
  },
  shim : {
    jquery: {
      exports: '$'
    }
  }
});