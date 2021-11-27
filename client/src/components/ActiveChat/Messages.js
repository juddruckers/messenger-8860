import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble, Avatar } from "../ActiveChat";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
const useStyles = makeStyles(() => ({
  avatarBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId } = props;
  const messagesHaveBeenRead = messages
    .filter((message) => message.senderId === userId)
    .every((message) => message.read);

  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <>
            <SenderBubble key={message.id} text={message.text} time={time} />
            {messagesHaveBeenRead && index === messages.length - 1 && (
              <Box className={classes.avatarBox}>
                <Avatar
                  readVersion={true}
                  alt={otherUser.username}
                  src={otherUser.photoUrl}
                />
              </Box>
            )}
          </>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
