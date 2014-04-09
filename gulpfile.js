// For more information on how to configure a task runner, please visit:
// https://github.com/gulpjs/gulp
var gulp        = require('gulp');
var clean       = require('gulp-clean');
var csslint     = require('gulp-csslint');
var csso        = require('gulp-csso');
var imagemin    = require('gulp-imagemin');
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglify');
var cachebust   = require('gulp-cachebust')();

var stylish     = require('jshint-stylish');

// Clear the destination folder
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean({ force: true }));
});

// Copy all application files into the 'dist' folder except user css and images
gulp.task('copy', ['clean'], function () {
    return gulp.src(['src/**/*', '!src/css/**/*.css', '!src/img/**/*'])
        .pipe(gulp.dest('dist'));
});

// Optimizes CSS files
gulp.task('css', ['clean'], function () {
    return gulp.src(['src/css/main.css', 'src/css/normalize.css'])
        .pipe(csso())
        .pipe(cachebust.resources())
        .pipe(gulp.dest('dist/css'))
});

// Detect errors and potential problems in your css code
gulp.task('csslint', function () {
    return gulp.src(['src/css/main.css', '!src/css/normalize.css'])
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter())
});

// Detect errors and potential problems in your JavaScript code (except vendor scripts)
// You can enable or disable default JSHint options in the .jshintrc file
gulp.task('jshint', function () {
    return gulp.src(['src/js/**/*.js', '!src/js/vendor/**'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

// Uglify and copy all JavaScript
gulp.task('js', ['clean'], function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(cachebust.resources())
        .pipe(gulp.dest('dist/js'));
});

// Minify and copy images
gulp.task('images', ['clean'], function () {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Inject cachebusting references into HTML
gulp.task('html', ['clean', 'css', 'js'], function () {
    return gulp.src('src/*.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

// Runs all checks on the code
gulp.task('check', ['jshint', 'csslint']);

// The default task (called when you run `gulp`)
gulp.task('default', ['check', 'copy', 'images', 'html']);