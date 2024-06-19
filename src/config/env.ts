import configDev from "@/config/config.dev";
import configProd from "@/config/config.prod";
import { CatEnv } from "./cat-env";

const appEnv = new CatEnv({
  'dev': configDev,
  'prod': configProd
})

export default appEnv