import {FireCatController, Get, Request} from "fire-cat";
import {Context} from "fire-cat/lib/types";

export class HomeController extends FireCatController {

  @Request()
  @Get('')
  index(ctx: Context) {
    ctx.body = 'hello world'
  }

  @Request()
  @Get('ping')
  ping(ctx: Context) {
    ctx.body = 'pang'
  }

}