const pool = require("./pool.js");

exports.newMessage = async (text, user, date) => {
  await pool.query(
    "INSERT INTO all_messages (username, text, added) VALUES ($1,$2,$3);",
    [user, text, date]
  );
};

exports.getMessageDetails = async (user) => {
  const { rows } = await pool.query(
    "SELECT * FROM all_messages WHERE username LIKE ($1);",
    [user]
  );
  return rows;
};

exports.getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM all_messages;");
  return rows;
};
