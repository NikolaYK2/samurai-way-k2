import React from "react";
import s from "./DialogsMessage.module.css";
import {Users} from "features/2-main/content/dialogs/users/Users";
import MessageUsersContainer from "features/2-main/content/dialogs/messageUsers/MessageUsersContainer";

type DialogsMessageType={
}
export const DialogsMessage: React.FC<DialogsMessageType> = (props ) => {

    return (
        <div className={s.dialogs}>
            <Users/>
            <MessageUsersContainer/>
        </div>
    );
}