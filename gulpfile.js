var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var shell = require('gulp-shell');

// setup the local enviroment
gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// compile sass and log errors in the terminal
gulp.task('sass', function () {
  return gulp.src('./sass/styles.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

// transpile our ES6 javascript into ES5
gulp.task('transpile', function() {
  return gulp.src('./scripts/*.js')
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest('./public/js'))
});

// minify required javascript for dist
gulp.task('minify', function() {
  gulp.src('./public/js/okaynowthis.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
    }))
    .pipe(gulp.dest('./dist/'))
});

// setup the live reload of public files
gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

// watch for changes
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./scripts/**/*.js', ['transpile']);
  gulp.watch('./public/**/*', ['livereload']);
});

// update the GitHub pages subtree (by running a basic git command via shell)
gulp.task('example', () => {
  shell.task('git subtree push --prefix public origin gh-pages');
})

// setup the default 'gulp task'
gulp.task('default', ['connect', 'watch', 'sass', 'transpile']);
// package the dist folder and update the demo on gh-pages
gulp.task('package', ['minify', 'updateDemo']);
