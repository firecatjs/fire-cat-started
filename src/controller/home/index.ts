import {ApiDescription, FireCatController, Get, Request} from "fire-cat";
import {Context} from "fire-cat/lib/types";

export class HomeController extends FireCatController {

  @Request()
  @ApiDescription('首页')
  @Get('')
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Request()
  @ApiDescription('ping的页面')
  @Get('ping')
  ping(ctx: Context) {
    ctx.body = 'pang'
  }

}