const messages = require("../models/messages");

function postNewMessage(req, res) {
  let text = req.body.text;
  let user = req.body.user;
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
}

module.exports = postNewMessage;
