import "./User.css";

import React from "react";
import { setActiveUserId } from "../action";
import store from "../store";

const User = ( {user} ) => {
    const { name, profile_pic, status } = user;
    return (
        <div className="User" onClick={handleUserClick.bind(null, user)}>
       <img src={profile_pic} alt={name} className="User__pic" />
         <div className="User__details">
           <p className="User__details-name">{name}</p>
           <p className="User__details-status">{status}</p>
         </div>
</div>
    );
};
function handleUserClick({ user_id }) {
    console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
}
export default User;