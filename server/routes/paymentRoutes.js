import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const paymentRoute = express.Router();

paymentRoute.route("/checkout").post(checkout);

paymentRoute.route("/paymentverification").post(paymentVerification);

export default paymentRoute;
