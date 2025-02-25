const server = (serveInstance) => {
  serveInstance.init({
    server: {
      baseDir: `${app.path.rootBuild}`,
    },
    port: 3000,
    reloadOnRestart: true,
    open: false,
    notify: true,
    cors: true,
    logLevel: 'info',
    // online: false, // Автономная работа без доступа к интернету
    // tunnel: true, // Демонстрация в локальном url
  });
};

export { server };
