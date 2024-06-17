const express = require("express");
const router = express.Router();
const ZohoService = require("../../services/zoho.service");

const zohoService = new ZohoService(
  process.env.ZOHO_BASE_URL,
  process.env.OAUTH_TOKEN,
  process.env.ORGANIZATION_ID
);

// ROUTE: POST api/hosted-pages
router.post("/", async (req, res) => {
  try {
    const hostedPage = await zohoService.createSubscriptionHostedPageAsync(req.body);
    res.status(hostedPage.status).send(hostedPage.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
});

module.exports = router;