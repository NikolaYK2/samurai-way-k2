import React from "react";
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

// const users = [
//     {id: v1(), name: "Nik", link: "/dialogs/1"},
//     {id: v1(), name: "Vita", link: "/dialogs/2"},
//     {id: v1(), name: "Vova", link: "/dialogs/3"},
//     {id: v1(), name: "Dima", link: "/dialogs/4"},
// ]
// type usersType = {
//     id: string,
//     link: string
//     name: string
//
// }
// type UserType = {
//     users: usersType[]
// }

type UsersType={
    id:string,
    name:string,
}
const Users = (props: UsersType) => {
    let path = "/dialogs/" + props.id;
    return (
        <>
            <div><NavLink to={path} className={({isActive}) => isActive ? s.active : undefined}>{props.name}</NavLink></div>
            {/*{props.users.map(el => {*/}
            {/*    return (*/}
            {/*        <div key={el.id}>*/}
            {/*            <div><NavLink to={el.link} className={({isActive}) => isActive ? s.active : undefined}>{el.name}</NavLink></div>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </>
    );
};

type MessageUsersType={
    sms:string,
}
const MessageUsers=(props:MessageUsersType)=>{
    return(
    <div>
        {props.sms}
    </div>
    );
};

export const DialogsMessage = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__users}>
                Dialogs
                <Users name="Nik" id='1'/>
                <Users name="Vita" id='2'/>
                <Users name="Vova" id='3'/>
                <Users name="Dima" id='4'/>
            </div>
            <div className={s.dialogs__messages}>
                Messages
                <MessageUsers sms="Hi"/>
                <MessageUsers sms="How is your"/>
                <MessageUsers sms="Eeeee"/>
                <MessageUsers sms="Cool"/>
            </div>
        </div>
    );
}