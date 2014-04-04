// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp
var gulp    = require('gulp');
var clean   = require('gulp-clean');

// Clear the destination folder
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
               .pipe(clean({ force: true }));
});

// Copy all application files into the 'dist' folder
gulp.task('copy', function () {
    return gulp.src(['src/**/*'])
               .pipe(gulp.dest('dist'));
});

// The default task (called when you run `gulp`)
gulp.task('default', ['clean', 'copy']);