import gulp from 'gulp';
import browserSync from 'browser-sync';
import { path } from './tasks/path.js';
import gulpPlumber from 'gulp-plumber';
import changed from 'gulp-changed';

const is_build = process.argv.includes('--build');
const browserSyncInstance = browserSync.create();

global.app = {
  path: path,
  gulp: gulp,
  plumber: gulpPlumber,
  changed: changed,
  isBuild: is_build,
};

import { clean } from './tasks/clean.js';
import { img } from './tasks/img.js';
import { pic } from './tasks/pic.js';
import { font } from './tasks/font.js';
import { svgIcons } from './tasks/svg-icons.js';
import { server } from './tasks/server.js';
import { pug } from './tasks/pug.js';
import { webpack_config } from './webpack.config.js';
import webpackStream from 'webpack-stream';
import { js } from './tasks/js.js';
import { sass } from './tasks/sass.js';

webpack_config.mode = is_build ? 'production' : webpack_config.mode || 'development';

const handlePug = pug.bind(null, browserSyncInstance);
const handleServer = server.bind(null, browserSyncInstance);
const handleJs = js.bind(null, webpack_config, webpackStream, browserSyncInstance);
const handleSass = sass.bind(null, browserSyncInstance);

function watcher() {
  gulp.watch(`${app.path.pug.watch}`, handlePug);
  gulp.watch(`${app.path.js.watch}`, handleJs);
  gulp.watch(`${app.path.css.watch}`, handleSass);
}

const devTasks = gulp.series(gulp.parallel(font, img, pic, svgIcons), handlePug, handleJs, handleSass);
const dev = gulp.series(clean, devTasks, gulp.parallel(watcher, handleServer));
const build = gulp.series(clean, devTasks);

gulp.task('default', dev);

export { dev, build };
