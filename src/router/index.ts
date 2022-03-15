import {FireCatRouter} from "fire-cat";
import {HomeController} from "@/controller/home";
import {AboutController} from "@/controller/about";

const fireRouter = new FireCatRouter()

fireRouter.controller('', new HomeController())
fireRouter.controller('/about', new AboutController())

export default fireRouter