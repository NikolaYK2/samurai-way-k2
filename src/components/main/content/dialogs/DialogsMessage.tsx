import React from "react";
import s from "./DialogsMessage.module.css";
import {MessageUsers} from "./messageUsers/MessageUsers";
import {Users} from "./users/Users";
import {messagesPageType,StoreType} from "../../../redux/state";

type DialogsMessageType={
    store:StoreType,
}
export const DialogsMessage: React.FC<DialogsMessageType> = (props ) => {

    return (
        <div className={s.dialogs}>
            <Users store={props.store}/>
            <MessageUsers store={props.store}
                          message={props.store.getState().messagesPage.message}
                          addMessageUsers={props.store.addMessageUsers.bind(props.store)}
                          addMessageUsersChange={props.store.addMessageUsersChange.bind(props.store)}
            />
        </div>
    );
}