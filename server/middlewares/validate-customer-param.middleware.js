const { query, validationResult } = require("express-validator");

const customerParamValidationRule = () => {
  return [query("customer_id").notEmpty()];
};

const validateCustomerParam = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(422).send(errors);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
};

module.exports = { customerParamValidationRule, validateCustomerParam };
