const express = require("express");
const router = express.Router();
const customerRoute = require("./customers");

router.use("/customer", customerRoute);

module.exports = router;
