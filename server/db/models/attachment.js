const db = require("../db");

const Attachment = db.define("message", {
  messageId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Attachment;
