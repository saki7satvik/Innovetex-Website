import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  teamLeader: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  numberOfTeamMembers: {
    type: Number,
    required: true,
  },
  members: [
    {
      name: { type: String, default: null },
      phone: { type: String, default: null },
    },
  ],
  amountDue: {
    type: Number,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
});

export const Payment = mongoose.model("Payment", paymentSchema);
