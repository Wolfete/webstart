const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', (done) => {
    console.log('Hello world');
    done();
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});


let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
 
gulp.task('minify-css',() => {
  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});