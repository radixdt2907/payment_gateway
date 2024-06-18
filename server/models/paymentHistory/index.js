const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentObject = new Schema({
  payment_id: {
    require: false,
    type: String,
  },
});

const subscriptionObject = new Schema({
  subscription_id: {
    require: true,
    type: String,
  },
});

const paymentStatusSchema = new Schema({
  customer_id: {
    require: true,
    type: String,
  },
  invoice_id: {
    type: String
  },
  reference_id: {
    type: String
  },
  payments: [paymentObject],
  subscriptions: [subscriptionObject],
  status: {
    type: String,
    default: "PROCESSING",
  },
});

module.exports = mongoose.model("PaymentStatus", paymentStatusSchema);