import { AppController } from "@/mixin/appController";
import {ApiDescription, Get, Request, Context} from "fire-cat";

export class AboutController extends AppController {

  @Get('/')
  @Request()
  @ApiDescription('about home page')
  index(ctx: Context) {
    ctx.body = 'welcome to about page'
  }

  @Get('/address')
  @Request()
  @ApiDescription('about address page')
  address(ctx: Context) {
    ctx.body = 'address'
  }

  @Get('/news')
  @Request()
  @ApiDescription('about news page')
  news(ctx: Context) {
    ctx.body = 'news'
  }

  @Get('/news/detail/:id')
  @Request()
  @ApiDescription('about news detail page')
  newsDetail(ctx: Context) {
    ctx.body = 'news'
  }

}