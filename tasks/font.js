import fontfacegenMod from 'gulp-fontfacegen-mod';

export function font() {
  return app.gulp.src(`${app.path.fonts.src}`, { encoding: false })
    .pipe(app.changed(`${app.path.fonts.build}`))
    .pipe(app.plumber())
    .pipe(fontfacegenMod({
      filepath: `${app.path.fonts.buildCss}`,
      filename: '_fonts.scss',
      rewrite: 'del',
    }))
    .pipe(app.gulp.dest(`${app.path.fonts.build}`))
}
