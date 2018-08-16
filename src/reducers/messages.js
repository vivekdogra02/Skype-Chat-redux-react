import { SEND_MESSAGE } from "../constants/action-types";
import { getMessages } from "../static-data";
const _ = require("lodash"); // lodash is a utility lib for Javascript

export default function messages(state = getMessages(10), action) {
     switch (action.type) {
       case SEND_MESSAGE:
       const { message, userId } = action.payload;
       const allUserMsgs = state[userId];
       const number = +_.keys(allUserMsgs).pop();
       return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
        }
    }
    };
       default:
         return state;
}
}