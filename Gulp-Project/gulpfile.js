const browserSync = require('browser-sync');
const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('test', () => {
    console.log("Hello Gulp!!");
});

gulp.task('build-scripts', () => {
    return gulp.src(['./app/scripts/index.js', './app/script.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('build-html', () => {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist/'))
})

gulp.task('build-styles', () => {
    return gulp.src(['./app/styles/index.css', './app/style.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('start', () => {
    browserSync.init({
        server: './dist'
    })
})