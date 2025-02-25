import flatten from 'gulp-flatten';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';
import gulpWebp from 'gulp-webp';
import size from 'gulp-size';
import cloneStream from 'gulp-clone';

const cloneSink = cloneStream.sink();

export function img() {
  return app.gulp.src(`${app.path.img.src}`, { encoding: false, allowEmpty: true })
    .pipe(app.plumber())
    .pipe(app.changed(`${app.path.img.build}`))
    .pipe(gulpIf(app.isBuild,
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    ))
    .pipe(gulpIf(app.isBuild, cloneSink))
    .pipe(gulpIf(app.isBuild, gulpWebp({ quality: 85 })))
    .pipe(gulpIf(app.isBuild, cloneSink.tap()))
    .pipe(size())
    .pipe(flatten())
    .pipe(app.gulp.dest(`${app.path.img.build}`))
}
