const messages = require("../models/messages.js");

const getMessageDetails = (req, res, next) => {
  const { user } = req.params;

  let currentUser = null;
  messages.forEach((message) => {
    if (message.user.toLowerCase() === user.toLowerCase()) {
      currentUser = message;
    }
  });

  if (currentUser) {
    res.render("messageDetails", { message: currentUser });
  } else next(new Error("404 no User found"));
};
module.exports = getMessageDetails;
