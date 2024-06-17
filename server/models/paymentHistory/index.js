const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentObject = new Schema({
  payment_id: {
    require: false,
    type: String,
  },
  status: {
    type: String,
    enum: ["PROCESSING", "SUCCESS", "FAILURE"],
    default: "PROCESSING",
  },
});

const paymentStatusSchema = new Schema({
  customer_id: {
    require: true,
    type: String,
  },
  payment: [paymentObject],
});

module.exports = mongoose.model("PaymentStatus", paymentStatusSchema);