import gulp from 'gulp';
import { path } from '../config/path.js';
import image from 'gulp-image';

function convertImages() {
    return gulp.src(path.images)
        .pipe(image())
        .pipe(gulp.dest('./dist/images'));
}

export { convertImages }
