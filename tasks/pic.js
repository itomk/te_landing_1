import size from 'gulp-size';

export function pic() {
  return app.gulp.src(`${app.path.pic.src}`, { encoding: false, allowEmpty: true })
    .pipe(size())
    .pipe(app.gulp.dest(`${app.path.pic.build}`))
}
