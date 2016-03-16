/**
 * Created by DaraW on 2016/2/10.
 */
'use strict';

const gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    jslint = require('gulp-jslint'),
    csslint = require('gulp-csslint'),

    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    htmlmin = require('gulp-htmlmin'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    rev = require('gulp-rev');

gulp.task('lint', function() {

    gulp.src('app/styles/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());

    gulp.src('app/scripts/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter());

});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/**/*').on('change', livereload.changed);
});

gulp.task('clean', function(cb) {
    return del('dist/**/*', cb);
});

gulp.task('build', ['clean'], function() {
    gulp.src('app/index.html')
        .pipe(usemin({
            html: [function () {return htmlmin({collapseWhitespace: true});}],
            css: [cssnano(), rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('dist'));

    gulp.src('app/images/*')
        .pipe(gulp.dest('dist/images'));

    gulp.src('app/static/*')
        .pipe(gulp.dest('dist/static'));

    gulp.src('app/*.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);