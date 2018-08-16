import "./Sidebar.css";

import React from "react";
import User from '../containers/User';

const Sidebar = ({ contacts }) => {
    return <aside className="Sidebar"> 
        {contacts.map((contact, id) =>  
        <User user={contact} key={contact.user_id} />)}
    </aside>
}

export default Sidebar;