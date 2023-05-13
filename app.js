const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require("./src/routes/routeKaryawan");
app.use("/", appRoute);

const port = 3000;

app.listen(port, () => {
  console.log("Server berjalan di port " + port);
});
