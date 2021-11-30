const Sequelize = require("sequelize");
const { Op } = Sequelize;
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  read: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

/**
 * Sets the read status of messages to true
 *
 * @param {number} conversationId
 */
Message.updateReadStatus = function (conversationId) {
  Message.update(
    {
      read: true,
    },
    {
      where: {
        conversationId: conversationId,
      },
    },
  );
};
module.exports = Message;
