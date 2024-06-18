const express = require("express");
const router = express.Router();
const {
  customerParamValidationRule,
  validateCustomerParam,
} = require("../../middlewares/validate-customer-param.middleware");
const paymentHistoryModel = require("../../models/paymentHistory");
const ZohoService = require("../../services/zoho.service");

const zohoService = new ZohoService(
  process.env.ZOHO_BASE_URL,
  process.env.OAUTH_TOKEN,
  process.env.ORGANIZATION_ID
);

// ROUTE: GET api/payment/get-payment-history
router.get(
  "/get-payment-history",
  customerParamValidationRule(),
  validateCustomerParam,
  async (req, res) => {
    try {
      const { customer_id } = req.query;

      const paymentHistoryDoc = await paymentHistoryModel.findOne({
        customer_id,
      });

      if (!paymentHistoryDoc) return res.status(404).send({ msg: "Not Found" });

      res.send(paymentHistoryDoc);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ msg: err.message });
    }
  }
);

module.exports = router;
