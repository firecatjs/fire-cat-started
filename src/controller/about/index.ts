import {ApiDescription, FireCatController, Get, Request} from "fire-cat";
import {Context} from "fire-cat/lib/types";

export class AboutController extends FireCatController {

  @Request()
  @ApiDescription('about home page')
  @Get('')
  index(ctx: Context) {
    ctx.body = 'welcome to about page'
  }

  @Request()
  @ApiDescription('about address page')
  @Get('address')
  address(ctx: Context) {
    ctx.body = 'address'
  }

  @Request()
  @ApiDescription('about news page')
  @Get('news')
  news(ctx: Context) {
    ctx.body = 'news'
  }

}