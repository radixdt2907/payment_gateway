const express = require("express");
const router = express.Router();
const PaymentStatusModel = require("../../models/paymentHistory");
const validatePaymentStatus = require("../../middlewares/validate-paymentStatus.middleware");
const {
  createCustomerBodyValidationRule,
  validateCreateCustomerBody,
} = require("../../middlewares/validate-createCustomer.middleware");

// ROUTE: POST api/webhooks/createCustomer
router.post(
  "/createCustomer",
  createCustomerBodyValidationRule(),
  validateCreateCustomerBody,
  async (req, res) => {
    try {
      const reqBody = req.body;
      const { customer_id, reference_id } = reqBody.data.subscription;

      const customerDetail = await PaymentStatusModel.findOne({
        customer_id,
        reference_id,
      });

      // Check if the customer already exists
      if (customerDetail) return res.status(200).send(customerDetail);

      // If not create a new Document in mongoDB
      const paymentStatus = new PaymentStatusModel({
        customer_id,
        reference_id,
      });

      await paymentStatus.save();

      res.status(201).send(paymentStatus);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  }
);

// ROUTE: POST api/webhooks/updatePaymentStatus
router.post("/updatePaymentStatus", validatePaymentStatus, async (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);
    const { status, payment_id, customer_id } = reqBody.data.payment;

    const foundedCustomerPaymentStatus = await PaymentStatusModel.findOne({
      customer_id,
    });

    let foundedInArray = false;

    foundedCustomerPaymentStatus.payment =
      foundedCustomerPaymentStatus.payment.map((currStats) => {
        if (currStats.payment_id == payment_id) {
          currStats = {
            ...currStats,
            status: status.toUpperCase(),
          };
          foundedInArray = true;
        }
        return currStats;
      });

    if (!foundedInArray)
      foundedCustomerPaymentStatus.payment.push({
        payment_id,
        status: status.toUpperCase(),
      });

    await foundedCustomerPaymentStatus.save();

    res.status(200).send(foundedCustomerPaymentStatus);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
});

// ROUTE: POST api/webhooks/updatePaymentStatus
// router.post("/updatePaymentStatus", async (req, res) => {
//   try {
//     const { invoice_id } = req.body?.data?.invoice ?? {};

    
    
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: err.message });
//   }
// });

module.exports = router;
