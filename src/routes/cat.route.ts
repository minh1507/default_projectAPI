import express from "express";
import {
  findAll,
  findById,
  create,
  deleteById,
  update,
  findPath
} from "../controllers/cat.controller.ts";
import * as auth from "../middleware/authorization.middleware.ts";
import * as rate from "../middleware/rateLimit.middleware.ts";

let router = express.Router();

let catRoute = (app: any) => {
  router.get("/",  findAll);
  router.get("/path",  findPath);
  router.get("/:id",  findById);
  router.post("/", auth.authorizations, rate.cat, create);
  router.delete("/:id", auth.authorizations, rate.cat, deleteById);
  router.put("/:id", rate.cat, update);
  return app.use("/api/cat", router);
};

export default catRoute;
