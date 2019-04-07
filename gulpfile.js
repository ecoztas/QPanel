/**
 * @name            QPanel
 * @file            gulpfile.js
 * @version         1.0.0
 * @description     Bootstrap Admin Panel
 * @repository      https://github.com/emrecanoztas-com/QPanel
 * @author          Emre Can ÖZTAŞ (ecoztas) <me@emrecanoztas.com>
 * @license         MIT
 */

// DEFINE: Package(s).
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// TASK: Default
gulp.task('default', function() {
    console.log('Works fine!');
});

// TASK: SASS
gulp.task('sass', function() {
    return (
        gulp.src('./styles/sass/application.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('styles'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('styles'))
    );
});

// TASK: JavaScript
gulp.task('javascript', function() {
    return (
        gulp.src('./scripts/src/*.js')
        .pipe(plumber())
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./scripts/dist/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./scripts/dist/'))
    );
});
