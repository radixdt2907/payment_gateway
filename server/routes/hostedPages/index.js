const express = require("express");
const router = express.Router();
const ZohoService = require("../../services/zoho.service");
const {
  validateToken,
  tokenService,
} = require("../../middlewares/validate-token.middleware");



// ROUTE: POST api/hosted-pages
router.post("/",validateToken,  async (req, res) => {
  try {
    const zohoService = new ZohoService(
      process.env.ZOHO_BASE_URL,
      tokenService.OAUTH_TOKEN,
      process.env.ORGANIZATION_ID
    );

    const hostedPage = await zohoService.createSubscriptionHostedPageAsync(req.body);
    res.status(hostedPage.status).send(hostedPage.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
});

module.exports = router;