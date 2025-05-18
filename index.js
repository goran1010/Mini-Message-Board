const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(PORT, () => {
  console.log(`node server started at http://localhost:${PORT}`);
});
