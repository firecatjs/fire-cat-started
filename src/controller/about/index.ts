import {FireCatController, Get, Request} from "fire-cat";
import {Context} from "fire-cat/lib/types";

export class AboutController extends FireCatController {

  @Request()
  @Get('')
  index(ctx: Context) {
    ctx.body = 'welcome to about page'
  }

  @Request()
  @Get('address')
  address(ctx: Context) {
    ctx.body = 'address'
  }

  @Request()
  @Get('news')
  news(ctx: Context) {
    ctx.body = 'news'
  }

}