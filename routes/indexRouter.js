const { Router } = require("express");
const getMessageDetails = require("../controllers/getMessageDetails");
const messages = require("../models/messages.js");

const indexRouter = Router();

indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  let text = req.body.text;
  let user = req.body.user;
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});
indexRouter.get("/:user", getMessageDetails);

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));

module.exports = indexRouter;
