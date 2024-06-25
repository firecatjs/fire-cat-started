import {FireCatController} from "fire-cat";

export class AppController extends FireCatController {

  success(data?: object) {
    return {
      code: 0,
      msg: 'ok (:',
      data: data,
    }
  }

  error(msg?: string) {
    return {
      code: 1,
      msg: msg,
      data: null,
    }
  }

  rule(msg?: string) {
    return {
      code: 2,
      msg: msg,
      data: null,
    }
  }


}