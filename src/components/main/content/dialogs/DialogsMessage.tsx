import React from "react";
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";
import {MessageUsers} from "./messageUsers/MessageUsers";
import {Users} from "./users/Users";
//DATA =============================================================
const users = [
    {id: v1(), name: "Nik", link: "/dialogs/1"},
    {id: v1(), name: "Vita", link: "/dialogs/2"},
    {id: v1(), name: "Vova", link: "/dialogs/3"},
    {id: v1(), name: "Dima", link: "/dialogs/4"},
]
const usersMessages = [
    {id: v1(), sms: "Hi",},
    {id: v1(), sms: "How is your",},
    {id: v1(), sms: "Eeeee",},
    {id: v1(), sms: "Cool",},
]

//=================================================
export const DialogsMessage = () => {

    return (
        <div className={s.dialogs}>
            <Users users={users}/>
            <MessageUsers usersMessages={usersMessages}/>
        </div>
    );
}