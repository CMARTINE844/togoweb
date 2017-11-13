var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('browserSync', function () {
    browserSync({
        server: { baseDir: 'src' },
        port: 8080
    })
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
    runSequence(['browserSync', 'watch'], callback);
});