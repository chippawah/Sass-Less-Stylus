var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // stylus = require('gulp-stylus');

gulp.task('default', ['watch'])

gulp.task('sass', function(){
  gulp.src('./pre/*.scss')
    .pipe(
      sass()
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./post'))
})

// gulp.task('stylus', function(){
//   gulp.src('./pre/*.styl')
//     .pipe(stylus())
//     .pipe(gulp.dest('./post'))
// })

gulp.task('watch', ['sass'], function(){
  gulp.watch('./pre/*.scss', ['sass']);
//   gulp.watch('./pre/*.styl', ['stylus']);
})