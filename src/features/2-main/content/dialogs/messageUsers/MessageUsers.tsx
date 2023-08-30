import React from 'react';
import s from "./MessageUsers.module.css";
import {MessageUsersType} from "features/2-main/content/dialogs/messageUsers/MessageUsersContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";

export const MessageUsers = (props: MessageUsersType) => {
    return (
        <div className={s.dialogs__messages}>
            Messages
            {props.usersMessages.map(uM => {
                return (
                    <div key={uM.id} className={s.dialogs__users}>
                        <div>{uM.sms}</div>
                    </div>
                )
            })}
            <FormTextarea messages={props.usersMessages} addMessages={props.addMessageUsers}/>
        </div>
    );
};


