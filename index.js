const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  res.status(404).send(err.message);
});

app.listen(PORT, () => {
  console.log(`node server started at http://localhost:${PORT}`);
});
