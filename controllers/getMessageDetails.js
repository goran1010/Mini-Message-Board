const messages = require("../models/messages.js");

const getMessageDetails = async (req, res, next) => {
  const { user } = req.params;
  let currentUser = await messages.getMessageDetails(user);
  console.log(currentUser);

  if (currentUser && currentUser.length > 0) {
    res.render("messageDetails", { message: currentUser });
  } else next(new Error("404 no User found"));
};
module.exports = getMessageDetails;
