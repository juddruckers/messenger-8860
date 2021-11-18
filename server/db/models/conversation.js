const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      user1Id: {
        [Op.or]: [user1Id, user2Id],
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id],
      },
    },
    attributes: ["id", "createdAt"],
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

//set updatedAt value to current time using sequelizes default DataTypes.Date

Conversation.setCurrentUpdatedAt = async function (conversationId) {
  const conversation = await Conversation.findOne({
    where: {
      id: conversationId,
    },
  });

  conversation.changed("updatedAt", true);
  conversation.save();
};

module.exports = Conversation;
