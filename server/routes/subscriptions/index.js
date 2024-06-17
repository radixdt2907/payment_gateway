const express = require("express");
const router = express.Router();
const ZohoService = require("../../services/zoho.service");
const {
  customerParamValidationRule,
  validateCustomerParam,
} = require("../../middlewares/validate-customer-param.middleware");

const zohoService = new ZohoService(
  process.env.ZOHO_BASE_URL,
  process.env.OAUTH_TOKEN,
  process.env.ORGANIZATION_ID
);

// ROUTE: GET api/subscriptions
router.get(
  "/",
  customerParamValidationRule(),
  validateCustomerParam,
  async (req, res) => {
    try {
      const params = req.query
      const subscription = await zohoService.fetchAllSubscriptionAsync(params);
      res.status(subscription.status).send(subscription.data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ msg: err.message });
    }
  }
);

module.exports = router;
