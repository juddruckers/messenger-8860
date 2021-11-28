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
  readBy: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    defaultValue: false,
  },
});

/**
 * Sets the read status of messages to true
 *
 * @param {number[]} messages - an array of message id's to update
 */
Message.updateReadStatus = function (messages) {
  Message.update(
    {
      read: true,
    },
    {
      where: {
        id: {
          [Op.in]: messages,
        },
      },
    },
  );
};
module.exports = Message;
