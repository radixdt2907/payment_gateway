const express = require("express");
const ZohoService = require("../../services/zoho.service");
const router = express.Router();
const {
  validateToken,
  tokenService,
} = require("../../middlewares/validate-token.middleware");


// ROUTE: GET api/addons
router.get("/", validateToken, async (req, res) => {
  try {
    const zohoService = new ZohoService(
      process.env.ZOHO_BASE_URL,
      tokenService.OAUTH_TOKEN,
      process.env.ORGANIZATION_ID
    );
    
    const addons = await zohoService.getAddonsAsync();
    res.status(addons.status).send(addons.data);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
});

module.exports = router;