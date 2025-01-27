import express from "express";
import { register } from "../controllers/registerController.js";

const registerRouter = express.Router();
registerRouter.route("/").post(register); // Ensure this line is correct

export default registerRouter;