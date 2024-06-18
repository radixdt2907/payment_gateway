const express = require("express");
const router = express.Router();
const customerRoute = require("./customers");
const planRoute = require("./plan");
const addonsRoute = require("./addons");
const hostedPagesRoute = require("./hostedPages");
const webHooksRoute = require("./webhooks");
const subscriptionsRoute = require("./subscriptions");
const paymentRoute = require("./payment");

router.use("/customer", customerRoute);
router.use("/plan", planRoute);
router.use("/addons", addonsRoute);
router.use("/hosted-pages", hostedPagesRoute);
router.use("/webhooks", webHooksRoute);
router.use("/subscriptions", subscriptionsRoute);
router.use("/payment", paymentRoute);

module.exports = router;
