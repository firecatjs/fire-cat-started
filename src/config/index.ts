import appEnv from './env';

const mixConfig = appEnv.getAppConfig()

export default {
  env: {
    APP_ENV: appEnv.env
  },
  port: mixConfig.port,
}