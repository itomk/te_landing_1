import { resolve, join } from 'path';
import { readDir } from './tasks/read-dir.js';

export const webpack_config = async (isMode) => {
  const paths = {
    src: resolve('src'),
    dist: resolve('dist'),
  };

  const context = join(paths.src, 'scripts');

  return {
    context,
    entry: await readDir(context),
    mode: !isMode ? 'development' : 'production',
    output: {
      path: join(paths.dist, 'assets/scripts'),
      publicPath: '/',
      filename: '[name].min.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    devtool: 'source-map',
    // externals: {
    //   jquery: 'jQuery',
    // },
  }
};
