import * as dotenv from 'dotenv';
import configDev from "@/config/config.dev";
import configProd from "@/config/config.prod";
import AppEnv from "@/config/env";

const APP_ENV = process.env.APP_ENV
const mixConfig = APP_ENV == AppEnv.dev ? configDev : configProd

dotenv.config();

export default {
  env: {
    APP_ENV
  },
  port: mixConfig.port,
}