import gulp from 'gulp';
import concat from 'gulp-concat';
import { path } from '../config/path.js';
import gulpSass from 'gulp-sass';
import scss from 'sass';

const sass = gulpSass(scss);

function styles() {
    return gulp.src(path.styles)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
}

export { styles };