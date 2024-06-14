const express = require("express");
const router = express.Router();
const ZohoService = require("../../services/zoho.service");
const {
  validateCustomer,
  customerValidationRule,
} = require("../../middlewares/validate-customer.middleware");

const zohoService = new ZohoService(
  process.env.ZOHO_BASE_URL,
  process.env.OAUTH_TOKEN,
  process.env.ORGANIZATION_ID
);

// ROUTE: GET api/customer
router.get("/", async (req, res) => {
  try {
    const customers = await zohoService.getCustomersAsync();
    res.status(customers.status).send(customers.data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
});

// ROUTE: POST api/customer
router.post(
  "/",
  customerValidationRule(),
  validateCustomer,
  async (req, res) => {
    try {
      const { email, display_name } = req.body;
      const customerConfig = {
        email,
        display_name,
      };
      const customer = await zohoService.createCustomerAsync(customerConfig);
      res.status(customer.status).send(customer.data);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ msg: err.message });
    }
  }
);

module.exports = router;