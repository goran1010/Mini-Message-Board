const { Router } = require("express");
const getMessageDetails = require("../controllers/getMessageDetails");
const messages = require("../models/messages.js");

const postNewMessage = require("./postNewMessage");

const indexRouter = Router();

indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", postNewMessage);
indexRouter.get("/:user", getMessageDetails);

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));

module.exports = indexRouter;
