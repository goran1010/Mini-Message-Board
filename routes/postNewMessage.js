const messages = require("../models/messages");

async function postNewMessage(req, res) {
  let text = req.body.text;
  let user = req.body.user;
  await messages.newMessage(text, user, new Date());
  res.redirect("/");
}

module.exports = postNewMessage;
