// build/index.mjs

import fs from 'fs-extra';
import path from 'path';
import { deleteAsync } from 'del';
import shell from 'gulp-shell';
import gulp from 'gulp';
import rename from 'gulp-rename';

// 构建 FireBuild 工具函数
const createFireBuild = ({ srcDir, distPath, distAppPath }) => {
  const buildClean = async () => {
    await deleteAsync([distPath]);
  };

  const buildTs = shell.task([
    'tsc && tsc-alias',
  ]);

  const compareCopyFiles = async () => {
    try {
      const srcFiles = await fs.readdir(srcDir);
      const distFiles = await fs.readdir(distAppPath);

      const filesToCopy = srcFiles.filter(file => !distFiles.includes(file));

      for (const file of filesToCopy) {
        const srcFilePath = path.join(srcDir, file);
        const distFilePath = path.join(distAppPath, file);
        await fs.copy(srcFilePath, distFilePath);
      }

    } catch (err) {
      console.error('Error comparing and copying files:', err);
      throw err;
    }
  };

  const copyFile = (fileList) => () => {
    return gulp.src([
      './package.json',
      './ecosystem.config.js',
      ...fileList
    ], { base: '.' })
    .pipe(gulp.dest(distPath));
  };

  const copyEnvFiles = () => {
    return gulp.src([
      `./.${process.env.APP_ENV}.env`,
    ])
    .pipe(rename('.env'))
    .pipe(gulp.dest(distPath));
  };

  return {
    buildClean,
    buildTs,
    compareCopyFiles,
    copyFile,
    copyEnvFiles,
  };
};

export default createFireBuild;
