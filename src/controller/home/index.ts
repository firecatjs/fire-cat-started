import { AppController } from "@/mixin/appController";
import {ApiDescription, Context, Get, Request} from "fire-cat";
import schema from "./schema";
import { AppVerify } from "@/decorators/appVerify";

export class HomeController extends AppController {

  @Get('/')
  @Request()
  @ApiDescription('首页')
  async index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Get('/ping')
  @Request()
  @AppVerify(schema.test)
  @ApiDescription('ping的页面')
  async ping(ctx: Context) {
    ctx.body = 'pang'
  }

}