import {ApiDescription, FireCatController, Get, Request} from "fire-cat";
import {Context} from "fire-cat/lib/types";

export class HomeController extends FireCatController {

  @Get('/')
  @Request()
  @ApiDescription('首页')
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Get('/ping')
  @Request()
  @ApiDescription('ping的页面')
  ping(ctx: Context) {
    ctx.body = 'pang'
  }

}