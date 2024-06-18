const { body, validationResult } = require("express-validator");

const createCustomerBodyValidationRule = () => {
  return [body("customer_id").notEmpty(), body("reference_id").notEmpty()];
};

const validateCreateCustomerBody = (req, res, next) => {
  try {
    const errors = validationResult(req.body);
    if (errors.isEmpty()) return next();

    return res.status(422).send(errors);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
};

module.exports = {createCustomerBodyValidationRule, validateCreateCustomerBody};
