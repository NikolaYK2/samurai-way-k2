import React, {ChangeEvent, useState} from 'react';
import s from "./MessageUsers.module.css";
import {
    ActionsTypeMessagesUsers,
    addMessageUsersAC,
    addMessageUsersChangeAC,
    addPostAC,
    StoreType
} from "../../../../redux/state";

type MessageUsersType = {
    store: StoreType,
    // addMessageUsers:()=>void,
    // addMessageUsersChange:(newMessageUsers: string)=>void,
    message: string,
    dispatch:(action: ActionsTypeMessagesUsers)=>void,
}

export const MessageUsers = (props: MessageUsersType) => {
    let [errorText, setErrorText] = useState<string | null>(null)

    const addMessages = () => {
        if (props.message !== ""){
            props.dispatch(addMessageUsersAC(props.message));
        }else {
            setErrorText(errorText)
        }
    }
    const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addMessageUsersChangeAC(event));
    }

    return (
        <div className={s.dialogs__messages}>
            Messages
            {props.store.getState().messagesPage.usersMessages.map(uM => {
                return (
                    <div key={uM.id} className={s.dialogs__users}>
                        <div  >{uM.sms}</div>
                    </div>
                )
            })}
            <textarea placeholder='Введите сообщение' onChange={addMessagesChange} value={props.message}></textarea>
            <br/>
            <button onClick={addMessages}>send</button>
        </div>
    );
};

