import {FireCatVerifyWrap} from "fire-cat";
import {AppController} from "@/mixin/appController";
import {Context} from "fire-cat/lib/types";

class AppVerifyController extends AppController {
  async wrap(ctx: Context, message: string) {
    ctx.body = this.rule(message)
  }
}

export const AppVerify = FireCatVerifyWrap(async (message, ctx, next)=> {
  if (message) {
    await new AppVerifyController().wrap(ctx, message.message)
  } else {
    await next()
  }
})