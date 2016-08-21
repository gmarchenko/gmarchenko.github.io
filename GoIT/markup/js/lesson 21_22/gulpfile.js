const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
const rimraf = require('rimraf');

gulp.task('build:static', () =>
    gulp.src('src/**/*.{html,css}')
        .pipe(gulp.dest('build'))
);

gulp.task('babel', () =>
    gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build/js'))
);

gulp.task('build', ['build:static', 'babel']);

gulp.task('mocha', () => {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', () => {
    watch(['src/**/*.{html,css}'], function(event, cb) {
        gulp.start('build:static');
    });
    watch(['src/js/**/*.js', 'test/**/*.js'], function(event, cb) {
        gulp.start('babel', 'mocha');
    });
});

gulp.task('clean', function (cb) {
    rimraf('build', cb);
});

gulp.task('default', ['build', 'mocha', 'watch']);
