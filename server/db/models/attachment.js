const db = require("../db");

const Attachment = db.define("attachment", {
  messageId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  src: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Attachment;
