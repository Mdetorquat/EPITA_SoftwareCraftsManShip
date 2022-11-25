const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("Server listen");
});

module.exports = app;
module.exports.port = listen.address().port;
