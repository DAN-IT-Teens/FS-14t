import gulp from 'gulp';
import browserSync from 'browser-sync';
import { javaScript } from '../tasks/java-script.js';
import { html } from '../tasks/html.js';
import { styles } from '../tasks/styles.js';
import { path } from './path.js';
import { convertImages } from '../tasks/images.js';

function watcher() {
    gulp.watch(path.html, html).on('change', browserSync.reload);
    gulp.watch(path.scripts, javaScript).on('change', browserSync.reload);
    gulp.watch(path.styles, styles).on('change', browserSync.reload);
    gulp.watch(path.images, convertImages).on('change', browserSync.reload);
}

export { watcher };