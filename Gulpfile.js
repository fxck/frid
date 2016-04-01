var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var PATHS = {
  entry: 'src/frid.scss',
  src: ['src/**/*.scss'],
  dist: 'dist',
  example: 'example'
};

gulp.task('build', function () {
  gulp.src(PATHS.entry)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(PATHS.dist))
    .pipe(gulp.dest(PATHS.example))
    .pipe(sass({ outputStyle: 'compressed' }).on('error min', sass.logError))
    .pipe(rename('frid.min.css'))
    .pipe(gulp.dest(PATHS.dist))
    .pipe(gulp.dest(PATHS.example))
});

gulp.task('watch', ['build'], function() {
  gulp.watch(PATHS.src, ['build']);
});
