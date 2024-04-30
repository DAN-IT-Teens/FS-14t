import gulp from 'gulp';
import { path } from '../config/path.js';

function convertImages() {
    return gulp.src(path.images)
        .pipe(gulp.dest('./dist/images'));
}

export { convertImages }
