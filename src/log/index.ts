import {FireCatLog} from "fire-cat";

export const catLog = new FireCatLog(FireCatLog.defaultConfig({
  filename: process.cwd() + '/logs/app.log',
  pm2: true
}));