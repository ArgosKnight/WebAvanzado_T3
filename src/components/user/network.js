import { Router } from "express";
import * as controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(controller.index);
testRouter.route("/login").post(controller.login);
//testRouter.route("/singup").post(singup);
//testRouter.route("/show").get(show);
//testRouter.route("/reset").post(reset);
//testRouter.route("/update").put(id);
//testRouter.route("/dele").delete(id);


export default testRouter;
