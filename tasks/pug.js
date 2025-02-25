import GulpPug from 'gulp-pug';
import fs from 'fs';

const pug = (serveInstance) => {
  const localeData = JSON.parse(fs.readFileSync(`${app.path.pug.data}`));

  return app.gulp.src(`${app.path.pug.src}`)
    .pipe(app.plumber())
    .pipe(GulpPug({
      pretty: true,
      locals: localeData || {}
    }))
    .pipe(app.gulp.dest(`${app.path.pug.build}`))
    .pipe(serveInstance.stream())
};

export { pug };
