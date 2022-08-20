import React, {ChangeEvent, useState} from 'react';
import s from "./MessageUsers.module.css";
import {StoreType} from "../../../../redux/state";

type MessageUsersType = {
    store: StoreType,
    addMessageUsers:()=>void,
    message: string,
    addMessageUsersChange:(newMessageUsers: string)=>void,
}

export const MessageUsers = (props: MessageUsersType) => {
    let [errorText, setErrorText] = useState<string | null>(null)

    const addMessages = () => {
        if (props.message !== ""){
            props.addMessageUsers();
        }else {
            setErrorText(errorText)
        }
    }
    const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.addMessageUsersChange(event.currentTarget.value);
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
            <textarea onChange={addMessagesChange} value={props.message}></textarea>
            <br/>
            <button onClick={addMessages}>send</button>
        </div>
    );
};

