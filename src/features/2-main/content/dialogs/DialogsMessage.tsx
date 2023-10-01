import React from "react";
import s from "./DialogsMessage.module.css";
import {Users} from "features/2-main/content/dialogs/users/Users";
import MessageUsersContainer from "features/2-main/content/dialogs/messageUsers/MessageUsersContainer";

type DialogsMessageType = {}
const DialogsMessage: React.FC<DialogsMessageType> = () => {

  return (
    <div className={s.dialogs}>
      <Users/>
      <MessageUsersContainer/>
    </div>
  );
}
export default DialogsMessage