const express = require("express");
const router = express.Router();
const customerRoute = require("./customers");
const planRoute = require("./plan");
const addonsRoute = require("./addons");
const hostedPagesRoute = require("./hostedPages");

router.use("/customer", customerRoute);
router.use("/plan", planRoute);
router.use("/addons", addonsRoute);
router.use("/hosted-pages", hostedPagesRoute);

module.exports = router;