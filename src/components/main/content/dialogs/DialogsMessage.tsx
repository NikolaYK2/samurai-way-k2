import React from "react";
import s from "./DialogsMessage.module.css";
import {Users} from "./users/Users";
import {MessageUsersContainer} from "./messageUsers/MessageUsersContainer";

type DialogsMessageType={
    // store:StoreType,
}
export const DialogsMessage: React.FC<DialogsMessageType> = (props ) => {

    return (
        <div className={s.dialogs}>
            <Users /*store={props.store}*//>
            <MessageUsersContainer
                // store={props.store}
                          // message={props.store.getState().messagesPage.message}
                          // dispatch={props.store.dispatch.bind(props.store)}
                          // addMessageUsersChange={props.store.dispatch.bind(props.store)}
            />
        </div>
    );
}