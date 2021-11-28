const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Attachment = require("./attachment");
// associations

Conversation.belongsToMany(User, { through: "UserConversations" });
User.belongsToMany(Conversation, { through: "UserConversations" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
Attachment.belongsTo(Message);
Message.hasMany(Attachment);

module.exports = {
  User,
  Conversation,
  Message,
  Attachment,
};
