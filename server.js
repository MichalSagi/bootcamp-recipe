const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api = require('./server/routes/api')
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api)

const PORT = 8080;

app.listen(PORT, function () {
  console.log(`server is running in port ${PORT}`);
});