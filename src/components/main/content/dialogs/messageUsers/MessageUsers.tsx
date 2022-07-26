import React from 'react';
import s from "./MessageUsers.module.css";


type usersMessagesType = {
    id: string,
    sms: string
}

type MessageUsersType = {
    usersMessages: usersMessagesType[]
}
export const MessageUsers = (props: MessageUsersType) => {
    return (
        <div className={s.dialogs__messages}>
            Messages
            {props.usersMessages.map(uM => {
                return (
                    <div key={uM.id} className={s.dialogs__users}>
                        {uM.sms}
                    </div>
                )
            })}
        </div>
    );
};

