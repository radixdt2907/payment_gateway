const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express();
const port = 5000;
const apiRoute = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use("/api", apiRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
