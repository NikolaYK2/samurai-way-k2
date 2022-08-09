import React from "react";
import s from "./DialogsMessage.module.css";
import {MessageUsers} from "./messageUsers/MessageUsers";
import {Users} from "./users/Users";
import {stateType} from "../../../redux/state";

type DialogsMessageType={
    state:stateType
}
export const DialogsMessage: React.FC<DialogsMessageType> = (props ) => {

    return (
        <div className={s.dialogs}>
            <Users state={props.state}/>
            <MessageUsers state={props.state}/>
        </div>
    );
}