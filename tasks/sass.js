import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import GulpCleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import GulpPostCss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import postcssGroupMedia from 'postcss-sort-media-queries';
import mapSources from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';

const scss = gulpSass(dartSass);

export const sass = (instance) => {
  return app.gulp.src(`${app.path.css.src}`)
    .pipe(app.plumber())
    .pipe(gulpIf(!app.isBuild, mapSources.init({ largeFile: true })))
    .pipe(scss({
      outputStyle: 'expanded',
      silenceDeprecations: ['legacy-js-api'],
    }, null).on('error', scss.logError))
    .pipe(gulpIf(app.isBuild, GulpPostCss([
      postcssPresetEnv(),
      postcssGroupMedia({ sort: 'desktop-first' })
    ])))
    .pipe(gulpIf(app.isBuild, autoPrefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    })))
    .pipe(gulpIf(app.isBuild, GulpCleanCss()))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulpIf(!app.isBuild, mapSources.write('.')))
    .pipe(app.gulp.dest(`${app.path.css.build}`))
    .pipe(instance.stream())
}
