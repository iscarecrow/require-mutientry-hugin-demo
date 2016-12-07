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
define("main", function(){});

requirejs([ "main" ], function () {
  requirejs([ "base"], function () {
    requirejs([ "page/a"], function () {

    });
  });
});
define("main-a", function(){});

define('page/a',['jquery'], function($) {
  console.log('a page');
  $('.a_size').css({'font-size':'40px'});
});
