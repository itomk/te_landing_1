const js = async (config, webpack, bsync) => {
  return app.gulp.src(`${config.entry}`, { allowEmpty: true })
    .pipe(app.plumber())
    .pipe(webpack({ config: await config(app.isBuild) }))
    .pipe(app.gulp.dest(`${app.path.js.build}`))
    .pipe(bsync.stream())
};

export { js };
