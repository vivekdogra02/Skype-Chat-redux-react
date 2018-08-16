import "./Main.css";

import ChatWindow from "./ChatWindow";
import Empty from "./Empty";
import React from "react";

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
      if (!activeUserId) {
        return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
};
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
