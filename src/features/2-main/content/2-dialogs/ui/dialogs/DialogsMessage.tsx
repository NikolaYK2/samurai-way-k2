import React from "react";
import s from "features/2-main/content/2-dialogs/ui/dialogs/DialogsMessage.module.css";
import {Users} from "features/2-main/content/2-dialogs/ui/dialogs/users/Users";
import MessageUsersContainer from "features/2-main/content/2-dialogs/ui/dialogs/messageUsers/MessageUsersContainer";

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