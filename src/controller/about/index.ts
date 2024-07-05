import { AppController } from "@/mixin/appController";
import {ApiDescription, Get, Request, Context} from "fire-cat";

export class AboutController extends AppController {

  @Get('/')
  @Request()
  @ApiDescription('about home page')
  async index(ctx: Context) {
    ctx.body = 'welcome to about page'
  }

  @Get('/address')
  @Request()
  @ApiDescription('about address page')
  async address(ctx: Context) {
    ctx.body = 'address'
  }

  @Get('/news')
  @Request()
  @ApiDescription('about news page')
  async news(ctx: Context) {
    ctx.body = 'news'
  }

  @Get('/news/detail/:id')
  @Request()
  @ApiDescription('about news detail page')
  async newsDetail(ctx: Context) {
    ctx.body = 'news'
  }

}