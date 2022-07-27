import React from "react";
import s from "./DialogsMessage.module.css";
import {MessageUsers} from "./messageUsers/MessageUsers";
import {Users} from "./users/Users";
import {users, usersMessages} from "../../../../index";
export const DialogsMessage = () => {

    return (
        <div className={s.dialogs}>
            <Users users={users}/>
            <MessageUsers usersMessages={usersMessages}/>
        </div>
    );
}