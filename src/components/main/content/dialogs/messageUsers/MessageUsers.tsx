import React from 'react';
import s from "./MessageUsers.module.css";
import {stateType} from "../../../../redux/state";

type MessageUsersType = {
    state: stateType
}

export const MessageUsers = (props: MessageUsersType) => {

    const newMessages = React.createRef<HTMLDivElement>();
    const addMessages = () => {
        let text = newMessages.current?.id;
        alert(text)
    }


    return (
        <div className={s.dialogs__messages}>
            Messages
            {props.state.messagesPage.usersMessages.map(uM => {

                return (
                    <div key={uM.id} className={s.dialogs__users}>
                        <div ref={newMessages} onClick={addMessages}>{uM.sms}</div>
                    </div>
                )
            })}
        </div>
    );
};

