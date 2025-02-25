let root_build = './dist/',
  root_src = './src/',
  assets_build = `${root_build}assets/`;

export const path = {
  rootBuild: `${root_build}`,
  rootSrc: `${root_src}`,
  clean: `${root_build}*`,
  fonts: {
    src: `${root_src}fonts/*.{otf,ttf,woff,woff2}`,
    build: `${assets_build}fonts`,
    buildCss: `${root_src}styles/inc`,
    watch: `${root_src}fonts/*.{otf,ttf,woff,woff2}`,
  },
  svgIcons: {
    src: `${root_src}icons/**/*.svg`,
    build: `${assets_build}images/sprites`,
    watch: `${root_src}icons/**/*.svg`,
  },
  css: {
    src: [`${root_src}styles/main.scss`],
    build: `${assets_build}styles`,
    watch: `${root_src}styles/**/*.{sass,scss,css}`,
  },
  js: {
    src: [`${root_src}scripts/main.js`],
    build: `${assets_build}scripts`,
    watch: `${root_src}scripts/**/*.js`,
  },
  pug: {
    src: `${root_src}pug/*.pug`,
    build: `${root_build}`,
    data: `${root_src}data/pug.json`,
    watch: `${root_src}pug/**/*.pug`,
  },
  img: {
    src: `${root_src}images/**/*.{png,jpg,jpeg,gif,svg,webp,ico}`,
    build: `${assets_build}images`,
  },
};
