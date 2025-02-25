import { deleteAsync } from 'del';

export function clean() {
  return deleteAsync([
    `${app.path.clean}`,
    `!${app.path.img.build}`,
    `!${app.path.fonts.build}`,
    `${app.path.fonts.buildCss}/_fonts.scss`
  ]);
}
