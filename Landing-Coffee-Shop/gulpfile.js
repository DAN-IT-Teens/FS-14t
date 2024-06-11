import { javaScript } from './gulp/tasks/java-script.js';
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { watcher } from './gulp/config/watcher.js';
import { convertImages } from './gulp/tasks/images.js';

import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('build-scripts', javaScript);

gulp.task('build-html', html);

gulp.task('build-styles', styles);

gulp.task('build-images', convertImages);

gulp.task('start', () => {
    browserSync.init({
        server: './dist'
    })
    watcher();
})

gulp.task('dev', gulp.series('build-scripts', 'build-html', 'build-styles', 'build-images', 'start'))