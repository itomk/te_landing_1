import GulpSvgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import gulpCheerio from 'gulp-cheerio';
import rename from 'gulp-rename';

export function svgIcons() {
  return app.gulp.src(`${app.path.svgIcons.src}`, {})
    .pipe(GulpSvgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(gulpCheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
        $('svg').attr('style', 'display: none');
      }, parseOptions: { xmlMode: true }
    }))
    .pipe(rename('sprite.svg'))
    .pipe(app.gulp.dest(`${app.path.svgIcons.build}`));
}
