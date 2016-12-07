var  gulp = require('gulp');
var  rjs = require('requirejs');
var  runSequence = require('gulp-run-sequence');
var  clean = require('gulp-clean');

gulp.task('jsmin', function(cb) {
  rjs.optimize({
    mainConfigFile: "src/demo1/js/main.js",
    baseUrl: 'src/demo1/js',
    removeCombined: false,
    findNestedDependencies: false,
    optimize: "none",
    optimizeCss: "none",
    preserveLicenseComments: "false",
    paths: {
      machina: "empty:"
    },
    dir: './static/demo1/js',
    generateSourceMaps: false,
    modules: [{
      "name": "base",
      "include":["almond"]
    },{
      "name":"main-a",
      "include": ["page/a"],
      "exclude": ["base"] 
    },{
      "name":"main-b",
      "include": ["page/b"],
      "exclude": ["base"]
    },]
  }, function(buildResponse) {
    // console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('demo1', function(callback) {
  runSequence(
    'jsmin',
    callback);
});