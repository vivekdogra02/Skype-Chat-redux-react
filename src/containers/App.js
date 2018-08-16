import './App.css';

import React, { Component } from 'react';

import ChatWindow from "../components/ChatWindow";
import Empty from "../components/Empty";
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import store from '../store';

const _ = require("lodash"); // lodash is a utility lib for Javascript

const App = () => {
  const { contacts, user, activeUserId  } = store.getState();  
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
); };

export default App;
