import * as bodyParser from 'koa-bodyparser';
import fireRouter from '@/router';
const logger = require('koa-logger');
import {FireCatLog, FireCat} from 'fire-cat';
import config from '@/config';
import AppEnv from '@/config/env';

const app = new FireCat();
const log = new FireCatLog({
  filename: process.cwd() + '/logs/app.log'
});

app.onError = (ctx, err) => {
  console.log(err)
  log.logError(ctx, err)
  ctx.body = {
    success: false,
    code: 500
  }
}

if (config.env.APP_ENV == AppEnv.prod) {
  // app.koa.use(log.action());
}

if (config.env.APP_ENV == AppEnv.dev) {
  app.koa.use(logger());
}

app.koa.use(bodyParser());
app.koa.use(fireRouter.router.routes());
app.koa.listen(config.port);

console.log(
  `🐳️app is running at http://127.0.0.1:${config.port} env: [${config.env.APP_ENV}]`,
);
