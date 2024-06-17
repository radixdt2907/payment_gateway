const mongoose = require("mongoose");

const mongoDBUri = process.env.MongoDBUri;

const connectToDbAsync = async () => {
  await mongoose
    .connect(mongoDBUri)
    .then(() => console.log("Connected! to mongoDB successfully"))
    .catch((err) =>
      console.error("Something went wrong while connecting to MongoDB ", err)
    );
};

module.exports = connectToDbAsync;