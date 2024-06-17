import fireRouter from '@/router';
const logger = require('koa-logger');
import {FireCat} from 'fire-cat';
import config from '@/config';
import AppEnv from '@/config/env';
import {catLog} from "@/log";

const app = new FireCat();

app.koa.on('error', (err, ctx) => {
  // 可以在这里添加额外的错误处理逻辑，例如记录日志
  console.log(err)
  catLog.logError(ctx, err)
  ctx.body = {
    success: false,
    code: 500
  }
});

if (config.env.APP_ENV == AppEnv.prod) {
  // app.koa.use(log.action());
}

if (config.env.APP_ENV == AppEnv.dev) {
  app.koa.use(logger());
  fireRouter.enableDocument('/document', {
    title: '接口文档',
    description: '这是接口文档',
    date: '2022-05-20',
    version: '1.0.0'
  })
}

app.koa.use(fireRouter.router.routes());
app.koa.listen(config.port);

console.log(
  `🐳️app is running at http://127.0.0.1:${config.port} env: [${config.env.APP_ENV}]`,
);
