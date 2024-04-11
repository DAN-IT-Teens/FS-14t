import gulp from 'gulp';
import concat from 'gulp-concat';
import { path } from '../config/path.js';

function javaScript() {
    return gulp.src(path.scripts)
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist/'))
}

export { javaScript };