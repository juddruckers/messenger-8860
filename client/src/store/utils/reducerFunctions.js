export const addMessageToStore = (state, payload) => {
  const { message, sender } = payload;
  // if sender isn't null, that means the message needs to be put in a brand new convo
  if (sender !== null) {
    const newConvo = {
      id: message.conversationId,
      otherUser: sender,
      messages: [message],
    };
    newConvo.latestMessageText = message.text;
    return [newConvo, ...state];
  }

  const newState = state.filter((convo) => convo.id !== message.conversationId);

  const convoIndex = state.findIndex(
    (convo) => convo.id === message.conversationId,
  );

  const convoCopy = {
    ...state[convoIndex],
  };

  convoCopy.latestMessageText = message.text;
  convoCopy.messages = convoCopy.messages.concat(message);
  newState.unshift(convoCopy);

  return newState;
};

export const addOnlineUserToStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = true;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const removeOfflineUserFromStore = (state, id) => {
  return state.map((convo) => {
    if (convo.otherUser.id === id) {
      const convoCopy = { ...convo };
      convoCopy.otherUser.online = false;
      return convoCopy;
    } else {
      return convo;
    }
  });
};

export const addSearchedUsersToStore = (state, users) => {
  const currentUsers = {};

  // make table of current users so we can lookup faster
  state.forEach((convo) => {
    currentUsers[convo.otherUser.id] = true;
  });

  const newState = [...state];
  users.forEach((user) => {
    // only create a fake convo if we don't already have a convo with this user
    if (!currentUsers[user.id]) {
      let fakeConvo = { otherUser: user, messages: [] };
      newState.push(fakeConvo);
    }
  });

  return newState;
};

export const addNewConvoToStore = (state, recipientId, message) => {
  const newState = state.filter((convo) => convo.otherUser.id !== recipientId);

  const convoIndex = state.findIndex(
    (convo) => convo.otherUser.id === recipientId,
  );

  const convoCopy = {
    ...state[convoIndex],
  };

  convoCopy.id = message.conversationId;
  convoCopy.messages = convoCopy.messages.concat(message);
  convoCopy.latestMessageText = message.text;
  newState.unshift(convoCopy);

  return newState;
};
