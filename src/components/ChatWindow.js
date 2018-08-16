import './ChatWindow.css'

import Chats from "../components/Chats";
import Header from "../components/Header";
import MessageInput from "../containers/MessageInput";
import React from "react";
import store from "../store";

const _ = require("lodash"); // lodash is a utility lib for Javascript
const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const { typing } = state;
    const activeMsgs = state.messages[activeUserId];
     const activeUser = state.contacts[activeUserId];
     return (
       <div className="ChatWindow">
                 <Header user={activeUser} />
                 <Chats  messages={_.values(activeMsgs)} />
                 <MessageInput value={typing} />
       </div>
); };
   export default ChatWindow;