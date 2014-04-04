// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp
var gulp    = require('gulp');
var clean   = require('gulp-clean');
var csso    = require('gulp-csso');

// Clear the destination folder
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
               .pipe(clean({ force: true }));
});

// Copy all application files into the 'dist' folder except user css
gulp.task('copy', ['clean'], function () {
    return gulp.src(['src/**/*', '!src/css/**/*.css'])
               .pipe(gulp.dest('dist'));
});

// Optimizes CSS files
gulp.task('css', function () {
    return gulp.src(['src/css/main.css', 'src/css/normalize.css'])
               .pipe(csso())
               .pipe(gulp.dest('dist/css'))
});

// The default task (called when you run `gulp`)
gulp.task('default', ['clean', 'copy', 'css']);