import gulp from 'gulp';
import FireBuild from './build/index.mjs';
import path from 'path';

const srcDir = './src';
const distPath = './dist';
const distAppPath = path.join(distPath, 'app');

const fileBuild = FireBuild({
  srcDir,
  distPath,
  distAppPath
})

export const defaultTask = gulp.series(
  fileBuild.buildClean,
  fileBuild.buildTs,
  fileBuild.compareCopyFiles,
  fileBuild.copyFile([
    // './public/**/*' // 你可以 copy 你需要的文件夹或者文件
  ]),
  fileBuild.copyEnvFiles
);

export default defaultTask;