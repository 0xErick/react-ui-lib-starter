const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('build-less', function () {
  return gulp.src('./src/assets/**').pipe(gulp.dest('./esm/assets')).pipe(gulp.dest('./lib/assets'));
});

gulp.task('build-assets', function () {
  return gulp.src('./src/style/index.less').pipe(less()).pipe(gulp.dest('./esm/style')).pipe(gulp.dest('./lib/style'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/style/*.less'], () => {
    return gulp
      .src('./src/style/index.less')
      .pipe(less())
      .pipe(gulp.dest('./esm/style'))
      .pipe(gulp.dest('./lib/style'));
  });
  gulp.watch(['./src/assets/**'], () => {
    return gulp.src('./src/assets/**').pipe(gulp.dest('./esm/assets')).pipe(gulp.dest('./lib/assets'));
  });
});
