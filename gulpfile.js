var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();

gulp.task('clean', function() {
  return del([
    'static/**/*.css',
  ]);
});

gulp.task('sass', function() {
  return gulp.src('styles/pixyll.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', function() {
  runSequence('clean', ['sass']);
});
