module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'img/**',
      '*.html',
      'fonts/**',
      'fontawesome-pro-5.2.0-web/**'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));

  });
};