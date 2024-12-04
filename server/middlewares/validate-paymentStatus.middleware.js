const validatePaymentStatus = (req, res, next) => {
  try {
    const fieldNotPresent = [];
    console.log(req.body)
    const reqBody = req.body;

    // const { status, customer_id } = reqBody?.data?.invoice ?? {};
    const { payment_id , customer_id, status} = reqBody?.data?.payment ?? {};

    if (!status) fieldNotPresent.push("Status");
    if (!payment_id) fieldNotPresent.push("Payment_id");
    if (!customer_id) fieldNotPresent.push("Customer_id");

    if (fieldNotPresent.length > 0)
      return res
        .status(400)
        .send({
          msg: `These Fields are required ${fieldNotPresent.toString()}`,
        });

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ msg: err.message });
  }
};

module.exports = validatePaymentStatus;
