var gulp = require('gulp'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus')
    concatCss = require('gulp-concat-css');

gulp.task('default', ['watch'])

gulp.task('sass', function(){
  gulp.src('./pre/*.scss')
    .pipe(
      sass()
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./post'))
})

gulp.task('stylus', function(){
  gulp.src('./pre/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./post/stylus'))
})

gulp.task('concat', ['sass', 'stylus'],function(){
  gulp.src('./post/stylus/*.css')
    .pipe(concatCss('./public/bundle.css'))
    .pipe(gulp.dest('./build'))
})

gulp.task('watch', ['concat'], function(){
  gulp.watch('./pre/*.scss', ['sass']);
  gulp.watch('./pre/*.styl', ['stylus']);
})