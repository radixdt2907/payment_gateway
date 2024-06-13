const { body, validationResult } = require("express-validator");

const customerValidationRule = () => {
  return [body("display_name").notEmpty(), body("email").notEmpty().isEmail()];
};

const validateCustomer = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    return res.status(422).send(errors);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
};

module.exports = { validateCustomer, customerValidationRule };