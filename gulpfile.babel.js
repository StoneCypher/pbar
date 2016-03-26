
'use strict';



var fs           = require('fs'),
    path         = require('path'),

    del          = require('del'),
    source       = require('vinyl-source-stream'),
    gulp         = require('gulp'),

    browserify   = require('browserify'),

    esdoc        = require('gulp-esdoc'),
    rename       = require('gulp-rename'),
    closure      = require('gulp-closure-compiler'),
    babel        = require('gulp-babel');



var dirs         = { 'build': './build', 'dist': './dist', 'doc': './doc' },
    babel_cfg    = { "presets": [ "es2015" ], "sourceMaps": false };



var production   = false,

    errorHandler = function(err) {
      console.log(err.toString());
      this.emit("end");
    };





gulp.task('babel', ['setup'], function() {

  return gulp.src(['src/pbar.js'])
    .pipe(babel(babel_cfg))
    .pipe(rename('pbar.es5.js'))
    .pipe(gulp.dest('./build'));

});





gulp.task('clean', function(done) {
  del(['./build', './dist']).then(() => done());
});





gulp.task('browserify', ['babel'], function() {

  var browserifyConfig = { 'entries' : ['build/pbar.es5.js'] },
      bpack            = browserify(browserifyConfig, { "debug" : !production });

  return bpack
    .bundle()
    .on("error", errorHandler)
    .pipe(source("pbar.es5.js"))
    .pipe(gulp.dest('./build'));

});





gulp.task('closure5', ['browserify'], function() {

  return gulp.src('build/pbar.es5.js')

    .pipe(closure( {
      compilerPath: 'node_modules/closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      fileName: 'pbar.min.es5.js'
    } ))

    .pipe(gulp.dest('./build'));

});





gulp.task('closure6', ['browserify'], function() {

  return gulp.src('src/pbar.js')

    .pipe(closure( {
      compilerPath: 'node_modules/closure-compiler/node_modules/google-closure-compiler/compiler.jar',
      compilerFlags: {'language_in':'ECMASCRIPT6'},
      fileName: 'pbar.min.es6.js'
    } ))

    .pipe(gulp.dest('./build'));

});





gulp.task('make-dirs', ['clean'], function(done) {

  for (var key in dirs) {
    try      { fs.mkdirSync('.' + path.sep + path.normalize(dirs[key])); }
    catch(e) { if (e.code !== 'EEXIST') { console.log('caught ' + JSON.stringify(e) + ' while making dirs'); } }
  }

  done();

});





gulp.task('doc', ['make-dirs'], function() {

  gulp.src("./src")
    .pipe(esdoc({ destination: "./doc" }));

});





gulp.task('setup', ['make-dirs']);





gulp.task('build', ['browserify'], function() {

  return gulp.src(['build/pbar.js', 'build/pbar.es5.js'])
    .pipe(gulp.dest('./dist'));

});





gulp.task('default', ['closure5', 'closure6', 'doc']);
