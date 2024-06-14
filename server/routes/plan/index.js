const express = require("express");
const router = express.Router();
const ZohoService = require("../../services/zoho.service");

const zohoService = new ZohoService(
  process.env.ZOHO_BASE_URL,
  process.env.OAUTH_TOKEN,
  process.env.ORGANIZATION_ID
);

// ROUTE: GET api/plan
router.get("/", async (req, res) => {
  try {
    const plans = await zohoService.getPlanAsync();
    res.status(plans.status).send(plans.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
});

module.exports = router;
