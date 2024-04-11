import gulp from 'gulp';
import concat from 'gulp-concat';
import { path } from '../config/path.js';

function styles() {
    return gulp.src(path.styles)
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/'))
}

export { styles };