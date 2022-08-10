import React from "react";
import s from "./DialogsMessage.module.css";
import {MessageUsers} from "./messageUsers/MessageUsers";
import {Users} from "./users/Users";
import {addMessageUsers, messagesPageType, stateType} from "../../../redux/state";

type DialogsMessageType={
    state:stateType,
    addMessageUsers:()=>void
    messagesPage: messagesPageType,
    addMessageUsersChange:(newMessageUsers: string)=>void,
}
export const DialogsMessage: React.FC<DialogsMessageType> = (props ) => {

    return (
        <div className={s.dialogs}>
            <Users state={props.state}/>
            <MessageUsers state={props.state}
                          message={props.messagesPage.message}
                          addMessageUsers={props.addMessageUsers}
                          addMessageUsersChange={props.addMessageUsersChange}
            />
        </div>
    );
}