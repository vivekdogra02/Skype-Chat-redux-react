import activeUserId from "./activeUserId";
import { combineReducers } from "redux";
import contacts from "./contacts";
import messages from "./messages";
import typing from "./typing";
import user from "./user";
export default combineReducers({
    user,
    contacts,
    messages,
    typing,
    activeUserId,
});
