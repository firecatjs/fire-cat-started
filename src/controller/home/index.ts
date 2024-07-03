import { AppController } from "@/mixin/appController";
import {ApiDescription, Context, Get, Request} from "fire-cat";
import schema from "./schema";
import { AppVerify } from "@/decorators/appVerify";
const fs = require('fs');
const path = require('path');

// 读取文件内容的函数
async function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export class HomeController extends AppController {

  @Get('/')
  @Request()
  @ApiDescription('首页')
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Get('/ping')
  @Request()
  // @AppVerify(schema.test)
  @ApiDescription('ping的页面')
  async ping(ctx: Context) {
    // ctx.body = 'pang'

    console.log({
      1: path.join(__dirname, '/public/test.txt'),
      2: __dirname
    })
    const content = await readFileContent(path.join(__dirname, '../../public/test.txt'));
    ctx.body = content;
  }

}